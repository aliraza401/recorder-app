import { ArrowLeftOutlined, CloseOutlined, LeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const VideoRecorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, purple, orange);
`;

export const MainScreen = styled.div`
  background-color: transparent;
  width: 100%;
  height: 65vh;
  /* border-radius: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledCloseBtn = styled(ArrowLeftOutlined)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fff;
  font-size: 1.2rem;
`;

export const Video = styled.video`
  width: 100%;
  max-width: 480px;
  height: auto;
  background-color: black;
`;
