import { atom } from "jotai";
import createAudioEngine from "../helpers/audio-engine";
import { loadAudio } from "../helpers/load-assets";
import { supabase } from "../helpers/supabase-client";
import { checkForUser } from "./user-store";

//
// audio file state, supabaseAudioAtom is write-only and saves file to supabase
// audioAtom just updated state and is used to set state with a file downloaded from supabase
const audioAtomPrimitive = atom(loadAudio());
export const supabaseAudioAtom = atom(null,
  async (get, set, newAudioFile) => {
    set(audioAtomPrimitive, newAudioFile);
    await player.updateBuffer(newAudioFile);
    const { id } = await checkForUser();
    const { data, error } = await supabase
      .storage
      .from("audio")
      .upload(`${id}/lastUsedAudioFile`, newAudioFile, { upsert: true })

    if (data) {
      document.getElementById("audio-check").classList.remove("hidden");
    }

    if (error) console.error("audioState: ", error);
  }
)
export const audioAtom = atom(
  (get) => get(audioAtomPrimitive),
  async (get, set, newAudioFile) => {
    console.log(newAudioFile);
    set(audioAtomPrimitive, newAudioFile);
    await player.updateBuffer(newAudioFile);
    document.getElementById("audio-check").classList.remove("hidden");
  }
)


//
// audio engine state is set here and is read-only
const player = createAudioEngine();
const playerAtomPrimitive = atom(player);
export const playerAtom = atom((get) => get(playerAtomPrimitive));

//
// some user changeable synth states with custom set logic,
// changing the atom automatically updates the synth.
// since these are boolean values, the set function can be called
// without any arguments, ie: toggle()
const isDelayPrimitive = atom(false);
export const isDelayAtom = atom(
  (get) => get(isDelayPrimitive),
  (get, set, newValue) => {
    const isDelayCurrent = get(isDelayPrimitive);
    const isReverbCurrent = get(isReverbAtom);
    const update = newValue ?? !isDelayCurrent;
    set(isDelayPrimitive, update)
    player.setDelay(update, isReverbCurrent)
  })

const isReverbPrimitive = atom(true);
export const isReverbAtom = atom(
  (get) => get(isReverbPrimitive),
  (get, set, newValue) => {
    const isDelayCurrent = get(isDelayAtom);
    const update = newValue ?? !get(isReverbPrimitive);
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
