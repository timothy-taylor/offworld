import * as Tone from "tone";
import Sample from "../assets/TGT-disquiet0482.wav";

const playerFactory = () => {
  //
  // granular engine setup
  const limiter = new Tone.Limiter(-32).toDestination();
  const player = new Tone.GrainPlayer({
    url: Sample,
    loop: true,
    reverse: true,
    playbackRate: 2.0,
    grainSize: 0.2,
    overlap: 0.2,
    loopStart: 0.0,
    loopEnd: 10.0,
  }).connect(limiter);

  //
  //
  // public methods
  const handleAbort = () => player.stop();
  const handleExplore = async (abort) => {
    await Tone.start();
    player.start();
    abort.style.display = "block";
  };
  const updateParams = (data, x, y) => {
    player.playbackRate = (data[2] % 20) + 0.3;
    player.grainSize = (data[0] % 10) + 0.1;
    player.overlap = data[1] % 5;
    player.loopStart = (x + 1) % 50;
    player.loopEnd = (y + 5) % 50;
  };

  return { player, handleAbort, handleExplore, updateParams };
};

export default playerFactory;
