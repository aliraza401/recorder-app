import React from "react";
import { MediaControllerProps } from "./MediaController.interface";
import {
  MediaControllerContainer,
} from "./MediaController.styled";
import { Image } from "antd";
import { CONTROL_ICONS } from "../../utils/constants";

export const ButtonContainer: React.FC<MediaControllerProps> = ({
  onStartStopRecording,
  onDownload,
  recording,
  downloadDisabled,
}) => {
  return (
    <MediaControllerContainer>
      {recording ? (
        <Image
          src={CONTROL_ICONS.PAUSE}
          preview={false}
          onClick={onStartStopRecording}
        />
      ) : (
        <Image
          src={CONTROL_ICONS.PLAY}
          preview={false}
          onClick={onStartStopRecording}
        />
      )}
      <Image
        src={CONTROL_ICONS.DOWNLOAD}
        preview={false}
        onClick={onDownload}
        className={`${downloadDisabled ? "pointer-disabled" : ""}`}
      />
    </MediaControllerContainer>
  );
};
