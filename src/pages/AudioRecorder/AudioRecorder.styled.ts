import styled from "styled-components";
import { Button } from "antd";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";

export const AudioRecorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MainScreen = styled.div`
  background-color: black;
  /* background-color: ${({ theme }) => theme.secondaryColor}; */
  width: 100%;
  height: 65vh;
`;

export const StyledAudioOutlined = styled(AudioOutlined)`
  font-size: 9.37rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const StyledAudioMutedOutlined = styled(AudioMutedOutlined)`
  font-size: 9.37rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f0f0f0;
  gap: 1rem;
  padding-bottom: 1rem;
  height: 6.25rem;
  border-radius: 1.25rem;
`;

export const RecorderButton = styled(Button)`
  border-radius: 50%;
  &:is(span) {
    font-size: 1.5rem;
  }
`;

export const DownloadButton = styled(Button)`
  border-radius: 50%;
  font-size: 1.5rem;
`;
