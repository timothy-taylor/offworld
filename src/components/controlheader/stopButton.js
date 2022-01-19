import { StopIcon } from "../icons";

const StopButton = (props) => (
  <button
    id="abort-button"
    className="fixed z-40 flex items-center hidden p-4 font-mono border-2 rounded-sm border-slate-400 top-56 left-6 bg-slate-500 opacity-80 hover:opacity-100 -skew-y-2"
    onClick={() => {
      props.player.handleAbort();
      document.getElementById("abort-button").classList.add("hidden");
      document
        .getElementById("explore-button")
        .classList.remove("animate-pulse");
    }}
  >
    <StopIcon />
    <span className="pl-2">Abort</span>
  </button>
);

export default StopButton;
