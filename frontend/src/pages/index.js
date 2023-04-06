import React from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Overlay,
  Title,
  Subtitle,
  Demo,
} from "./styles/index_style.js";

function Home() {
  return (
    <PageContainer>
      {/* <Overlay /> */}
      <Title>Marview</Title>
      <Subtitle>The Future of Maritime Navigation</Subtitle>
      <Link to="/profile">
        <Demo>Schedule a Demo</Demo>
      </Link>
    </PageContainer>
  );
}

export default Home;
