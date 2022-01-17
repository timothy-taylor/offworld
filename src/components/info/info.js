import { InfoIcon } from "../icons";

const Info = (props) => {
  const x = props.player;
  return (
    <div className="fixed z-20 flex items-center w-48 px-4 font-mono rounded-sm select-none opacity-30 bg-slate-100 top-20 left-6 -skew-y-2">
      <InfoIcon />
      <div className="px-3">
        <p>{props.x + ", " + props.y}</p>
        <p>{x.player?.playbackRate + ", " + x.player?.grainSize}</p>
        <p>{x.player?.overlap}</p>
      </div>
    </div>
  );
};

export default Info;
