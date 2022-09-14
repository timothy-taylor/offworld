import { useAtom } from "jotai";
import { playerAtom } from "../../stores/audio-engine-store";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Toolbar from "./Toolbar";
import LeftFixedIconButton from "../Offworld/LeftFixedIconButton";
import { PlayIcon, SettingsIcon, StopIcon } from "../Icons";

const ControlHeader = () => {
  const navigate = useNavigate();
  const [player] = useAtom(playerAtom);

  const handlePlay = () => {
    player.handleExplore().catch((err) => console.error(err));
    document.getElementById("abort-button").classList.remove("hidden");
    document.getElementById("explore-button").classList.add("animate-pulse");
  };

  const handleStop = () => {
    player.handleAbort();
    document.getElementById("abort-button").classList.add("hidden");
    document.getElementById("explore-button").classList.remove("animate-pulse");
  };

  return (
    <Nav>
      <Toolbar />
      <LeftFixedIconButton
        icon={<SettingsIcon />}
        addStyles="top-40"
        text="Settings"
        handleClick={() => navigate("/settings")}
      />
      <LeftFixedIconButton
        id="explore-button"
        addStyles="top-56"
        icon={<PlayIcon />}
        text="Explore"
        handleClick={handlePlay}
      />
      <LeftFixedIconButton
        id="abort-button"
        addStyles="top-72 hidden"
        icon={<StopIcon />}
        text="Abort"
        handleClick={handleStop}
      />
    </Nav>
  );
};

export default ControlHeader;
