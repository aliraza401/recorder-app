import React, { useState } from "react";
import { MediaControllerProps } from "./MediaController.interface";
import {
  MediaControllerContainer,
  ControlIcon,
} from "./MediaController.styled";
import {
  PauseCircleFilled,
  StopOutlined,
  DownloadOutlined,
  PlaySquareFilled,
  PlayCircleFilled,
} from "@ant-design/icons";

export const ButtonContainer: React.FC<MediaControllerProps> = ({
  onStartRecording,
  onPauseRecording,
  onStopRecording,
  onDownload,
  recording,
  downloadDisabled,
  isPaused,
}) => {
  const handleStartOrResumeRecording = () => {
    if (isPaused) {
      onPauseRecording();
    } else {
      onStartRecording();
    }
  };

  return (
    <MediaControllerContainer>
      {!recording || isPaused ? (
        <ControlIcon>
          <PlayCircleFilled onClick={handleStartOrResumeRecording} />
        </ControlIcon>
      ) : (
        <ControlIcon>
          <PauseCircleFilled onClick={onPauseRecording} />
        </ControlIcon>
      )}
      {recording && (
        <ControlIcon>
          <StopOutlined onClick={onStopRecording} />
        </ControlIcon>
      )}
      {!recording && (
        <ControlIcon>
          <DownloadOutlined
            onClick={onDownload}
            className={`${downloadDisabled ? "pointer-disabled" : ""}`}
          />
        </ControlIcon>
      )}
    </MediaControllerContainer>
  );
};
