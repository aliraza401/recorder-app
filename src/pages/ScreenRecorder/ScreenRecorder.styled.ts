import styled from "styled-components";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const ScreenRecorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, purple, orange);
`;

export const MainScreen = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledCloseBtn = styled(CloseOutlined)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 1.2rem;
`;

export const Video = styled.video`
  width: 100%;
  height: 65vh;
  object-fit: cover;
  background-color: transparent;
`;
