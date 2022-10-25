import { atom } from "jotai";
import { loadPhoto } from "../lib/load-assets";

const imageAtomPrimitive = atom(loadPhoto());
export const imageAtom = atom(
  (get) => get(imageAtomPrimitive),
  (_, set, newImageFile) => {
    set(imageAtomPrimitive, newImageFile);

    //
    // in Settings component
    document.getElementById("image-check").classList.remove("hidden");
  }
);