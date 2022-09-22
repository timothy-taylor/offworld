import { forwardRef } from "react";

const Zoom = forwardRef((_, ref) => (
  <canvas
    className="fixed rounded-sm bottom-10 left-8 z-70 -skew-y-6"
    ref={ref}
    width="250"
    height="250"
  />
));

export default Zoom;
