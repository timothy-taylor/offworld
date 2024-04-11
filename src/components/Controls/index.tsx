import { useAtomValue } from "jotai";
import { useId } from "react";
import type { useAppState } from "../../hooks/useAppState";
import { toggleClass } from "../../lib/utils";
import { playerAtom } from "../../stores/audio-engine-store";
import LeftFixedIconButton from "../LeftFixedIconButton";
import { HelpIcon, PlayIcon, SettingsIcon, StopIcon } from "./components/Icons";
import Toolbar from "./components/Toolbar";

type Props = {
    settingsId: string;
    helpId: string;
    state: ReturnType<typeof useAppState>[0];
};

export default function Controls({ settingsId, helpId, state }: Props) {
    const player = useAtomValue(playerAtom),
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

    const toggleVisibility = (id: string) => {
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
                text="Config"
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
}
