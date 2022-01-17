import React from "react";
import { PlayIcon, StopIcon, UserIcon, SettingsIcon } from "../icons.js";

const ControlHeader = React.forwardRef((props, ref) => (
  <nav className="">
    <button
      className="fixed z-30 flex items-center p-4 font-mono border-2 rounded-sm border-slate-300 top-40 left-6 bg-slate-500 opacity-70 hover:opacity-100 -skew-y-2"
      onClick={() => props.player.handleExplore(ref.current)}
    >
      <PlayIcon />
      <span className="pl-2">Explore</span>
    </button>
    <button
      ref={ref}
      className="fixed z-40 flex items-center hidden p-4 font-mono border-2 rounded-sm border-slate-300 top-56 left-6 bg-slate-500 opacity-70 hover:bg-slate-100 -skew-y-2"
      onClick={() => props.player.handleAbort()}
    >
      <StopIcon />
      <span className="pl-2">Abort</span>
    </button>
    <div className="fixed flex items-center content-around p-1 px-4 rounded-sm top-11 left-6 bg-slate-300 opacity-70 -skew-y-2">
      <UserIcon />
      <SettingsIcon />
    </div>
  </nav>
));

export default ControlHeader;
