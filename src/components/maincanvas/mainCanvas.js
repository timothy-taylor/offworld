import React from 'react';

const MainCanvas = React.forwardRef((_,ref) => (
  <canvas  ref={ref} width="300" height="300" className="z-0 cursor-crosshair"></canvas>
));

export default MainCanvas;
