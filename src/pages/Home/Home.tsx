import React from "react";
import { Link } from "react-router-dom";
import { HomeProps } from "./Home.interface";
import {
  HomeContainer,
  Heading,
  ButtonContainer,
  HomeButton,
} from "./Home.styled";
import { PATHS } from "../../utils/constants";
import {
  AudioOutlined,
  CameraFilled,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Image } from "antd";

export const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <Heading>Audio/Video Recorder</Heading>
      <Image
        className="icon-logo"
        preview={false}
        src={
          "https://play-lh.googleusercontent.com/EiB8nFwIAQxl8JrfoaNVIXSM7FZZ108NmJ_D0Eqyb1utmDLe3FgKU8p7OEwAhnDWzl8=w480-h960-rw"
        }
      />
      <ButtonContainer>
        <Link to={PATHS.AUDIO_RECORDER}>
          <HomeButton>
            <AudioOutlined />
          </HomeButton>
        </Link>
        <Link to={PATHS.VIDEO_RECORDER}>
          <HomeButton>
            <VideoCameraAddOutlined />
          </HomeButton>
        </Link>
      </ButtonContainer>
    </HomeContainer>
  );
};
