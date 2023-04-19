import React, { useRef } from "react";
import {
  VideoRecorderContainer,
  Video,
  MainScreen,
} from "./VideoRecorder.styled";

import { useMediaContext } from "../../context/MediaContext";
import { ButtonContainer } from "../../components/ButtonContainer/MediaController";

export const VideoRecorder: React.FC = () => {
  const { state, dispatch } = useMediaContext();
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartStopRecording = async () => {
    if (state.recording) {
      if (mediaRecorder.current) {
        mediaRecorder.current.stop();
        const stream = mediaRecorder.current.stream;
        stream.getTracks().forEach((track) => track.stop());
        dispatch({ type: "SET_STREAM", payload: null });
      }
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        const videoURL = URL.createObjectURL(e.data);
        dispatch({ type: "SET_VIDEO_URL", payload: videoURL });
      };
      mediaRecorder.current.start();
      dispatch({ type: "SET_STREAM", payload: stream });
    }
    dispatch({ type: "SET_RECORDING", payload: !state.recording });
  };

  const handleDownloadVideo = () => {
    if (state.videoURL) {
      const link = document.createElement("a");
      link.href = state.videoURL;
      link.download = "video-recording.mp4";
      link.click();
    }
  };

  return (
    <VideoRecorderContainer>
      <MainScreen>
        <Video ref={videoRef} autoPlay muted />
      </MainScreen>
      <ButtonContainer
        onStartStopRecording={handleStartStopRecording}
        onDownload={handleDownloadVideo}
        recording={state.recording}
        downloadDisabled={!state.videoURL}
      />
    </VideoRecorderContainer>
  );
};
