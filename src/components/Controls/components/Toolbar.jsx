import { useAtom } from "jotai";
import {
  isDelayAtom,
  isReverbAtom,
  isReverseAtom,
} from "../../../stores/audio-engine-store";
import LeftFixedContainer from "../../LeftFixedContainer";
import RenderWithTooltip from "./RenderWithTooltip";
import {
  BackwardIcon,
  DelayIcon,
  DryIcon,
  ForwardIcon,
  NoDelayIcon,
  ReverbIcon,
} from "./Icons";

export default function Toolbar() {
  const [isReverb, toggleReverb] = useAtom(isReverbAtom),
    [isDelay, toggleDelay] = useAtom(isDelayAtom),
    [isReverse, toggleReverse] = useAtom(isReverseAtom);

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
{/*       rewrite this component to include the child component as a prop rather than an actual child */}
      <RenderWithTooltip
        tooltipText={`reverb: ${isReverb ? "on" : "off"}`}
      >
        {reverb()}
      </RenderWithTooltip>
      <RenderWithTooltip
        tooltipText={`delay: ${isDelay ? "on" : "off"}`}
      >
        {delay()}
      </RenderWithTooltip>
      <RenderWithTooltip
        tooltipText={`reverse: ${isReverse ? "on" : "off"}`}
      >
        {reverse()}
      </RenderWithTooltip>
    </LeftFixedContainer>
  );
};
