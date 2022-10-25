import { useAtom } from "jotai";
import {
  isDelayAtom,
  isReverbAtom,
  isReverseAtom,
} from "../../../stores/audio-engine-store";
import LeftFixedContainer from "../../LeftFixedContainer";
import RenderWithTooltip from "../../RenderWithTooltip";
import {
  BackwardIcon,
  DelayIcon,
  DryIcon,
  ForwardIcon,
  NoDelayIcon,
  ReverbIcon,
} from "./Icons";

export default function Toolbar() {
  const [isReverb, toggleReverb] = useAtom(isReverbAtom);
  const [isDelay, toggleDelay] = useAtom(isDelayAtom);
  const [isReverse, toggleReverse] = useAtom(isReverseAtom);

  const reverb = () =>
    isReverb ? (
      <ReverbIcon handleClick={toggleReverb} />
    ) : (
      <DryIcon handleClick={toggleReverb} />
    );

  const delay = () =>
    isDelay ? (
      <DelayIcon handleClick={toggleDelay} />
    ) : (
      <NoDelayIcon handleClick={toggleDelay} />
    );

  const reverse = () =>
    isReverse ? (
      <BackwardIcon handleClick={toggleReverse} />
    ) : (
      <ForwardIcon handleClick={toggleReverse} />
    );

  return (
    <LeftFixedContainer addStyles="top-10">
      <RenderWithTooltip
        tooltipText={`reverb: ${isReverb ? "on" : "off"} [toggle]`}
      >
        {reverb()}
      </RenderWithTooltip>
      <RenderWithTooltip
        tooltipText={`delay: ${isDelay ? "on" : "off"} [toggle]`}
      >
        {delay()}
      </RenderWithTooltip>
      <RenderWithTooltip
        tooltipText={`reverse: ${isReverse ? "on" : "off"} [toggle]`}
      >
        {reverse()}
      </RenderWithTooltip>
    </LeftFixedContainer>
  );
};