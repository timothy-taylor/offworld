import { useRef } from "react";
import { useAtom } from "jotai";
import { audioAtom } from "../../../stores/audio-engine-store";
import { CheckIcon } from "../../Icons";
import SettingsButton from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

const AudioUpload = () => {
  const inputRef = useRef();
  const setAudioAtom = useAtom(audioAtom)[1];

  return (
    <SettingsListItem text="Audio">
      <input
        ref={inputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={(e) => {
          const reader = new FileReader();
          reader.onload = () => {
            setAudioAtom(reader.result).catch((e) => console.error(e));
          };
          reader.readAsDataURL(e.target.files[0]);
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
};

export default AudioUpload;
