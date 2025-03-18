const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", updateCanvasSize);

window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(191, 191, 191, 0.31)"; 
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(mouseX, 0); 
    ctx.lineTo(mouseX, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, mouseY); 
    ctx.lineTo(canvas.width, mouseY);
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(mouseX - 2, mouseY - 2, 4, 4); 

    requestAnimationFrame(draw);
}

draw();
