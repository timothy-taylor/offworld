import { useCallback, useEffect, useState } from "react";
import { useAtomCallback } from "jotai/utils";
import { isDelayAtom, isReverbAtom, isReverseAtom } from "../../stores/audio-engine-store";
import * as Icons from "../Icons.jsx";
import LeftFixedContainer from "../LeftFixedContainer";

const Toolbar = () => {
  const [isReverb, setIsReverb] = useState();
  const [isDelay, setIsDelay] = useState();
  const [isReverse, setIsReverse] = useState();

  const readReverb = useAtomCallback(
    useCallback((get) => {
      const isReverbCurr = get(isReverbAtom);
      setIsReverb(isReverbCurr);
    }, [])
  );

  const readDelay = useAtomCallback(
    useCallback((get) => {
      const isDelayCurr = get(isDelayAtom);
      setIsDelay(isDelayCurr);
    }, [])
  );

  const readReverse = useAtomCallback(
    useCallback((get) => {
      const isReverseCurr = get(isReverseAtom);
      setIsReverse(isReverseCurr);
    }, [])
  );

  useEffect(() => {
    const readStates = async () => {
      await Promise.all([readDelay(), readReverse(), readReverb()]);
    };

    readStates().catch((err) => console.error(err));
  }, [readDelay, readReverb, readReverse]);

  return (
    <LeftFixedContainer addStyles="top-10">
      {isReverb ? <Icons.ReverbIcon /> : <Icons.DryIcon />}
      {isDelay ? <Icons.DelayIcon /> : <Icons.NoDelayIcon />}
      {isReverse ? <Icons.BackwardIcon /> : <Icons.ForwardIcon />}
    </LeftFixedContainer>
  );
};

export default Toolbar;
