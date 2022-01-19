import { WarningIcon, CloseIcon } from "./icons";

const Warning = () => {
  return (
    <div
      id="warning"
      className="fixed inset-4 bg-slate-300 z-[100] flex flex-col items-center justify-center font-mono m-8 p-8"
    >
      <CloseIcon menuID="warning" />
      <WarningIcon />
      <h1>This granular synthesizer can make loud noise!</h1>
      <h2 className="text-xl">before any exploration </h2>
      <p>
        it is <span className="underline">recommended</span> to set your device
        volume to <strong>minimum</strong> <span className="italic">before</span> pressing play,
      </p>
      <p>
        and then <strong>adjust to taste</strong>
      </p>
    </div>
  );
};

export default Warning;
