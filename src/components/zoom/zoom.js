import React from "react";

const Zoom = React.forwardRef((_, ref) => (
  <canvas
    ref={ref}
    width="128"
    height="128"
    className="fixed border-2 rounded-sm border-slate-500 bottom-20 left-8 z-70 -skew-y-6"
  ></canvas>
));

export default Zoom;
