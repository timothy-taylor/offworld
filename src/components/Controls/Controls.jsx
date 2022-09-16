import { useId } from "react";
import { useAtom } from "jotai";
import { playerAtom } from "../../stores/audio-engine-store";
import { toggleClass } from "../../utils/classList";

// components
import Nav from "../Nav";
import Toolbar from "./components/Toolbar";
import LeftFixedIconButton from "../LeftFixedIconButton";
import { HelpIcon, PlayIcon, SettingsIcon, StopIcon } from "./components/Icons";

const Controls = ({ settingsId, helpId }) => {
  const [player] = useAtom(playerAtom);
  const openSettingsId = useId();
  const openHelpId = useId();
  const playId = useId();
  const stopId = useId();

  const handlePlay = () => {
    player.handleExplore().catch((err) => console.error(err));
    toggleClass(stopId, "hidden");
    toggleClass(playId, "animate-pulse");
  };

  const handleStop = () => {
    player.handleAbort();
    toggleClass(stopId, "hidden");
    toggleClass(playId, "animate-pulse");
  };

  const toggleSettingsVisibility = () => {
    toggleClass(settingsId, "invisible");
    toggleClass(settingsId, "-translate-x-full");
  };

  return (
    <Nav>
      <Toolbar />
      <LeftFixedIconButton
        id={openHelpId}
        addStyles="top-[10.5rem]"
        icon={<HelpIcon />}
        text="Help"
        handleClick={() => toggleClass(helpId, "hidden")}
      />
      <LeftFixedIconButton
        id={openSettingsId}
        addStyles="top-[14rem]"
        icon={<SettingsIcon />}
        text="Settings"
        handleClick={toggleSettingsVisibility}
      />
      <LeftFixedIconButton
        id={playId}
        addStyles="top-[17.6rem]"
        icon={<PlayIcon />}
        text="Explore"
        handleClick={handlePlay}
      />
      <LeftFixedIconButton
        id={stopId}
        addStyles="top-[21.5rem] hidden"
        icon={<StopIcon />}
        text="Abort"
        handleClick={handleStop}
      />
    </Nav>
  );
};

export default Controls;
