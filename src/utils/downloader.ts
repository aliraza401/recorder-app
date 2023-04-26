import { FILE_NAMES } from "./constants";

const getLinkElement = () => document.createElement("a");

export const downloadAudio = (audioURL: string | null) => {
  if (audioURL) {
    const link = getLinkElement();
    link.href = audioURL;
    link.download = FILE_NAMES.AUDIO;
    link.click();
  }
};

export const downloadVideo = (videoURL: string | null) => {
  if (videoURL) {
    const link = getLinkElement();
    link.href = videoURL;
    link.download = FILE_NAMES.VIDEO;
    link.click();
  }
};
