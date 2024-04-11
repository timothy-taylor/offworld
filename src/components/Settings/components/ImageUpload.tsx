import { useSetAtom } from "jotai";
import { useRef } from "react";
import { imageAtom } from "../../../stores/canvas-store";
import { CheckIcon } from "../../Icons";
import { SettingsButton } from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

export default function ImageUpload() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const setImage = useSetAtom(imageAtom);

    return (
        <SettingsListItem text="Image">
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (!reader.result) return;
                        setImage(reader.result.toString());
                    };
                    reader.readAsDataURL(e.target.files![0]);
                }}
            />
            <SettingsButton
                text="upload new image"
                handleClick={() => {
                    const input = inputRef.current;
                    if (input) input.click();
                }}
            />
            <CheckIcon checkID="image-check" />
        </SettingsListItem>
    );
}
