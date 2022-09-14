import * as Tone from "tone";
import { loadAudio } from "./load-assets";

const createAudioEngine = () => {
  //
  // granular engine setup
  let lengthSec = 25;
  const buffer = new Tone.ToneAudioBuffer(loadAudio());
  const limiter = new Tone.Limiter(-32).toDestination();
  const crossfadePost = new Tone.CrossFade(0.25).connect(limiter);
  const crossfadePre = new Tone.CrossFade(0).connect(crossfadePost.a);
  const reverb = new Tone.Reverb().connect(crossfadePre.a);
  const delay = new Tone.PingPongDelay(0.52, 0.3).connect(crossfadePre.b);
  const player = new Tone.GrainPlayer({
    url: buffer,
    loop: true,
    reverse: false,
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
  // setup / teardown methods
  const updateBuffer = async (file) => {
    const audioSample = file ?? loadAudio();
    await buffer.load(audioSample);
    lengthSec = buffer.length / buffer.sampleRate / 2;
  };
  const handleAbort = () => player.stop();
  const handleExplore = async () => {
    await Tone.start();
    player.start();
  };

  //
  // functions that update the player params
  const updateParams = (data, x, y) => {
    player.playbackRate = (data[2] % 20) + 0.3;
    player.grainSize = Math.round(data[0] % lengthSec) + 0.1;
    player.overlap = data[1] % 5;
    player.loopStart = (x + 1) % lengthSec;
    player.loopEnd = (y + 1) % lengthSec;
  };

  const setReverse = (isReverse) => {
    player.reverse = isReverse;
  };

  const setReverb = (isReverb, isDelay) => {
    if (isReverb && isDelay) crossfadePre.fade.value = 0.5;
    if (isReverb && !isDelay) crossfadePre.fade.value = 0;

    if (isReverb) {
      crossfadePost.fade.value = 0.25;
      return;
    }

    if (isDelay) {
      crossfadePre.fade.value = 1;
      crossfadePost.fade.value = 0.25;
      return;
    }

    crossfadePost.fade.value = 1;
  };

  const setDelay = (isDelay, isReverb) => {
    if (isDelay && isReverb) crossfadePre.fade.value = 0.5;
    if (isDelay && !isReverb) crossfadePre.fade.value = 1;
    if (isDelay) {
      crossfadePost.fade.value = 0.25;
      return;
    }

    if (isReverb) {
      crossfadePre.fade.value = 0;
      crossfadePost.fade.value = 0.25;
      return;
    }

    crossfadePost.fade.value = 1;
  };

  return {
    synth: player,
    handleAbort,
    handleExplore,
    updateBuffer,
    updateParams,
    setReverse,
    setReverb,
    setDelay,
  };
};

export default createAudioEngine;
