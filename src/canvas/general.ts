export const clearCanvas = (ctx: CanvasRenderingContext2D, color = "#000") => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

export const resizeCanvasToFullScreen = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

export const keepCanvasFullScreen = (canvas: HTMLCanvasElement) => {
  window.addEventListener("resize", () => resizeCanvasToFullScreen(canvas));
};
