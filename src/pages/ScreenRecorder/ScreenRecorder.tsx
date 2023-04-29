import React, { useRef, useState } from "react";
import {
  ScreenRecorderContainer,
  MainScreen,
  StyledCloseBtn,
  Video,
} from "./ScreenRecorder.styled";

import { useMediaContext } from "../../context/MediaContext";
import { ButtonContainer } from "../../components/ButtonContainer/MediaController";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { downloadScreen, downloadVideo } from "../../utils/downloader";

export const ScreenRecorder: React.FC = () => {
  const { state, dispatch } = useMediaContext();
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const handleStartStopRecording = async () => {
    if (state.recording) {
      if (mediaRecorder.current) {
        if (isPaused) {
          mediaRecorder.current.resume();
          setIsPaused(false);
        } else {
          mediaRecorder.current.stop();
          state.stream?.getTracks().forEach((track) => track.stop());
          if (videoRef.current) {
            videoRef.current.srcObject = null;
            videoRef.current.load();
          }
          dispatch({ type: "SET_STREAM", payload: null });
        }
      }
    } else {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (e) => {
          const screenURL = URL.createObjectURL(e.data);
          dispatch({ type: "SET_SCREEN_URL", payload: screenURL });
        };
        mediaRecorder.current.start();
        dispatch({ type: "SET_STREAM", payload: stream });
      } catch (err) {
        console.error("Error: ", err);
      }
    }
    dispatch({ type: "SET_RECORDING", payload: !state.recording });
  };

  const handlePauseResumeRecording = () => {
    if (mediaRecorder.current && state.recording) {
      if (!isPaused) {
        mediaRecorder.current.pause();
        if (videoRef.current) {
          videoRef.current.pause();
        }
      } else {
        mediaRecorder.current.resume();
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
      setIsPaused(!isPaused);
    }
  };

  const handleDownloadScreen = () => downloadScreen(state.screenURL);

  const navigateHome = () => navigate(PATHS.HOME);

  return (
    <ScreenRecorderContainer>
      <MainScreen>
        <Video ref={videoRef} autoPlay muted />
        <StyledCloseBtn onClick={navigateHome}>&times;</StyledCloseBtn>
      </MainScreen>
      <ButtonContainer
        onStartRecording={handleStartStopRecording}
        onPauseRecording={handlePauseResumeRecording}
        onStopRecording={handleStartStopRecording}
        onDownload={handleDownloadScreen}
        recording={state.recording}
        downloadDisabled={!state.screenURL}
        isPaused={isPaused}
      />
    </ScreenRecorderContainer>
  );
};

export default ScreenRecorder;
