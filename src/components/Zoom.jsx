import { forwardRef } from "react";

const Zoom = forwardRef((_, ref) => (
  <canvas
    className="fixed rounded-sm bottom-20 left-8 z-70 -skew-y-6"
    ref={ref}
    width="300"
    height="300"
  />
));

export default Zoom;
