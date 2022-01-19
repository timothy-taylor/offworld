import { PlayIcon } from "../icons";

const PlayButton = (props) => (
  <button
    id="explore-button"
    className="fixed z-30 flex items-center p-4 font-mono border-2 rounded-sm border-slate-400 top-40 left-6 bg-slate-500 opacity-80 hover:opacity-100 -skew-y-2"
    onClick={() => {
      props.player.handleExplore();
      document.getElementById("abort-button").classList.remove("hidden");
      document.getElementById("explore-button").classList.add("animate-pulse");
    }}
  >
    <PlayIcon />
    <span className="pl-2">Explore</span>
  </button>
);

export default PlayButton
