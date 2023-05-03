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
        <ControlIcon onClick={handleStartOrResumeRecording}>
          {/* <PlayCircleFilled  /> */}
          {recording ? "Resume Recording" : "Record"}
        </ControlIcon>
      ) : (
        <ControlIcon onClick={onPauseRecording}>
          {/* <PauseCircleFilled  /> */}
          Pause
        </ControlIcon>
      )}
      {recording && (
        <ControlIcon onClick={onStopRecording}>
          {/* <StopOutlined  /> */}
          Stop
        </ControlIcon>
      )}
      {!recording && (
        <ControlIcon
          onClick={onDownload}
          className={`${downloadDisabled ? "pointer-disabled" : ""}`}
        >
          Download
          {/* <DownloadOutlined /> */}
        </ControlIcon>
      )}
    </MediaControllerContainer>
  );
};
