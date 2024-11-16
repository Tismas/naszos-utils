import { createAnimator } from "./numbers/animate";
import { Vector2 } from "./vector/Vector2";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const tick = createAnimator({ maxValue: Math.PI });
const pos = new Vector2(canvas.width / 2, canvas.height / 2);

const draw = () => {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2);
  ctx.fill();
};

const update = () => {
  pos.y = canvas.height / 2 - Math.sin(tick()) * 100;
};

const loop = () => {
  update();
  draw();
};

setInterval(loop, 1000 / 60);
