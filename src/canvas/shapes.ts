import { Vector2 } from "../vector/Vector2";

interface DrawLineOptions {
  color: string;
  start: Vector2;
  end: Vector2;
}
export const drawLine = (
  ctx: CanvasRenderingContext2D,
  { start, end, color }: DrawLineOptions
) => {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
};

interface DrawRectOptions {
  color: string;
  position: Vector2;
  width: number;
  height: number;
  rotation?: number;
  filled?: boolean;
}
export const drawRect = (
  ctx: CanvasRenderingContext2D,
  {
    color,
    position,
    width,
    height,
    rotation = 0,
    filled = false,
  }: DrawRectOptions
) => {
  filled ? (ctx.fillStyle = color) : (ctx.strokeStyle = color);

  ctx.save();
  ctx.translate(position.x + width / 2, position.y + height / 2);
  ctx.rotate(rotation);

  ctx.beginPath();
  ctx.rect(-width / 2, -height / 2, width, height);

  ctx.restore();

  filled ? ctx.fill() : ctx.stroke();
};

interface DrawCircleOptions {
  color: string;
  position: Vector2;
  radius: number;
  filled?: boolean;
}
export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  { color, position, radius, filled = false }: DrawCircleOptions
) => {
  filled ? (ctx.fillStyle = color) : (ctx.strokeStyle = color);

  ctx.beginPath();
  ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);

  filled ? ctx.fill() : ctx.stroke();
};

interface DrawEllipsisOptions {
  color: string;
  position: Vector2;
  radiusX: number;
  radiusY: number;
  rotation?: number;
  filled?: boolean;
}
export const drawEllipsis = (
  ctx: CanvasRenderingContext2D,
  {
    color,
    position,
    radiusX,
    radiusY,
    filled = false,
    rotation = 0,
  }: DrawEllipsisOptions
) => {
  filled ? (ctx.fillStyle = color) : (ctx.strokeStyle = color);

  ctx.beginPath();
  ctx.ellipse(
    position.x,
    position.y,
    radiusX,
    radiusY,
    rotation,
    0,
    Math.PI * 2
  );

  filled ? ctx.fill() : ctx.stroke();
};
