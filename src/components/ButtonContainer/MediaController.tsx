import React from "react";
import { MediaControllerProps } from "./MediaController.interface";
import {
  StyledButton,
  StyledCloudDownloadOutlined,
  StyledPauseCircleOutlined,
  StyledPlayCircleOutlined,
  MediaControllerContainer,
} from "./MediaController.styled";

export const ButtonContainer: React.FC<MediaControllerProps> = ({
  onStartStopRecording,
  onDownload,
  recording,
  downloadDisabled,
}) => {
  return (
    <MediaControllerContainer>
      <StyledButton
        onClick={onStartStopRecording}
        icon={
          recording ? (
            <StyledPauseCircleOutlined />
          ) : (
            <StyledPlayCircleOutlined />
          )
        }
      />
      <StyledButton
        onClick={onDownload}
        disabled={downloadDisabled}
        icon={<StyledCloudDownloadOutlined />}
      />
    </MediaControllerContainer>
  );
};
