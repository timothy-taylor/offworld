import { useAtom } from "jotai";
import { playerAtom } from "../../stores/audio-engine-store";

const PlayerDetails = () => {
  const [player] = useAtom(playerAtom);
  const grains = Math.floor(player.synth.grainSize)
  const overlaps = player.synth.overlap;

  return (
    <p>
      {`${grains < 10 ? "0" + grains : grains}, 
      ${overlaps < 10 ? "0" + overlaps : overlaps}`}
    </p>
  );
};

export default PlayerDetails;