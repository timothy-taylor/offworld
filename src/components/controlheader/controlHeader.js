import { PlayIcon, StopIcon } from "../icons.js";
import { HandleAbort, HandleExplore } from "../player";

const ControlHeader = (props) => (
  <header className="">
    <button
      className="fixed z-30 flex items-center p-4 font-mono rounded-sm top-40 left-6 bg-slate-500 opacity-70 hover:opacity-100 -skew-y-2"
      onClick={() => HandleExplore(props.player, props.abort.current)}
    >
      <PlayIcon />
      <span className="pl-2">Explore the Stars</span>
    </button>
    <button
      ref={props.abort}
      className="fixed z-40 flex items-center hidden p-4 font-mono rounded-sm top-56 left-6 bg-slate-300 opacity-70 hover:bg-slate-100 -skew-y-2"
      onClick={() => HandleAbort(props.player)}
    >
      <StopIcon />
      <span className="pl-2">Abort Mission</span>
    </button>
  </header>
);

export default ControlHeader;
