import { forwardRef } from "react";

const Zoom = forwardRef((_, ref) => (
  <canvas
    className="fixed border-2 rounded-sm border-slate-500 bottom-20 left-8 z-70 -skew-y-6"
    ref={ref}
    width="128"
    height="128"
  />
));

export default Zoom;
