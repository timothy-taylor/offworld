import LeftFixedContainer from "../LeftFixedContainer";
import PlayerDetails from "./components/PlayerDetails";
import { InfoIcon } from "./components/Icons";

const InfoReadout = ({ x, y }) => {
    const parsedX = parseInt(x);
    const parsedY = parseInt(y);
    const coordinates = `${parsedX}, ${parsedY}`;

    return (
        <LeftFixedContainer addStyles="top-20">
            <InfoIcon />
            <div className="px-3">
                <p>{coordinates}</p>
                <PlayerDetails />
            </div>
        </LeftFixedContainer>
    );
};

export default InfoReadout;
