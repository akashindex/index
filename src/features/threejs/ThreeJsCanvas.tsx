import React, { useRef, useEffect } from "react";
import View from "./View";

interface ThreeJsCanvasWapperProps
  extends React.CanvasHTMLAttributes<HTMLDivElement> {}
var hasInit = false;
export const ThreeJsCanvas: React.FC<ThreeJsCanvasWapperProps> = () => {
  const reactCanvasWrapper = useRef<HTMLDivElement>(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current } = reactCanvasWrapper;
    if (current && !hasInit) {
      hasInit = true;
      const view = new View(current);
      view.init();
      view.animate();
    }
  }, []);

  return <div className="main-canvas-wrapper" ref={reactCanvasWrapper}></div>;
};
