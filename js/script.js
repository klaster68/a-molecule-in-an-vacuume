// Данные со страницы
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Данные на события
let timerID;
let flag = true;

// Данные для молекулы
const Pi = 3.14;
const R = 2, V = 1, N = 100;
let x, y, Vx, Vy, angle;

x = Math.floor(Math.random() * (canvas.width - R)) + R;
y = Math.floor(Math.random() * (canvas.height - R)) + R;
angle = Math.random() * (360 - 0) * Pi / 180;
Vx = Math.round(V * Math.sin(angle));
Vy = Math.round(V * Math.cos(angle));

function getRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

function drawMolecule() {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(x + Vx, y + Vy, R, 0, getRadians(360));

    x = x + Vx;
    y = y + Vy;

    // Проверка выхода за границы
    if (x > canvas.width - R) {
        x = canvas.width - R;
        Vx = -Vx;
    }
    if (x < R) {
        x = R;
        Vx = -Vx;
    }
    if (y > canvas.height - R) {
        y = canvas.width - R;
        Vy = -Vy;
    }
    if (y < R) {
        y = R;
        Vy = -Vy;
    }

    ctx.stroke();
}

// Кнопки старт-стоп
start.addEventListener('click', () => {
    if(flag){
        timerID = setInterval(drawMolecule, 10);
        flag = false;
    }
});

stop.addEventListener('click', () => {
    if(!flag){
        clearInterval(timerID);
        flag = true;
    }
});
