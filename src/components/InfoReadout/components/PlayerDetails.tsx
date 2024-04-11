import { useAtomValue } from "jotai";
import { playerAtom } from "../../../stores/audio-engine-store";

const padZero = (x: number) => String(x).padStart(3, "0");

export default function PlayerDetails() {
    const player = useAtomValue(playerAtom),
        grains = padZero(
            Math.floor(player.synth.grainSize.valueOf() as number),
        ),
        overlaps = padZero(player.synth.overlap.valueOf() as number),
        display = `${grains}, ${overlaps}`;

    return <p>{display}</p>;
}
