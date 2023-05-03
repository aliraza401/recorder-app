import React from "react";
import { Link } from "react-router-dom";
import { AudioOutlined, FundProjectionScreenOutlined, VideoCameraAddOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import {
  HomeContainer,
  Heading,
  ButtonContainer,
  HomeButton,
  ButtonContent,
} from "./Home.styled";
import { HomeProps } from "./Home.interface";
import { PATHS } from "../../utils/constants";

export const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer>
      <Heading>Audio/Video Recorder</Heading>
      <ButtonContainer>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Link to={PATHS.AUDIO_RECORDER}>
              <HomeButton>
                <ButtonContent>
                  <AudioOutlined /> Audio Recorder
                </ButtonContent>
              </HomeButton>
            </Link>
          </Col>
          <Col span={24}>
            <Link to={PATHS.VIDEO_RECORDER}>
              <HomeButton>
                <ButtonContent>
                  <VideoCameraAddOutlined /> Video Recorder
                </ButtonContent>
              </HomeButton>
            </Link>
          </Col>
        </Row>
      </ButtonContainer>
    </HomeContainer>
  );
};
