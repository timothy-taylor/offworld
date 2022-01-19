import PlayButton from "./playButton.js";
import StopButton from "./stopButton.js";
import {
  SettingsIcon,
  BackwardIcon,
  ForwardIcon,
  ReverbIcon,
  DryIcon,
} from "../icons.js";

const ControlHeader = (props) => (
  <nav>
    <div className="fixed flex items-center content-around p-1 px-4 rounded-sm top-10 left-6 bg-slate-300 opacity-80 -skew-y-2 hover:opacity-100">
      <SettingsIcon />
      <ReverbIcon onclick={props.player?.toggleReverb} />
      <DryIcon onclick={props.player?.toggleReverb} />
      <BackwardIcon onclick={props.player?.toggleReverse} />
      <ForwardIcon onclick={props.player?.toggleReverse} />
    </div>
    <PlayButton player={props.player} />
    <StopButton player={props.player} />
  </nav>
);

export default ControlHeader;
