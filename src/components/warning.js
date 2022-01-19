import { WarningIcon, CloseIcon } from "./icons";

const Warning = () => {
  return (
    <div
      id="warning"
      className="fixed inset-4 bg-slate-300 z-[100] flex flex-col items-center justify-center font-mono m-8 p-8"
    >
      <CloseIcon menuID="warning" />
      <WarningIcon />
      <p>This granular synthesizer can make loud noise,</p>
      <p>
        it is recommended to set your device volume to minimum before any
        exploration.
      </p>
    </div>
  );
};

export default Warning;
