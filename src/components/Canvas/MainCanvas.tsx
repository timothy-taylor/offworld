import { forwardRef } from "react";

type Ref = HTMLCanvasElement;
type Props = {
    handleMove: (e: any) => void;
};

export default forwardRef<Ref, Props>(function MainCanvas({ handleMove }, ref) {
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
