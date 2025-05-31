// Конфигурация уровня
const map = {
    width: 1920,
    height: 1080,
    currentLevel: 3,

    level1: {
        bgColor: "rgb(52, 152, 219)",
        platforms: [
            {
                x: 0, y: 980, width: 1920, height: 100,
                type: "ground", color: "rgb(39, 174, 96)", friction: 0.9
            },
            {
                x: 300, y: 800, width: 200, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 700, y: 650, width: 200, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 1100, y: 500, width: 200, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 800, y: 300, width: 200, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 400, y: 300, width: 150, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 100, y: 100, width: 200, height: 20,
                type: "platform", friction: 0.7
            }
        ],
        items: [
            { x: 90, y: 50, width: 30, height: 30, type: "coin", points: 100 },
            { x: 800, y: 680, width: 30, height: 30, type: "coin", points: 100 },
            { x: 1230, y: 920, width: 30, height: 30, type: "coin", points: 100 }
        ],
        obstacles: [
            {
                x: 555, y: 979, width: 555, height: 200,
                type: "lava", color: "rgb(255, 50, 50)", damage: 25
            }

        ],
        decorations: [
            {
                x: 1200, y: 920,
                type: "bush", color: "rgb(20, 189, 93)"
            }
        ]
    },
    level2: {
        bgColor: "rgb(100, 200, 255)",
        platforms: [
            {
                x: 0, y: 980, width: 1920, height: 100,
                type: "ground", color: "rgb(50, 200, 100)", friction: 0.9
            },
            {
                x: 1401, y: 727, width: 448, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 1850, y: 830, width: 70, height: 150,
                type: "platform", friction: 0.7
            },
            {
                x: 1845, y: 728, width: 20, height: 350,
                type: "platform", friction: 0.7
            },
            {
                x: 1300, y: 727, width: 100, height: 350,
                type: "platform", friction: 0.7
            },
            {
                x: 900, y: 500, width: 180, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 450, y: 250, width: 160, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 1400, y: 400, width: 160, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 1000, y: 970,
                type: "triangle",
                width: 300, height: 250,
                direction: "right",
            },
        ],
        obstacles: [
            {
                x: 1401, y: 725, width: 448, height: 500,
                type: "lava", color: "rgb(255, 50, 50)", damage: 25
            },
        ],
        items: [
            { x: 130, y: 170, width: 30, height: 30, type: "coin", points: 100 },
            { x: 1550, y: 150, width: 30, height: 30, type: "coin", points: 100 },
            { x: 1864, y: 760, width: 30, height: 30, type: "coin", points: 100 },
            { x: 915, y: 150, width: 40, height: 40, type: "diamond", points: 500, required: false  }
        ],
        decorations: [
            {
                x: 1875, y: 680,
                type: "bush", color: "rgb(50, 200, 100)"
            },
            {
                x: 1875, y: 750,
                type: "bush", color: "rgb(50, 200, 100)"
            },
            {
                x: 1500, y: 100,
                type: "cloud",
            },
            {
                x: 1300, y: 150,
                type: "cloud",
            },
            {
                x: 1000, y: 100,
                type: "cloud",
            },
            {
                x: 500, y: 30,
                type: "cloud",
            },
            {
                x: 100, y: 150,
                type: "cloud",
            },
        ],
        qrCode: {
            x: 1700,
            y: 200,
            width: 200,
            height: 200,
            shown: false,
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        }
    },
    level3: {
        bgColor: "rgb(100, 200, 255)",
        platforms: [
            {
                x: 0, y: 980, width: 1920, height: 100,
                type: "ground", color: "rgb(50, 200, 100)", friction: 0.9
            },
            {
                x: 0, y: 790, width: 50, height: 200,
                type: "platform", friction: 0.7
            },
            {
                x: 50, y: 727, width: 100, height: 260,
                type: "platform", friction: 0.7
            },
            {
                x: 400, y: 720, width: 70, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 800, y: 650, width: 70, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 1200, y: 450, width: 70, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 800, y: 300, width: 70, height: 20,
                type: "platform", friction: 0.7
            },
            {
                x: 150, y: 970,
                type: "triangle",
                width: 300, height: 250,
                direction: "left",
            },
            {
                x: 1350, y: 970,
                type: "triangle",
                width: 200, height: 250,
                direction: "right",
            },
            {
                x: 1550, y: 970,
                type: "triangle",
                width: 300, height: 250,
                direction: "left",
            },
            {
                x: 1750, y: 970,
                type: "triangle",
                width: 100, height: 250,
                direction: "right",
            },
            {
                x: 1850, y: 970,
                type: "triangle",
                width: 100, height: 250,
                direction: "left",
            },
        ],
        obstacles: [
            {
                x: 450, y: 970, width: 900, height: 10,
                type: "lava", color: "rgb(255, 50, 50)", damage: 20
            },
        ],

        items: [
            { x: 580, y: 150, width: 30, height: 30, type: "coin", points: 100 },
            { x: 1150, y: 900, width: 30, height: 30, type: "coin", points: 100 },
            { x: 1600, y: 200, width: 30, height: 30, type: "coin", points: 100 },
            { x: 10, y: 750, width: 40, height: 40, type: "diamond", points: 500, required: false  }
        ],

        decorations: [
            {
                x: 0, y: 705,
                type: "bush", color: "rgb(50, 200, 100)"
            },
            {
                x: 100, y: 680,
                type: "bush", color: "rgb(50, 200, 100)"
            },
            {
                x: 465, y: 900,
                type: "bush", color: "rgb(50, 200, 100)"
            },
            {
                x: 800, y: 900,
                type: "bush", color: "rgb(50, 200, 100)"
            },
            {
                x: 1100, y: 900,
                type: "bush", color: "rgb(50, 200, 100)"
            },
            {
                x: 1850, y: 800,
                type: "bush",
            },
            {
                x: 1700, y: 820,
                type: "bush",
            },
            {
                x: 100, y: 150,
                type: "cloud",
            },
            {
                x: 500, y: 100,
                type: "cloud",
            },
            {
                x: 700, y: 170,
                type: "cloud",
            },
            {
                x: 1000, y: 200,
                type: "cloud",
            },
            {
                x: 1300, y: 100,
                type: "cloud",
            },
            {
                x: 1600, y: 170,
                type: "sun",
            },

        ],
        qrCode: {
            x: 1700,
            y: 360,
            width: 200,
            height: 200,
            shown: false,
            url: "https://t.me/prostohub_networking"
        }
    },
    level4: {
        bgColor: "rgb(100, 200, 255)",
        platforms: [
            {
                x: 0, y: 980, width: 1920, height: 100,
                type: "ground", color: "rgb(50, 200, 100)", friction: 0.9
            }
        ],
        text: {
            text: "WIN",
            color: "white",
            size: 120,
            x: 960,
            y: 540
        },
        obstacles: [],
        items: [
            { x: 1000, y: 400, width: 30, height: 30, type: "coin", points: 100 },
            { x: 1075, y: 400, width: 30, height: 30, type: "coin", points: 100 },
            { x: 1150, y: 400, width: 30, height: 30, type: "coin", points: 100 }
        ],
        decorations: []
    }
};

// Отрисовка карты
function drawMap(ctx) {
    const level = map[`level${map.currentLevel}`];

    // Фон
    ctx.fillStyle = level.bgColor;
    ctx.fillRect(0, 0, map.width, map.height);

    // Платформы 
    level.platforms.forEach(plat => {
        ctx.fillStyle = plat.color;
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);


    });

    level.platforms.forEach(plat => {
        if (plat.type === "triangle") {
            ctx.fillStyle = plat.color;
            ctx.beginPath();

            if (plat.direction === "right") {
                ctx.moveTo(plat.x, plat.y);
                ctx.lineTo(plat.x + plat.width, plat.y);
                ctx.lineTo(plat.x + plat.width, plat.y - plat.height);
            } else {
                ctx.moveTo(plat.x, plat.y);
                ctx.lineTo(plat.x + plat.width, plat.y);
                ctx.lineTo(plat.x, plat.y - plat.height);
            }

            ctx.closePath();
            ctx.fill();
        } else {
            // Обычные прямоугольные платформы
            ctx.fillStyle = plat.color;
            ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        }
    });

    if (level.text) {
        ctx.fillStyle = level.text.color;
        ctx.font = `bold ${level.text.size}px Arial`;

        ctx.fillText(level.text.text, level.text.x, level.text.y);
    }

    // Препятствия
    level.obstacles.forEach(obs => {
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });

    // Предметы для сбора 
    if (level.items) {
        level.items.forEach(item => {
            if (!item.collected) {
                ctx.fillStyle = "gold";
                ctx.beginPath();
                ctx.arc(item.x + 15, item.y + 15, 15, 0, Math.PI * 2);
                ctx.fill();
            }
            else if (item.type === "diamond") {
            
            const gradient = ctx.createLinearGradient(
                item.x, item.y,
                item.x + item.width, item.y + item.height
            );
            gradient.addColorStop(0, "cyan");
            gradient.addColorStop(0.5, "blue");
            gradient.addColorStop(1, "darkblue");
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(item.x + item.width/2, item.y); 
            ctx.lineTo(item.x + item.width, item.y + item.height/2); 
            ctx.lineTo(item.x + item.width/2, item.y + item.height); 
            ctx.lineTo(item.x, item.y + item.height/2); 
            ctx.closePath();
            ctx.fill();
        }
        });
    }
    if (level.qrCode && level.qrCode.shown) {
    // Рамка
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillRect(level.qrCode.x - 15, level.qrCode.y - 15, 
                level.qrCode.width + 30, level.qrCode.height + 30);
    // QR-код
    const qrCanvas = document.createElement('canvas');
    QRCode.toCanvas(qrCanvas, level.qrCode.url, {
        width: level.qrCode.width,
        margin: 1,
        color: {
            dark: '#000000',
            light: '#ffffff'
        }
    }, (error) => {
        if (!error) {
            ctx.drawImage(qrCanvas, level.qrCode.x, level.qrCode.y);
        }
    });
}

    // Декорации
    level.decorations.forEach(dec => {
        ctx.fillStyle = dec.color;
        if (dec.type === "bush") {


            ctx.beginPath();
            ctx.arc(dec.x + 50, dec.y + 30, 50, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dec.x + 20, dec.y + 50, 45, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dec.x + 80, dec.y + 50, 45, 0, Math.PI * 2);
            ctx.fill();
        }

        if (dec.type === "cloud") {

            ctx.fillStyle = "rgb(255, 255, 255)";

            ctx.beginPath();
            ctx.arc(dec.x + 100, dec.y + 70, 50, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dec.x + 50, dec.y + 50, 40, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dec.x + 150, dec.y + 50, 35, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dec.x + 60, dec.y + 100, 35, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(dec.x + 140, dec.y + 100, 40, 0, Math.PI * 2);
            ctx.fill();
        }
        if (dec.type === "sun") {

            ctx.fillStyle = "rgb(255, 255, 0)";

            ctx.beginPath();
            ctx.arc(dec.x + 100, dec.y + 70, 100, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

export { map, drawMap };