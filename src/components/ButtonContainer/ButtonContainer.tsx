import React from "react";
import { ButtonContainerProps } from "./ButtonContainer.interface";
import {
  StyledButton,
  StyledCloudDownloadOutlined,
  StyledPauseCircleOutlined,
  StyledPlayCircleOutlined,
  StyledButtonContainer,
} from "./ButtonContainer.styled";

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  onStartStopRecording,
  onDownload,
  recording,
  downloadDisabled,
}) => {
  return (
    <StyledButtonContainer>
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
    </StyledButtonContainer>
  );
};
