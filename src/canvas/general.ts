export const clearCanvas = (ctx: CanvasRenderingContext2D, color = "#000") => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
