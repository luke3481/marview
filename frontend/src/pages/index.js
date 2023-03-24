import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/signup">
        <Demo>Schedule a Demo</Demo>
      </Link>
    </PageContainer>
  );
}

export default Home;
