import { useId } from "react";
import { useAtom } from "jotai";
import { playerAtom } from "../../stores/audio-engine-store";
import { toggleClass } from "../../lib/utils";

// components
import Toolbar from "./components/Toolbar";
import LeftFixedIconButton from "../LeftFixedIconButton";
import { HelpIcon, PlayIcon, SettingsIcon, StopIcon } from "./components/Icons";

export default function Controls({ settingsId, helpId }) {
  const [player] = useAtom(playerAtom),
    openSettingsId = useId(),
    openHelpId = useId(),
    playId = useId(),
    stopId = useId();

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

  const toggleVisibility = (id) => {
    toggleClass(id, "invisible");
    toggleClass(id, "-translate-x-full");
  };

  return (
    <nav>
      <Toolbar />
      <LeftFixedIconButton
        id={openHelpId}
        addStyles="top-[10.5rem]"
        icon={<HelpIcon />}
        text="Help"
        handleClick={() => toggleVisibility(helpId)}
      />
      <LeftFixedIconButton
        id={openSettingsId}
        addStyles="top-[14rem]"
        icon={<SettingsIcon />}
        text="Settings"
        handleClick={() => toggleVisibility(settingsId)}
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
    </nav>
  );
};