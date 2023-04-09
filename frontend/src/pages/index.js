import React from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Title,
  HeadlineContainer,
  Subtitle,
  Demo,
  Video,
  ContentContainer,
} from "./styles/index_style.js";
import ReactPlayer from "react-player";
import landing_video from "../imgs/landing_video.mov";

function Home() {
  return (
    <PageContainer>
      <HeadlineContainer>
        {/* <Subtitle>Marview</Subtitle> */}
        <Title>The Future of</Title>
        <Subtitle>Maritime Navigation</Subtitle>
        <Demo to="/contact">Schedule a Demo</Demo>
        <Video src={landing_video} autoPlay loop muted />
      </HeadlineContainer>
    </PageContainer>
  );
}

export default Home;
