import { HelpP } from "./components/HelpP";
import { toggleClass } from "../../utils/classList";
import { CloseIcon } from "../Icons";
import { SettingsH2 } from "../Settings/components/SettingsHeaders";
import { useKeyboard } from "../../hooks/useKeyboard";

const Help = ({ id }) => {
  useKeyboard("Escape", () =>
    document.getElementById(id).classList.add("hidden")
  );

  return (
    <div
      id={id}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center hidden bg-darkest text-white font-armata overflow-y-auto"
    >
      <CloseIcon
        handleClick={() => {
          toggleClass(id, "hidden");
        }}
      />
      <div className="overflow-y-auto p-12">
        <SettingsH2 text="Thoughts, tips, and tricks" />
        <HelpP>
          Offworld is a granular synthesizer. It works by loading an audio
          sample and playing it back in unique ways.
        </HelpP>
        <HelpP>
          You can steer the playback of the synthesizer by navigating image data
          of the image loaded into the application by using the mouse. The
          pixelated region that the audio engine is using for data is shown in
          the bottom right-hand corner.
        </HelpP>
        <HelpP>
          Unfortunately, the current state of Offworld is not mobile,
          touchscreen, or a11y friendly. Attempts are being made to rectify
          this.
        </HelpP>
        <HelpP>
          If you'd like signup as user, you can save audio/visual combinations
          as presets for quick loads and swaps.
        </HelpP>
        <HelpP>
          You can close 'modal' style windows (like this one or any one that has
          an X icon in the top-right corner) by pressing escape.
        </HelpP>
      </div>
    </div>
  );
};

export default Help;
