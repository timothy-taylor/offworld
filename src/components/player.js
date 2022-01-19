import * as Tone from "tone";
import { loadAudio } from "./load";

const playerFactory = () => {
  //
  // granular engine setup
  let lengthSec = 25;
  let isReverse = false;
  let isReverb = true;
  const buffer = new Tone.ToneAudioBuffer(loadAudio());
  const limiter = new Tone.Limiter(-32).toDestination();
  const crossfade = new Tone.CrossFade(0.25).connect(limiter);
  const reverb = new Tone.Reverb().connect(crossfade.a);
  const player = new Tone.GrainPlayer({
    url: buffer,
    loop: true,
    reverse: isReverse,
    playbackRate: 2.0,
    grainSize: 0.2,
    overlap: 0.2,
    loopStart: 0.0,
    loopEnd: 10.0,
  });
  player.connect(reverb);
  player.connect(crossfade.b);

  //
  //
  // public methods
  const updateBuffer = async () => {
    await buffer.load(loadAudio());
    lengthSec = buffer.length / buffer.sampleRate / 2;
    document.getElementById("audio").classList.remove("hidden");
  };
  const handleAbort = () => {
    player.stop();
    document.getElementById("abort-button").classList.add("hidden");
    document.getElementById("explore-button").classList.remove("animate-pulse");
  };
  const handleExplore = async () => {
    await Tone.start();
    player.start();
    document.getElementById("abort-button").classList.remove("hidden");
    document.getElementById("explore-button").classList.add("animate-pulse");
  };
  const updateParams = (data, x, y) => {
    player.playbackRate = (data[2] % 20) + 0.3;
    player.grainSize = Math.round(data[0] % lengthSec) + 0.1;
    player.overlap = data[1] % 5;
    player.loopStart = (x + 1) % lengthSec;
    player.loopEnd = (y + 1) % lengthSec;
  };
  const toggleReverse = () => {
    isReverse = !isReverse;
    player.reverse = isReverse;
  };
  const toggleReverb = () => {
    isReverb = !isReverb;
    if (isReverb) {
      crossfade.fade.value = 0.25;
      document.getElementById("reverb-icon").classList.add("hidden");
      document.getElementById("dry-icon").classList.remove("hidden");
    } else {
      crossfade.fade.value = 1;
      document.getElementById("reverb-icon").classList.remove("hidden");
      document.getElementById("dry-icon").classList.add("hidden");
    }
  };

  return {
    player,
    handleAbort,
    handleExplore,
    toggleReverse,
    updateBuffer,
    updateParams,
    toggleReverb,
  };
};

export default playerFactory;
