import LeftFixedContainer from "../LeftFixedContainer";
import PlayerDetails from "./PlayerDetails";

const Info = ({ x, y }) => {
  return (
    <LeftFixedContainer addStyles="top-20">
      <div className="px-3">
        <p>{`${x}, ${y}`}</p>
        <PlayerDetails />
      </div>
    </LeftFixedContainer>
  );
};

export default Info;
