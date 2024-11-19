import { useEffect, useRef, useState } from "react";
import { DrawFn } from "./use-draw";

export const useCanvas = (drawFn: DrawFn) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasContext, setCanvasContext] =
    useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
      const width = canvasRef.current?.width ?? 0;
      const height = canvasRef.current?.height ?? 0;
      const ctx = canvasRef.current?.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      setCanvasContext(ctx);
      const middlew = width / 2;
      const middleh = height / 2;
      drawFn(ctx, { x: middlew, y: middleh });
    }
  }, [drawFn]);

  return { canvasRef, canvasContext };
};
