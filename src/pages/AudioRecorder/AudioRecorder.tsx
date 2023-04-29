import React, { useRef, useEffect, useState } from "react";
import {
  AudioRecorderContainer,
  GradientBackground,
  MainScreen,
} from "./AudioRecorder.styled";
import { useMediaContext } from "../../context/MediaContext";
import { ButtonContainer } from "../../components/ButtonContainer/MediaController";
import { Canvas } from "../../components/Canvas/Canvas";
import { StyledCloseBtn } from "../VideoRecorder/VideoRecorder.styled";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { downloadAudio } from "../../utils/downloader";

export const AudioRecorder: React.FC = () => {
  const { state, dispatch } = useMediaContext();
  const [isPaused, setIsPaused] = useState(false);

  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const navigate = useNavigate();

  const handleStartRecording = async () => {
    if (!state.recording) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        const audioURL = URL.createObjectURL(e.data);
        dispatch({ type: "SET_AUDIO_URL", payload: audioURL });
      };
      mediaRecorder.current.start();
      dispatch({ type: "SET_STREAM", payload: stream });
      dispatch({ type: "SET_RECORDING", payload: true });
    }
  };

  const handlePauseResumeRecording = () => {
    if (mediaRecorder.current && state.recording) {
      if (!isPaused) {
        mediaRecorder.current.pause();
        setIsPaused(true);
      } else {
        mediaRecorder.current.resume();
        setIsPaused(false);
      }
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder.current && state.recording) {
      mediaRecorder.current.stop();
      state.stream?.getTracks().forEach((track) => track.stop());
      dispatch({ type: "SET_STREAM", payload: null });
      dispatch({ type: "SET_RECORDING", payload: false });
    }
  };

  const handleDownloadAudio = () => downloadAudio(state.audioURL);

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
    <AudioRecorderContainer>
      <GradientBackground />
      <MainScreen>
        <Canvas stream={state.stream} isPaused={isPaused} />
        <StyledCloseBtn onClick={navigateHome} />
      </MainScreen>
      <ButtonContainer
        onStartRecording={handleStartRecording}
        onPauseRecording={handlePauseResumeRecording}
        onStopRecording={handleStopRecording}
        onDownload={handleDownloadAudio}
        recording={state.recording}
        downloadDisabled={!state.audioURL}
        isPaused={isPaused}
      />
    </AudioRecorderContainer>
  );
};
