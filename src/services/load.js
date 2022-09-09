import Photo from "../assets/pexels-alex-andrews-3805983.jpeg";
import Sample from "../assets/TGT-disquiet0482.wav";

export const loadPhoto = (image = sessionStorage.getItem("uploaded-image")) =>
  image ? image : Photo;

export const loadAudio = (audio = sessionStorage.getItem("uploaded-audio")) =>
  audio ? audio : Sample;
