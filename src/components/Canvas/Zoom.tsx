import { forwardRef } from "react";

type Ref = HTMLCanvasElement;

export default forwardRef<Ref>(function Zoom(_, ref) {
    return (
        <canvas
            className="z-70 fixed bottom-10 left-8 -skew-y-6 rounded-sm"
            ref={ref}
            width="250"
            height="250"
        />
    );
});
