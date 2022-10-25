import LeftFixedContainer from "../LeftFixedContainer";
import PlayerDetails from "./components/PlayerDetails";
import { InfoIcon } from "./components/Icons";

export default ({ x, y }) => (
  <LeftFixedContainer addStyles="top-20">
    <InfoIcon />
    <div className="px-3">
      <p>{`${Number.parseInt(x)}, ${Number.parseInt(y)}`}</p>
      <PlayerDetails />
    </div>
  </LeftFixedContainer>
);