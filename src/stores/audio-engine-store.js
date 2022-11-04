import { atom } from "jotai";
import createAudioEngine from "../lib/audio-engine";
import { loadAudio } from "../lib/load-assets";

//
// audio engine state is set here is read-only
const player = createAudioEngine(),
  playerAtomPrimitive = atom(player);
export const playerAtom = atom((get) => get(playerAtomPrimitive));

//
// the audio file the audio engine is using
// is automatically updated on state change
const audioAtomPrimitive = atom(loadAudio());
export const audioAtom = atom(
  (get) => get(audioAtomPrimitive),
  async (_, set, newAudioFile) => {
    set(audioAtomPrimitive, newAudioFile);
    await player.updateBuffer(newAudioFile);

    //
    // in the Settings component
    document.getElementById("audio-check").classList.remove("hidden");
  }
);

//
// some user changeable synth states with custom set logic,
// changing the atom automatically updates the synth.
// since these are boolean values, the set function can be called
// without any arguments, ie: toggle()
const isDelayPrimitive = atom(false);
export const isDelayAtom = atom(
  (get) => get(isDelayPrimitive),
  (get, set, newValue) => {
    const isDelayCurrent = get(isDelayPrimitive),
      isReverbCurrent = get(isReverbAtom),
      update = newValue ?? !isDelayCurrent;

    set(isDelayPrimitive, update);
    player.setDelay(update, isReverbCurrent);
  }
);

const isReverbPrimitive = atom(true);
export const isReverbAtom = atom(
  (get) => get(isReverbPrimitive),
  (get, set, newValue) => {
    const isDelayCurrent = get(isDelayAtom),
      update = newValue ?? !get(isReverbPrimitive);

    set(isReverbPrimitive, update);
    player.setReverb(update, isDelayCurrent);
  }
);

const isReversePrimitive = atom(false);
export const isReverseAtom = atom(
  (get) => get(isReversePrimitive),
  (get, set, newValue) => {
    const update = newValue ?? !get(isReversePrimitive);

    set(isReversePrimitive, update);
    player.setReverse(update);
  }
);
