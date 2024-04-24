import { useAtomValue } from "jotai";
import { coordsAtom } from "../../stores/coord-store";
import LeftFixedContainer from "../LeftFixedContainer";
import { InfoIcon } from "./components/Icons";
import PlayerDetails from "./components/PlayerDetails";

const InfoReadout = () => {
    const [x, y] = useAtomValue(coordsAtom);
    return (
        <LeftFixedContainer addStyles="top-20">
            <InfoIcon />
            <div className="px-3">
                <p>{`${x}, ${y}`}</p>
                <PlayerDetails />
            </div>
        </LeftFixedContainer>
    );
};

export default InfoReadout;
