import React from 'react';
import { PlayIcon, StopIcon, UserIcon, SettingsIcon } from "../icons.js";

const ControlHeader = React.forwardRef((props,ref) => (
  <header className="">
    <UserIcon />
    <button
      className="fixed z-30 flex items-center p-4 font-mono rounded-sm top-40 left-6 bg-slate-500 opacity-70 hover:opacity-100 -skew-y-2"
      onClick={() => props.player.handleExplore(ref.current)}
    >
      <PlayIcon />
      <span className="pl-2">Explore the Stars</span>
    </button>
    <button
      ref={ref}
      className="fixed z-40 flex items-center hidden p-4 font-mono rounded-sm top-56 left-6 bg-slate-300 opacity-70 hover:bg-slate-100 -skew-y-2"
      onClick={() => props.player.handleAbort()}
    >
      <StopIcon />
      <span className="pl-2">Abort</span>
    </button>
    <SettingsIcon />
  </header>
));

export default ControlHeader;
