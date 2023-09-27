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
    },
);

//
// some user changeable synth states with custom set logic,
// changing the atom automatically updates the synth.
// since these are boolean values, the set function can be called
// without any arguments, ie: toggle()
const delayEnabledPrimitive = atom(false);
export const delayEnabledAtom = atom(
    (get) => get(delayEnabledPrimitive),
    (get, set, newValue) => {
        const isDelayCurrent = get(delayEnabledPrimitive),
            isReverbCurrent = get(reverbEnabledAtom),
            update = newValue ?? !isDelayCurrent;

        set(delayEnabledPrimitive, update);
        player.setDelay(update, isReverbCurrent);
    },
);

const reverbEnabledPrimitive = atom(true);
export const reverbEnabledAtom = atom(
    (get) => get(reverbEnabledPrimitive),
    (get, set, newValue) => {
        const isDelayCurrent = get(delayEnabledAtom),
            update = newValue ?? !get(reverbEnabledPrimitive);

        set(reverbEnabledPrimitive, update);
        player.setReverb(update, isDelayCurrent);
    },
);

const reverseEnabledPrimitive = atom(false);
export const reverseEnabledAtom = atom(
    (get) => get(reverseEnabledPrimitive),
    (get, set, newValue) => {
        const update = newValue ?? !get(reverseEnabledPrimitive);

        set(reverseEnabledPrimitive, update);
        player.setReverse(update);
    },
);
