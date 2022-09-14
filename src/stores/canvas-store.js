import { atom } from "jotai";
import { loadPhoto } from "../helpers/load-assets";

const imageAtomPrimitive = atom(loadPhoto());
export const imageAtom = atom(
  (get) => get(imageAtomPrimitive),
  (get, set, newImageFile) => {
    set(imageAtomPrimitive, newImageFile);
    document.getElementById("image-check").classList.remove("hidden");
  }
);