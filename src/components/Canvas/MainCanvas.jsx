import { forwardRef } from "react";

export default forwardRef(({ handleMove }, ref) => (
  <canvas
    className="z-0 cursor-crosshair select-none"
    ref={ref}
    width="300"
    height="300"
    onPointerMove={handleMove}
    onTouchStart={handleMove}
    onTouchMove={handleMove}
    onTouchEnd={handleMove}
  />
));