import { useAppState } from "../../hooks/useAppState";
import LeftFixedContainer from "../LeftFixedContainer";
import { InfoIcon } from "./components/Icons";
import PlayerDetails from "./components/PlayerDetails";

type Props = {
    state: ReturnType<typeof useAppState>[0];
};

const InfoReadout = ({ state }: Props) => (
    <LeftFixedContainer addStyles="top-20">
        <InfoIcon />
        <div className="px-3">
            <p>{`${state.x}, ${state.y}`}</p>
            <PlayerDetails />
        </div>
    </LeftFixedContainer>
);

export default InfoReadout;
