import { useRef } from "react";
import { useAtom } from "jotai";
import { CheckIcon } from "../../Icons";
import { imageAtom } from "../../../stores/canvas-store";
import SettingsListItem from "./SettingsListItem";
import { SettingsButton } from "./SettingsButton";

export default function ImageUpload() {
  const inputRef = useRef();
  const setImage = useAtom(imageAtom)[1];

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
            setImage(reader.result);
          };
          reader.readAsDataURL(e.target.files[0]);
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
};