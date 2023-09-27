import { useId } from "react";
import { useKeyboard } from "../../hooks/useKeyboard";
import { CloseIcon, WarningIcon } from "../Icons";
import { toggleClass } from "../../lib/utils";

export default function Warning() {
    const id = useId();

    useKeyboard("Escape", () =>
        document.getElementById(id).classList.add("hidden"),
    );

    return (
        <div
            id={id}
            className="fixed inset-3 z-[100] m-8 flex flex-col items-center justify-center bg-slate-300 p-8 font-mono"
        >
            <CloseIcon
                handleClick={() => {
                    toggleClass(id, "hidden");
                }}
            />
            <WarningIcon />
            <div className="text-center font-notable text-yellow-900">
                Warning
            </div>
            <div className="text-center">
                This granular synthesizer can make loud noise!
            </div>
            <div className="text-center font-armata text-xl">
                before any exploration
            </div>
            <div className="text-center">
                it is <span className="underline">recommended</span> to set your
                device volume to <strong>minimum</strong>{" "}
                <span className="italic">before</span> pressing play,
            </div>
            <div className="text-center">
                and then <strong>adjust to taste</strong>
            </div>
        </div>
    );
}
