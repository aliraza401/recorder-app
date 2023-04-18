import styled from "styled-components";

export const VideoRecorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MainScreen = styled.div`
  background-color: black;
  width: 100%;
  height: calc(100vh - 150px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Video = styled.video`
  width: 100%;
  max-width: 480px;
  height: auto;
  background-color: black;
`;
