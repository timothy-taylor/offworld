import { forwardRef } from "react";

const MainCanvas = forwardRef(({ handleMove }, ref) => (
  <canvas
    className="z-0 cursor-crosshair select-none"
    ref={ref}
    width="300"
    height="300"
    onPointerMove={handleMove}
  />
));

export default MainCanvas;