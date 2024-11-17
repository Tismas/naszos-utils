import {
  clearCanvas,
  drawCircle,
  drawEllipsis,
  drawLine,
  drawRect,
  createAnimator,
  Vector2,
} from ".";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const tick = createAnimator({ maxValue: Math.PI });
const pos = new Vector2(canvas.width / 2, canvas.height / 2);
// const velocity = Vector2.zero();
// const acceleration = Vector2.zero();

const draw = () => {
  clearCanvas(ctx);

  drawLine(ctx, {
    start: new Vector2(100, 100),
    end: new Vector2(200, 200),
    color: "#fff",
  });

  drawRect(ctx, {
    position: new Vector2(300, 100),
    height: 100,
    width: 50,
    rotation: Math.PI / 6,
    color: "#fff",
  });

  drawCircle(ctx, {
    color: "#fff",
    position: new Vector2(500, 150),
    radius: 50,
  });

  drawEllipsis(ctx, {
    color: "#fff",
    position: new Vector2(700, 150),
    radiusX: 100,
    radiusY: 50,
  });
};

const update = () => {
  pos.y = canvas.height / 2 - Math.sin(tick()) * 100;
};

const loop = () => {
  update();
  draw();
};

setInterval(loop, 1000 / 60);
