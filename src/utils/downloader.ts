import { FILE_NAMES } from "./constants";

const getLinkElement = () => document.createElement("a");

const dowloadMedia = (url: string, fileName: string) => {
  const link = getLinkElement();
  link.href = url;
  link.download = fileName;
  link.click();
};

export const downloadAudio = (audioURL: string | null) => {
  if (audioURL) dowloadMedia(audioURL, FILE_NAMES.AUDIO);
};

export const downloadVideo = (videoURL: string | null) => {
  if (videoURL) dowloadMedia(videoURL, FILE_NAMES.VIDEO);
};

export const downloadScreen = (screenUrl: string | null) => {
  if (screenUrl) dowloadMedia(screenUrl, FILE_NAMES.SCREEN);
};
