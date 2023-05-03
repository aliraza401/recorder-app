import React, { createContext, useReducer, useContext } from "react";

interface MediaProviderProps {
  children: React.ReactNode;
}
interface MediaState {
  recording: boolean;
  audioURL: string | null;
  videoURL: string | null;
  stream: MediaStream | null;
}

const initialState: MediaState = {
  recording: false,
  audioURL: null,
  videoURL: null,
  stream: null,
};

export type MediaAction =
  | { type: "SET_RECORDING"; payload: boolean }
  | { type: "SET_AUDIO_URL"; payload: string | null }
  | { type: "SET_VIDEO_URL"; payload: string | null }
  | { type: "SET_STREAM"; payload: MediaStream | null };

const MediaContext = createContext<{
  state: MediaState;
  dispatch: React.Dispatch<MediaAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const stopStream = (stream: MediaStream | null) => {
  if (stream) stream.getTracks().forEach((track) => track.stop());
};

const mediaReducer = (state: MediaState, action: MediaAction): MediaState => {
  switch (action.type) {
    case "SET_RECORDING":
      return { ...state, recording: action.payload };
    case "SET_AUDIO_URL":
      return { ...state, audioURL: action.payload };
    case "SET_VIDEO_URL":
      return { ...state, videoURL: action.payload };
    case "SET_STREAM":
      stopStream(state.stream);
      return {
        ...state,
        stream: action.payload,
      };
    default:
      return state;
  }
};

export const useMediaContext = () => {
  return useContext(MediaContext);
};

export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mediaReducer, initialState);

  return (
    <MediaContext.Provider value={{ state, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};
