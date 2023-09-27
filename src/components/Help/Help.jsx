import { useKeyboard } from "../../hooks/useKeyboard";
import { CloseIcon } from "../Icons";
import { SettingsH2 } from "../Settings/components/SettingsHeaders";

const HelpText = ({ children }) => (
    <p className="m-1 max-w-md pb-4 text-justify">{children}</p>
);

export default function Help({ id }) {
    useKeyboard("Escape", hideSettings);

    function hideSettings() {
        document
            .getElementById(id)
            .classList.add("invisible", "-translate-x-full");
    }

    return (
        <div
            id={id}
            className="invisible fixed inset-0 z-50 flex -translate-x-full flex-col items-center justify-center overflow-y-auto bg-darkest font-armata text-white transition duration-500 ease-in-out"
        >
            <CloseIcon handleClick={hideSettings} />
            <div className="overflow-y-auto p-12">
                <SettingsH2 text="Thoughts, tips, and tricks" />
                <HelpText>
                    Offworld is a granular synthesizer. It works by loading an
                    audio sample and playing it back in unique ways.
                </HelpText>
                <HelpText>
                    You can steer the playback of the synthesizer by navigating
                    image data of the image loaded into the application by using
                    the mouse. The pixelated region that the audio engine is
                    using for data is shown in the bottom right-hand corner.
                </HelpText>
                <HelpText>
                    Unfortunately, the current state of Offworld is not a11y
                    friendly. Attempts are being made to rectify this.
                </HelpText>
                <HelpText>
                    If you&apos;d like signup as user, you can save audio/visual
                    combinations as presets for quick loads and swaps.
                </HelpText>
                <HelpText>
                    You can close &lsquo;modal&rsquo; style windows (like this
                    one or any one that has an X icon in the top-right corner)
                    by pressing escape.
                </HelpText>
            </div>
        </div>
    );
}
