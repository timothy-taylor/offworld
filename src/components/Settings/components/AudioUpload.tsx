import { useSetAtom } from "jotai";
import { useRef } from "react";
import { audioAtom } from "../../../stores/audio-engine-store";
import { CheckIcon } from "../../Icons";
import { SettingsButton } from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

const allowedFiletypes = [
    "pcm",
    "wav",
    "mp3",
    "aiff",
    "aac",
    "ogg",
    "flac",
    "alac",
    "m4a",
];

export default function AudioUpload() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const setAudioAtom = useSetAtom(audioAtom);

    return (
        <SettingsListItem text="Audio">
            <input
                ref={inputRef}
                type="file"
                className="hidden"
                onChange={(e) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (!reader.result) return;

                        setAudioAtom(reader.result).catch((e) =>
                            console.error(e),
                        );
                    };

                    const path = e.target.value.split(".");
                    const extension = `${path[path.length - 1]}`;
                    if (allowedFiletypes.includes(extension)) {
                        if (!e.target.files) return;

                        reader.readAsDataURL(e.target.files![0]);
                    }
                }}
            />
            <SettingsButton
                text="upload new audio file"
                handleClick={() => {
                    const input = inputRef.current;
                    if (input) input.click();
                }}
            />
            <CheckIcon checkID="audio-check" />
        </SettingsListItem>
    );
}
