export interface MediaControllerProps {
  onStartStopRecording: () => void;
  onDownload: () => void;
  recording: boolean;
  downloadDisabled: boolean;
}
