import {
  PlayIcon,
  StopIcon,
  SettingsIcon,
  BackwardIcon,
  ForwardIcon,
  ReverbIcon,
  DryIcon,
} from "../icons.js";

const ControlHeader = (props) => (
  <nav className="">
    <div className="fixed flex items-center content-around p-1 px-4 rounded-sm top-11 left-6 bg-slate-300 opacity-80 -skew-y-2 hover:opacity-100">
      <SettingsIcon />
      <ReverbIcon onclick={props.player.toggleReverb} />
      <DryIcon onclick={props.player.toggleReverb} />
      <BackwardIcon onclick={props.player.toggleReverse} />
      <ForwardIcon onclick={props.player.toggleReverse} />
    </div>

    <button
      id="explore-button"
      className="fixed z-30 flex items-center p-4 font-mono border-2 rounded-sm border-slate-400 top-40 left-6 bg-slate-500 opacity-80 hover:opacity-100 -skew-y-2"
      onClick={() => props.player.handleExplore()}
    >
      <PlayIcon />
      <span className="pl-2">Explore</span>
    </button>
    <button
      id="abort-button"
      className="fixed z-40 flex items-center hidden p-4 font-mono border-2 rounded-sm border-slate-400 top-56 left-6 bg-slate-500 opacity-80 hover:opacity-100 -skew-y-2"
      onClick={() => props.player.handleAbort()}
    >
      <StopIcon />
      <span className="pl-2">Abort</span>
    </button>
  </nav>
);

export default ControlHeader;
