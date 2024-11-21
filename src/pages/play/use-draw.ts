import { DrawInstructions } from "./object-types";
import { MapDetails } from "./use-map";

export type DrawFn = (
  ctx: CanvasRenderingContext2D,
  middle: { x: number; y: number }
) => void;

const doDraw = (
  inst: DrawInstructions[],
  ctx: CanvasRenderingContext2D,
  from: { x: number; y: number }
) => {
  inst.forEach((i) => {
    if (i.square) {
      ctx.fillStyle = i.color;
      ctx.fillRect(
        from.x + (i.square.start?.[0] ?? 0),
        from.y + (i.square.start?.[1] ?? 0),
        i.square.length?.[0] ?? 0,
        i.square.length?.[1] ?? 0
      );
    } else if (i.path) {
      ctx.fillStyle = i.color;
      ctx.beginPath();
      i.path?.forEach((p) => ctx.lineTo(from.x + p[0], from.y + p[1]));
      ctx.fill();
    } else if (i.circle) {
      console.log("circle");
      ctx.fillStyle = i.color;
      ctx.beginPath();
      const radius = i.circle.length / 2;
      console.log("radius", radius);
      ctx.arc(
        from.x + i.circle.start[0] + radius,
        from.y + i.circle.start[1] + radius,
        radius,
        0,
        2 * Math.PI,
        false
      );

      ctx.fill();
    }
  });
};

export const useDraw = ({ width, height, map }: MapDetails) => {
  const draw: DrawFn = (ctx, middle) => {
    const drawWidth = width * 50;
    const drawHeight = height * 50;
    map.forEach((cell, [x, y]) => {
      const fromx = middle.x - drawWidth / 2 + x * 50;
      const fromy = middle.y - drawHeight / 2 + y * 50;

      const instructions = cell.terrain.drawInstructions(cell.terrain);
      doDraw(instructions, ctx, { x: fromx, y: fromy });

      cell.objects?.forEach((object) => {
        const instructions2 = object.drawInstructions(object);
        doDraw(instructions2, ctx, { x: fromx, y: fromy });
      });
    });
  };

  return { draw };
};
