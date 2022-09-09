import { InfoIcon } from "../../components/Icons";
import LeftFixedContainer from "../../components/LeftFixedContainer";
import PlayerDetails from "./PlayerDetails";

const Info = ({ x, y }) => {
  return (
    <LeftFixedContainer top="20">
      <InfoIcon />
      <div className="px-3">
        <p>{`${x}, ${y}`}</p>
        <PlayerDetails />
      </div>
    </LeftFixedContainer>
  );
};

export default Info;
