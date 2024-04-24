import { atom } from "jotai";

const xPrimitive = atom(0);
const yPrimitive = atom(0);
export const coordsAtom = atom(
    (get) => [get(xPrimitive), get(yPrimitive)] as [number, number],
    (_get, set, x: number, y: number) => {
        set(xPrimitive, x);
        set(yPrimitive, y);
    },
);
