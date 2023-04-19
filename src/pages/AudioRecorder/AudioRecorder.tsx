import React, { useRef } from "react";
import { AudioRecorderContainer, MainScreen } from "./AudioRecorder.styled";
import { useMediaContext } from "../../context/MediaContext";
import { ButtonContainer } from "../../components/ButtonContainer/MediaController";
import { Canvas } from "../../components/Canvas/Canvas";

export const AudioRecorder: React.FC = () => {
  const { state, dispatch } = useMediaContext();
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const handleStartStopRecording = async () => {
    if (state.recording) {
      if (mediaRecorder.current) {
        mediaRecorder.current.stop();
        state.stream?.getTracks().forEach((track) => track.stop());
        dispatch({ type: "SET_STREAM", payload: null });
      }
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        const audioURL = URL.createObjectURL(e.data);
        dispatch({ type: "SET_AUDIO_URL", payload: audioURL });
      };
      mediaRecorder.current.start();
      dispatch({ type: "SET_STREAM", payload: stream });
    }
    dispatch({ type: "SET_RECORDING", payload: !state.recording });
  };

  const handleDownloadAudio = () => {
    if (state.audioURL) {
      const link = document.createElement("a");
      link.href = state.audioURL;
      link.download = "audio-recording.wav";
      link.click();
    }
  };
  return (
    <AudioRecorderContainer>
      <MainScreen>
        <Canvas stream={state.stream} />
      </MainScreen>
      <ButtonContainer
        onStartStopRecording={handleStartStopRecording}
        onDownload={handleDownloadAudio}
        recording={state.recording}
        downloadDisabled={!state.audioURL}
      />
    </AudioRecorderContainer>
  );
};
