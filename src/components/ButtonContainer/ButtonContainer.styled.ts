import styled from "styled-components";
import { Button, theme } from "antd";

import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f0f0f0;
  gap: 4rem;
  padding-bottom: 1rem;
  height: 100px;
  border-radius: 1.25rem;
`;

export const StyledButton = styled(Button)`
  border-radius: 50%;
  background-color: transparent;
  border-width: 0;
`;

export const StyledPauseCircleOutlined = styled(PauseCircleOutlined)`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const StyledPlayCircleOutlined = styled(PlayCircleOutlined)`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const StyledCloudDownloadOutlined = styled(CloudDownloadOutlined)`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.primaryColor};
`;
