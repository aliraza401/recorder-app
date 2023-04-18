export interface ButtonContainerProps {
  onStartStopRecording: () => void;
  onDownload: () => void;
  recording: boolean;
  downloadDisabled: boolean;
}
