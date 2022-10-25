import { useKeyboard } from "../../hooks/useKeyboard";
import { CloseIcon } from "../Icons";
import { SettingsH2 } from "../Settings/components/SettingsHeaders";

const HelpP = ({ children }) => {
  return <p className="max-w-md pb-4 text-justify m-1">{children}</p>
}

export default function Help({ id }) {
  useKeyboard("Escape", hideSettings);

  function hideSettings() {
    document.getElementById(id).classList.add("invisible", "-translate-x-full");
  }

  const containerStyle = "fixed inset-0 z-50 flex flex-col items-center justify-center -translate-x-full ease-in-out"
                         + " duration-500 transition invisible bg-darkest text-white font-armata overflow-y-auto";
  return (
    <div id={id} className={containerStyle}>
      <CloseIcon handleClick={hideSettings} />
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
          Unfortunately, the current state of Offworld is not a11y friendly.
          Attempts are being made to rectify this.
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