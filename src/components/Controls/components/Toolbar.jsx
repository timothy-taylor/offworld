import { useAtom, useAtomValue } from "jotai";
import {
    delayEnabledAtom,
    reverbEnabledAtom,
    reverseEnabledAtom,
} from "../../../stores/audio-engine-store";
import LeftFixedContainer from "../../LeftFixedContainer";
import Tooltip from "./RenderWithTooltip";
import {
    BackwardIcon,
    DelayIcon,
    DryIcon,
    ForwardIcon,
    NoDelayIcon,
    ReverbIcon,
} from "./Icons";

const Reverb = () => {
    const [reverbEnabled, toggleReverb] = useAtom(reverbEnabledAtom);

    return reverbEnabled ? (
        <ReverbIcon handleClick={toggleReverb} />
    ) : (
        <DryIcon handleClick={toggleReverb} />
    );
};

const Delay = () => {
    const [delayEnabled, toggleDelay] = useAtom(delayEnabledAtom);

    return delayEnabled ? (
        <DelayIcon handleClick={toggleDelay} />
    ) : (
        <NoDelayIcon handleClick={toggleDelay} />
    );
};

const Reverse = () => {
    const [reverseEnabled, toggleReverse] = useAtom(reverseEnabledAtom);

    return reverseEnabled ? (
        <BackwardIcon handleClick={toggleReverse} />
    ) : (
        <ForwardIcon handleClick={toggleReverse} />
    );
};

export default function Toolbar() {
    const reverbEnabled = useAtomValue(reverbEnabledAtom),
        delayEnabled = useAtomValue(delayEnabledAtom),
        reverseEnabled = useAtomValue(reverseEnabledAtom);

    return (
        <LeftFixedContainer addStyles="top-10">
            <Tooltip text={`reverb: ${reverbEnabled ? "on" : "off"}`}>
                <Reverb />
            </Tooltip>
            <Tooltip text={`delay: ${delayEnabled ? "on" : "off"}`}>
                <Delay />
            </Tooltip>
            <Tooltip text={`reverse: ${reverseEnabled ? "on" : "off"}`}>
                <Reverse />
            </Tooltip>
        </LeftFixedContainer>
    );
}
