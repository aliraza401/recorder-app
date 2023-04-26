import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { Home } from "./pages/Home/Home";
import { AudioRecorder } from "./pages/AudioRecorder/AudioRecorder";
import { VideoRecorder } from "./pages/VideoRecorder/VideoRecorder";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PATHS } from "./utils/constants";
import { MediaProvider } from "./context/MediaContext";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={{ ...theme }}>
        <GlobalStyle />
        <MediaProvider>
          <BrowserRouter>
            <Routes>
              <Route path={PATHS.HOME} element={<Home />} />
              <Route path={PATHS.AUDIO_RECORDER} element={<AudioRecorder />} />
              <Route path={PATHS.VIDEO_RECORDER} element={<VideoRecorder />} />
            </Routes>
          </BrowserRouter>
        </MediaProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
