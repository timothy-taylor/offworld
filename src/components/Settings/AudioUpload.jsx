import { useRef } from "react";
import { useAtom } from "jotai";
import { supabaseAudioAtom } from "../../stores/audio-engine-store";
import { CheckIcon } from "../Icons";
import SettingsButton from "./SettingsButton";

const AudioUpload = () => {
  const inputRef = useRef();
  const setAudioAtom = useAtom(supabaseAudioAtom)[1];

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const reader = new FileReader();
          reader.onload = () => {
            setAudioAtom(reader.result).catch(e => console.error(e));
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
    </>
  );
};

export default AudioUpload;
