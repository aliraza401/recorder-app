import React, { useRef, useEffect } from "react";
import {
  VideoRecorderContainer,
  Video,
  MainScreen,
  StyledCloseBtn,
} from "./VideoRecorder.styled";

import { useMediaContext } from "../../context/MediaContext";
import { ButtonContainer } from "../../components/ButtonContainer/MediaController";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { downloadVideo } from "../../utils/downloader";

export const VideoRecorder: React.FC = () => {
  const { state, dispatch } = useMediaContext();
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const navigate = useNavigate();

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

  const handleDownloadVideo = () => downloadVideo(state.videoURL);

  const navigateHome = () => navigate(PATHS.HOME);

  useEffect(() => {
    return () => {
      if (state.stream) {
        state.stream.getTracks().forEach((track) => track.stop());
        dispatch({ type: "SET_STREAM", payload: null });
        dispatch({ type: "SET_RECORDING", payload: false });
      }
    };
  }, [state.stream, dispatch]);

  return (
    <VideoRecorderContainer>
      <MainScreen>
        <Video ref={videoRef} autoPlay muted />
        <StyledCloseBtn onClick={navigateHome} />
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
