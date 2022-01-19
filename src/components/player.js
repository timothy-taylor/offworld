import * as Tone from "tone";
import { loadAudio } from "./load";

const playerFactory = () => {
  //
  // granular engine setup
  let lengthSec = 25;
  let isReverse = false;
  let isReverb = true;
  let isDelay = false;
  const buffer = new Tone.ToneAudioBuffer(loadAudio());
  const limiter = new Tone.Limiter(-32).toDestination();
  const crossfadePost = new Tone.CrossFade(0.25).connect(limiter);
  const crossfadePre = new Tone.CrossFade(0).connect(crossfadePost.a);
  const reverb = new Tone.Reverb().connect(crossfadePre.a);
  const delay = new Tone.PingPongDelay(0.52, 0.3).connect(crossfadePre.b);
  const player = new Tone.GrainPlayer({
    url: buffer,
    loop: true,
    reverse: isReverse,
    playbackRate: 2.0,
    grainSize: 0.2,
    overlap: 0.2,
    loopStart: 0.0,
    loopEnd: 1.0,
  });
  player.connect(reverb);
  player.connect(delay);
  player.connect(crossfadePost.b);

  //
  //
  // public methods
  const updateBuffer = async () => {
    await buffer.load(loadAudio());
    lengthSec = buffer.length / buffer.sampleRate / 2;
    document.getElementById("audio-check").classList.remove("hidden");
    document.getElementById("audio-load").classList.add("hidden");
  };
  const handleAbort = () => player.stop();
  const handleExplore = async () => {
    await Tone.start();
    player.start();
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
      if (isDelay) {
        crossfadePre.fade.value = 0.5;
      } else {
        crossfadePre.fade.value = 0;
      }
      crossfadePost.fade.value = 0.25;
      document.getElementById("reverb-icon").classList.add("hidden");
      document.getElementById("dry-icon").classList.remove("hidden");
    } else {
      if (isDelay) {
        crossfadePre.fade.value = 1;
        crossfadePost.fade.value = 0.25;
      } else {
        crossfadePost.fade.value = 1;
      }
      document.getElementById("reverb-icon").classList.remove("hidden");
      document.getElementById("dry-icon").classList.add("hidden");
    }
  };
  const toggleDelay = () => {
    isDelay = !isDelay;
    if (isDelay) {
      if (isReverb) {
        crossfadePre.fade.value = 0.5;
      } else {
        crossfadePre.fade.value = 1;
      }
      crossfadePost.fade.value = 0.25;
      document.getElementById("delay-icon").classList.add("hidden");
      document.getElementById("nodelay-icon").classList.remove("hidden");
    } else {
      if (isReverb) {
        crossfadePre.fade.value = 0;
        crossfadePost.fade.value = 0.25;
      } else {
        crossfadePost.fade.value = 1;
      }
      document.getElementById("delay-icon").classList.remove("hidden");
      document.getElementById("nodelay-icon").classList.add("hidden");
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
    toggleDelay,
  };
};

export default playerFactory;
