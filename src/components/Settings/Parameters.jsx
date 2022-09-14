import { useAtom } from "jotai";
import {
  isDelayAtom,
  isReverbAtom,
  isReverseAtom,
} from "../../stores/audio-engine-store";
import AudioUpload from "./AudioUpload";
import ImageUpload from "./ImageUpload";
import SettingsButton from "./SettingsButton";
import SettingsListItem from "./SettingsListItem";

const Parameters = () => {
  const [isReverb, toggleReverb] = useAtom(isReverbAtom);
  const [isDelay, toggleDelay] = useAtom(isDelayAtom);
  const [isReverse, toggleReverse] = useAtom(isReverseAtom);

  return (
    <>
      <SettingsListItem text="Image">
        <ImageUpload />
      </SettingsListItem>
      <SettingsListItem text="Audio">
        <AudioUpload />
      </SettingsListItem>
      <SettingsListItem text="Reverb">
        <span className="pr-2">{isReverb ? "on" : "off"}</span>
        <SettingsButton text="toggle" handleClick={() => toggleReverb()} />
      </SettingsListItem>
      <SettingsListItem text="Delay">
        <span className="pr-2">{isDelay ? "on" : "off"}</span>
        <SettingsButton text="toggle" handleClick={() => toggleDelay()} />
      </SettingsListItem>
      <SettingsListItem text="Playback">
        <span className="pr-2">{isReverse ? "reverse" : "normal"}</span>
        <SettingsButton text="toggle" handleClick={() => toggleReverse()} />
      </SettingsListItem>
      <SettingsListItem text="Current settings">
        <SettingsButton text="save as preset" />
      </SettingsListItem>
    </>
  );
};

export default Parameters;
