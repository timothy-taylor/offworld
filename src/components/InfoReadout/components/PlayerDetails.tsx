import { useAtomValue } from "jotai";
import { playerAtom } from "../../../stores/audio-engine-store";

const padZero = (x) => String(x).padStart(3, "0");

export default function PlayerDetails() {
    const player = useAtomValue(playerAtom),
        grains = padZero(Math.floor(player.synth.grainSize)),
        overlaps = padZero(player.synth.overlap);

    return <p>{grains + ", " + overlaps}</p>;
}
