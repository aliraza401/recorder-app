import React, { useRef } from "react";
import {
  AudioRecorderContainer,
  MainScreen,
  StyledAudioMutedOutlined,
  StyledAudioOutlined,
} from "./AudioRecorder.styled";
import { useMediaContext } from "../../context/MediaContext";
import { ButtonContainer } from "../../components/ButtonContainer/ButtonContainer";

export const AudioRecorder: React.FC = () => {
  const { state, dispatch } = useMediaContext();
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const handleStartStopRecording = async () => {
    if (state.recording) {
      if (mediaRecorder.current) {
        mediaRecorder.current.stop();
      }
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        const audioURL = URL.createObjectURL(e.data);
        dispatch({ type: "SET_AUDIO_URL", payload: audioURL });
      };
      mediaRecorder.current.start();
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
        {state.recording ? (
          <StyledAudioOutlined />
        ) : (
          <StyledAudioMutedOutlined />
        )}
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
