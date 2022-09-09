import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { playerAtom } from "../../services/atom-store";
import * as Icons from "../../components/Icons.jsx";
import LeftFixedContainer from "../../components/LeftFixedContainer";

const Toolbar = () => {
  const [player] = useAtom(playerAtom);

  return (
    <LeftFixedContainer top="top-10">
      <Link to="/settings">
        <Icons.SettingsIcon />
      </Link>
      <Icons.ReverbIcon onclick={player.toggleReverb} />
      <Icons.DryIcon onclick={player.toggleReverb} />
      <Icons.DelayIcon onclick={player.toggleDelay} />
      <Icons.NoDelayIcon onclick={player.toggleDelay} />
      <Icons.BackwardIcon onclick={player.toggleReverse} />
      <Icons.ForwardIcon onclick={player.toggleReverse} />
    </LeftFixedContainer>
  );
};

export default Toolbar;
