import { useId } from "react";
import { useKey } from "../hooks/useKey";
import { CloseIcon, WarningIcon } from "./Icons";
import { toggleClass } from "../utils/classList";

const containerStyle =
  "fixed inset-3 bg-slate-300 z-[100] flex flex-col items-center justify-center font-mono m-8 p-8";

const Warning = () => {
  const id = useId();

  useKey("Escape", () => document.getElementById(id).classList.add("hidden"));

  return (
    <div id={id} className={containerStyle}>
      <CloseIcon handleClick={() => {
        toggleClass(id, "hidden");
      }}/>
      <WarningIcon />
      <div className="font-notable text-yellow-900">Warning</div>
      <div>This granular synthesizer can make loud noise!</div>
      <div className="text-xl font-armata">before any exploration</div>
      <div className="text-center">
        it is <span className="underline">recommended</span> to set your device
        volume to <strong>minimum</strong>{" "}
        <span className="italic">before</span> pressing play,
      </div>
      <div>
        and then <strong>adjust to taste</strong>
      </div>
    </div>
  );
};

export default Warning;
