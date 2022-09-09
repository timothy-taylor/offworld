import { useAtom } from "jotai";
import { playerAtom } from "../../services/atom-store";

const PlayerDetails = () => {
  const [player] = useAtom(playerAtom);

  return (
    <p>
      {`${player?.playbackRate || Math.random().toFixed(2)}, ${
        player?.grainSize || Math.random().toFixed(2)
      }`}
    </p>
  );
};

export default PlayerDetails;
