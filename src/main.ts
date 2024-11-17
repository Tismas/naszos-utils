import {
  clearCanvas,
  createAnimator,
  Vector2,
  drawEllipsis,
  keepCanvasFullScreen,
} from ".";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const tick = createAnimator({ maxValue: 0.2, speed: 0.02, loop: true });
let pos = new Vector2(canvas.width / 2, canvas.height / 2);
let velocity = Vector2.zero();
let squashFactor = 0;
const radius = 20;
const acceleration = new Vector2(0, 0.1);

const getSquashedRadiusY = () => {
  return radius - radius * squashFactor;
};
const getSquashedRadiusX = () => {
  return radius + radius * squashFactor;
};

const draw = () => {
  clearCanvas(ctx);

  drawEllipsis(ctx, {
    color: "#fff",
    position: pos,
    radiusX: getSquashedRadiusX(),
    radiusY: getSquashedRadiusY(),
    filled: true,
  });
};

const update = () => {
  if (squashFactor) {
    squashFactor = tick();
    pos.y = canvas.height - getSquashedRadiusY();

    if (squashFactor) return;
  }

  velocity = velocity.add(acceleration);
  pos = pos.add(velocity);

  if (pos.y >= canvas.height - radius) {
    squashFactor = tick();
    pos.y = canvas.height - getSquashedRadiusY();
    velocity.y = -velocity.y;
  }
};

const loop = () => {
  update();
  draw();
};

keepCanvasFullScreen(canvas);
setInterval(loop, 1000 / 60);
