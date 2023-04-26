import React from "react";
import { Link } from "react-router-dom";
import { AudioOutlined, VideoCameraAddOutlined } from "@ant-design/icons";
import { Image } from "antd";
import {
  HomeContainer,
  Heading,
  ButtonContainer,
  HomeButton,
} from "./Home.styled";
import { HomeProps } from "./Home.interface";
import { LOGO_URL, PATHS } from "../../utils/constants";

export const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <Heading>Audio/Video Recorder</Heading>
      <Image className="icon-logo" preview={false} src={LOGO_URL} />
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
