import DOWNLOAD_IMG from "./../assets/downloads.png";
import PLAY_IMG from "./../assets/start.png";
import PAUSE_IMG from "./../assets/pause.png";
import STOP_IMG from "./../assets/pause.png";

export const LOGO_URL = `https://img.icons8.com/external-soft-fill-juicy-fish/60/null/external-audio-film-making-soft-fill-soft-fill-juicy-fish.png`;

export enum PATHS {
  HOME = "/",
  AUDIO_RECORDER = "/audio",
  VIDEO_RECORDER = "/video",
  SCREEN_RECORDER = "/screen",
}

export enum FILE_NAMES {
  AUDIO = "audio-recording.wav",
  VIDEO = "video-recording.wav",
  SCREEN = "screen-recording.wav",
}

export const CONTROL_ICONS = {
  DOWNLOAD: DOWNLOAD_IMG,
  PLAY: PLAY_IMG,
  PAUSE: PAUSE_IMG,
  STOP: STOP_IMG,
};

export enum CANVAS_PROPERTIES {
  TOTAL_BARS = 225,
  RADIUS = 50,
  LINE_WIDTH = 1.5,
  PRIMARY_COLOR = "#FAFAFA",
  SECONDARY_COLOR = "#333333",
}
