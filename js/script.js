const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px Arial";

function drawPaddle(x, y) {
    ctx.fillRect(x, y, 20, 100);
}

function drawText(text, x, y) {
    ctx.fillText(text, x, y);
}

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    
    ctx.fill();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
ctx.fillStyle = "white";
drawPaddle(770, 100);
drawPaddle(10, 300);

ctx.fillStyle = "red";
drawText("3", 300, 50);
drawText("6", 500, 50);
ctx.fillStyle = "yellow";
drawCircle(400, 250, 15);








