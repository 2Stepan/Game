import { map, drawMap } from './map.js';
import Player from './player.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = map.width;
canvas.height = map.height;

canvas.tabIndex = 0;
canvas.style.outline = 'none';

const player = new Player(canvas, map);
const keys = { w: false, a: false, d: false };

let gameStartTime = 0;
let currentGameTime = 0;
let isGameRunning = false;

const timerDisplay = document.createElement('div');

function startTimer() {
    gameStartTime = Date.now();
    isGameRunning = true;
    updateTimer();
}

function updateTimer() {
    if (!isGameRunning) return;

    currentGameTime = Math.floor((Date.now() - gameStartTime) / 1000);
    timerDisplay.textContent = `Time: ${formatTime(currentGameTime)}`;
    requestAnimationFrame(updateTimer);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


function handleKeyDown(e) {
    switch (e.key.toLowerCase()) {
        case "w": case "arrowup": keys.w = true; break;
        case "a": case "arrowleft": keys.a = true; break;
        case "d": case "arrowright": keys.d = true; break;

    }
    console.log('Key down:', e.key, keys);
}

function handleKeyUp(e) {
    switch (e.key.toLowerCase()) {
        case "w": case "arrowup": keys.w = false; break;
        case "a": case "arrowleft": keys.a = false; break;
        case "d": case "arrowright": keys.d = false; break;
    }
    console.log('Key up:', e.key, keys);
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);



function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const currentLevelData = map[`level${map.currentLevel}`];

    if ((keys.a || keys.d || keys.w) && !isGameRunning) {
        startTimer();
    }

    if (keys.a) player.x -= player.speed;
    if (keys.d) player.x += player.speed;
    if (keys.w) player.jump();

   drawMap(ctx);
    
    player.update(currentLevelData.platforms);
    player.draw(ctx);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`HP: ${player.hp}`, 20, 30);
    ctx.fillText(`Время: ${formatTime(currentGameTime)}`, 20, 50);
    ctx.fillText(`Очки: ${player.score}`, 20, 70);
    ctx.fillText(`Смерти: ${player.dead}`, 20, 90);


    ctx.fillText(`X: ${player.x}`, 1800, 90);
    ctx.fillText(`Y: ${player.y}`, 1800, 110);

    requestAnimationFrame(gameLoop);
}

window.addEventListener('load', () => {
    console.log('Game started');
    gameLoop();
});