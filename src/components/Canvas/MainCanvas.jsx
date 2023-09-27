import { forwardRef } from "react";

export default forwardRef(function MainCanvas({ handleMove }, ref) {
    return (
        <canvas
            className="z-0 cursor-crosshair select-none"
            ref={ref}
            width="300"
            height="300"
            onPointerMove={handleMove}
        />
    );
});
