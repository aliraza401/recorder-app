export interface MediaControllerProps {
  onStartRecording: () => void;
  onPauseRecording: () => void;
  onStopRecording: () => void;
  onDownload: () => void;
  recording: boolean;
  downloadDisabled: boolean;
  isPaused: boolean;
}
