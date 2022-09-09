import { useAtom } from "jotai";
import { playerAtom } from "../../services/atom-store";
import Nav from "../../components/Nav";
import Toolbar from "./Toolbar";
import LeftFixedIconButton from "../../components/LeftFixedIconButton";
import { PlayIcon, StopIcon } from "../../components/Icons";

const ControlHeader = () => {
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
        id="explore-button"
        top="top-40"
        hidden={false}
        icon={<PlayIcon />}
        text="Explore"
        handleClick={handlePlay}
      />
      <LeftFixedIconButton
        id="abort-button"
        top="top-56"
        hidden={true}
        icon={<StopIcon />}
        text="Abort"
        handleClick={handleStop}
      />
    </Nav>
  );
};

export default ControlHeader;
