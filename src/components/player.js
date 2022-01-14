import * as Tone from "tone";
import Sample from "../assets/TGT-disquiet0482.wav";

export const HandleAbort = (player) => player.stop();

export const HandleExplore = async (player, abort) => {
  await Tone.start();
  player.start();
  abort.style.display = "block";
};

export const UpdateParams = (data, x, y, player) => {
  player.playbackRate = (data[2] % 20) + 0.3;
  player.grainSize = (data[0] % 10) + 0.1;
  player.overlap = data[1] % 5;
  player.loopStart = (x + 1.1) % 50;
  player.loopEnd = (y + 5.1) % 50;
};

const limiter = new Tone.Limiter(-32).toDestination();
export const Player = new Tone.GrainPlayer({
  url: Sample,
  loop: true,
  reverse: true,
  playbackRate: 2.0,
  grainSize: 0.2,
  overlap: 0.2,
  loopStart: 0.0,
  loopEnd: 10.0,
}).connect(limiter);
