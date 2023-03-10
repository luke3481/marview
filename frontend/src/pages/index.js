import React from "react";
import {
  PageContainer,
  Overlay,
  Title,
  Subtitle,
  Demo,
} from "./index_style.js";

function Home() {
  return (
    <PageContainer>
      <Overlay />
      <Title>Marview</Title>
      <Subtitle>The Future of Maritime Navigation</Subtitle>
      <a href="">
        <Demo>Schedule a Demo</Demo>
      </a>
    </PageContainer>
  );
}

export default Home;
