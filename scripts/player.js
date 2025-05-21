class Player {
    constructor(canvas, map) {
        this.canvas = canvas;
        this.map = map;
        this.x = 100;
        this.y = 500;
        this.radius = 25;
        this.speed = 5.5;
        this.jumpForce = 12.5;   // Сила прыжка
        this.velocityY = 0;    // Вертикальная скорость
        this.gravity = 0.3;    // Ускорение падения
        this.maxFallSpeed = 15; // Максимальная скорость падения
        this.isGrounded = false; // На земле ли персонаж
        this.hp = 100;
        this.dead = 0;
        this.score = 0;

        this.isInLava = false;
        this.lastLavaDamageTime = 0;
        this.lavaDamageInterval = 2000;
        this.damageFlash = 0;
        this.invulnerable = false;
    }

    update(platforms) {
        this.velocityY = Math.min(this.velocityY + this.gravity, this.maxFallSpeed);
        this.y += this.velocityY;

        this.checkPlatformCollisions(platforms);
        this.checkLavaCollision();
        this.checkItems();

        if (this.y + this.radius > this.map.height) {
            this.y = this.map.height - this.radius;
            this.isGrounded = true;
            this.velocityY = 0;
        } else if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.velocityY = 0;
        }

        this.x = Math.max(this.radius, Math.min(this.x, this.map.width - this.radius));
    }

    checkPlatformCollisions(platforms) {
        this.isGrounded = false;

        platforms.forEach(plat => {
            if (plat.type === "triangle") {
                if (plat.direction === "right") {
                    this.checkRightTriangleSlope(plat);
                } else {
                    this.checkLeftTriangleSlope(plat);
                }
            } else {
                this.checkRectanglePlatformCollision(plat);
                this.checkRectangleSideCollision(plat);
            }
        });
    }

    checkRectanglePlatformCollision(plat) {
        if (this.x + this.radius > plat.x &&
            this.x - this.radius < plat.x + plat.width &&
            this.y + this.radius >= plat.y &&
            this.y + this.radius <= plat.y + 15) {

            this.isGrounded = true;
            this.y = plat.y - this.radius;
            this.velocityY = 0;
        }
    }

    checkRectangleSideCollision(plat) {
        if (this.y + this.radius > plat.y &&
            this.y - this.radius < plat.y + plat.height) {

            if (this.x - this.radius < plat.x + plat.width &&
                this.x - this.radius > plat.x + plat.width - 15) {
                this.x = plat.x + plat.width + this.radius;
            }
            if (this.x + this.radius > plat.x &&
                this.x + this.radius < plat.x + 15) {
                this.x = plat.x - this.radius;
            }
        }
    }

    checkTriangleSideCollision(triangle) {
        const triangleBottom = triangle.y;
        const triangleTop = triangle.y - triangle.height;

        if (this.y - this.radius < triangleBottom &&
            this.y + this.radius > triangleTop) {

            if (this.x + this.radius > triangle.x &&
                this.x + this.radius < triangle.x + 15) {
                this.x = triangle.x - this.radius;
            }
            if (this.x - this.radius < triangle.x + triangle.width &&
                this.x - this.radius > triangle.x + triangle.width - 15) {
                this.x = triangle.x + triangle.width + this.radius;
            }
        }
    }

    handleTriangleCollision(triangle) {
        const triangleBottom = triangle.y;
        const triangleHeight = triangle.height;
        const triangleLeft = triangle.x;
        const triangleRight = triangle.x + triangle.width;

        if (this.x + this.radius < triangleLeft || this.x - this.radius > triangleRight) {
            return;
        }

        let surfaceY;
        if (triangle.direction === "right") {
            const relativeX = this.x - triangleLeft;
            surfaceY = triangleBottom - (relativeX / triangle.width) * triangleHeight;
        } else {
            const relativeX = triangleRight - this.x;
            surfaceY = triangleBottom - (relativeX / triangle.width) * triangleHeight;
        }


    }

    checkRightTriangleSlope(triangle) {
        const slope = triangle.height / triangle.width;
        const triangleBaseY = triangle.y;
        const triangleLeft = triangle.x;
        const triangleRight = triangle.x + triangle.width;

        if (this.x + this.radius > triangleLeft &&
            this.x - this.radius < triangleRight &&
            this.y + this.radius > triangleBaseY - triangle.height) {

            const relativeX = this.x - triangleLeft;
            const surfaceY = triangleBaseY - slope * relativeX;

            if (this.y + this.radius >= surfaceY - 5 &&
                this.y - this.radius < surfaceY + 5) {

                this.isGrounded = true;
                this.y = surfaceY - this.radius;
                this.velocityY = 0;
            }
        }
    }

    checkLeftTriangleSlope(triangle) {
        const slope = triangle.height / triangle.width;
        const triangleBaseY = triangle.y;
        const triangleLeft = triangle.x;
        const triangleRight = triangle.x + triangle.width;

        if (this.x + this.radius > triangleLeft &&
            this.x - this.radius < triangleRight &&
            this.y + this.radius > triangleBaseY - triangle.height) {

            const relativeX = triangleRight - this.x;
            const surfaceY = triangleBaseY - slope * relativeX;

            if (this.y + this.radius >= surfaceY - 5 &&
                this.y - this.radius < surfaceY + 5) {

                this.isGrounded = true;
                this.y = surfaceY - this.radius;
                this.velocityY = 0;
            }
        }
    }

    checkItems() {
        const level = this.map[`level${this.map.currentLevel}`];
        if (!level.items) return;

        let collectedCount = 0;
        let totalRequiredItems = 0;

        level.items.forEach(item => {
            if (item.required !== false) {
                totalRequiredItems++;
            }
        });

        level.items.forEach(item => {
            if (!item.collected &&
                this.x + this.radius > item.x &&
                this.x - this.radius < item.x + item.width &&
                this.y + this.radius > item.y &&
                this.y - this.radius < item.y + item.height) {

                item.collected = true;
                this.score += item.points || 100;

                if (item.type === "diamond" && level.qrCode) {
                    level.qrCode.shown = true;
                }
            }
            if (item.required !== false && item.collected) {
                collectedCount++;
            }
        });

        if (collectedCount >= totalRequiredItems && totalRequiredItems > 0) {
            this.map.currentLevel += 1;
            this.respawn();
        }
    }



    checkLavaCollision() {
        this.isInLava = false;

        const currentLevel = this.map[`level${this.map.currentLevel}`];
        if (!currentLevel.obstacles) return;

        currentLevel.obstacles.forEach(obs => {
            if (obs.type !== "lava") return;

            if (this.x + this.radius > obs.x &&
                this.x - this.radius < obs.x + obs.width &&
                this.y + this.radius > obs.y &&
                this.y - this.radius < obs.y + obs.height) {

                this.isInLava = true;
                this.handleLavaDamage(obs.damage || 20);
            }
        });
    }

    handleLavaDamage(damage) {
        if (this.invulnerable) return;

        const now = Date.now();
        if (now - this.lastLavaDamageTime >= this.lavaDamageInterval) {
            this.takeDamage(damage);
            this.lastLavaDamageTime = now;

            this.invulnerable = true;
            setTimeout(() => {
                this.invulnerable = false;
            }, 1000);
        }
    }

    takeDamage(amount) {
        this.hp = Math.max(0, this.hp - amount);
        this.damageFlash = 5;

        if (this.hp <= 0) {
            this.handleDeath();
        }
    }

    handleDeath() {
        console.log("Игрок погиб!");
        this.dead++;
        this.respawn();
    }

    respawn() {
        this.x = 100;
        this.y = 500;
        this.hp = 100;
        this.velocityY = 0;
        this.invulnerable = false;
    }

    jump() {
        if (this.isGrounded) {
            this.velocityY = -this.jumpForce;
        }
    }

    draw(ctx) {
        if (this.damageFlash > 0) {
            ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
            ctx.fillRect(
                this.x - this.radius - 5,
                this.y - this.radius - 15,
                this.radius * 2 + 10,
                this.radius * 2 + 20
            );
            this.damageFlash--;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.invulnerable ? "rgba(255, 0, 0, 0.5)" : "red";
        ctx.fill();

        const hpPercent = this.hp / 100;
        ctx.fillStyle = `rgb(${255 * (1 - hpPercent)}, ${255 * hpPercent}, 0)`;
        const hpWidth = this.radius * 2 * hpPercent;
        ctx.fillRect(
            this.x - this.radius,
            this.y - this.radius - 10,
            hpWidth,
            5
        );
    }
}

export default Player;