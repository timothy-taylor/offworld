import { atom } from "jotai";
import playerFactory from "./player";
import { loadPhoto } from "./load";

const basePlayerAtom = atom(playerFactory());
export const playerAtom = atom((get) => get(basePlayerAtom));
export const photoAtom = atom(loadPhoto());
export const newVisitorAtom = atom(true);
