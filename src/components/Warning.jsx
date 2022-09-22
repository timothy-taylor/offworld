import { useId } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { CloseIcon, WarningIcon } from "./Icons";
import { toggleClass } from "../utils/classList";

const containerStyle =
  "fixed inset-3 bg-slate-300 z-[100] flex flex-col items-center justify-center font-mono m-8 p-8";

const Warning = () => {
  const id = useId();

  useKeyboard("Escape", () => document.getElementById(id).classList.add("hidden"));

  return (
    <div id={id} className={containerStyle}>
      <CloseIcon handleClick={() => {
        toggleClass(id, "hidden");
      }}/>
      <WarningIcon />
      <div className="font-notable text-yellow-900 text-center">Warning</div>
      <div className="text-center">This granular synthesizer can make loud noise!</div>
      <div className="text-xl font-armata text-center">before any exploration</div>
      <div className="text-center">
        it is <span className="underline">recommended</span> to set your device
        volume to <strong>minimum</strong>{" "}
        <span className="italic">before</span> pressing play,
      </div>
      <div className="text-center">
        and then <strong>adjust to taste</strong>
      </div>
    </div>
  );
};

export default Warning;
