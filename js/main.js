const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(evt) {
  if(!isDrawing) return;
  // console.log(evt);
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(evt.offsetX, evt.offsetY);
  ctx.stroke();
  lastX = evt.offsetX;
  lastY = evt.offsetY;

  hue++;
  if(hue >=360) {
    hue = 0;
  }
  if(ctx.lineWidth >= 70 || ctx.lineWidth <=1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

function mouseDownPosition(evt) {
  isDrawing = true;
  lastX = evt.offsetX;
  lastY = evt.offsetY;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", mouseDownPosition);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
