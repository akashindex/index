import React, { useRef, useEffect } from "react";
import View from "./View";

interface ThreeJsCanvasProps
  extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

export const ThreeJsCanvas: React.FC<ThreeJsCanvasProps> = ({ ...rest }) => {
  const reactCanvas = useRef<HTMLCanvasElement>(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;
    if (!canvas) return;
    const view = new View(canvas);
    view.animate();
  }, []);

  return <canvas ref={reactCanvas} {...rest} />;
};
