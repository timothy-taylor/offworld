import Photo from "../assets/Desolate_offworld_space_with_swirling_galaxies.png";
import Sample from "../assets/TGT-disquiet0482.wav";

export const loadPhoto = (image?: string) => image ?? Photo.src,
    loadAudio = (audio?: string) => audio ?? Sample;
