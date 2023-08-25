import React from "react";
import {
  PageContainer,
  ContentContainer1,
  ContentContainer2,
  Title,
  SubContainer,
  Box,
  TextBody,
  Video2,
  Subtitle
} from "./page_styles/about_style.js";
import Footer from "../components/footer/footer.js";
import info_video from "../imgs/info_video.mp4";

function About() {
  return (
    <>
      <PageContainer>
        <section>
          <div class="air air1"></div>
          <div class="air air2"></div>
          <div class="air air3"></div>
          <div class="air air4"></div>
        </section>
        <ContentContainer1>
          <SubContainer>
            <Subtitle>Charting New Opportunities</Subtitle>
            <SubContainer>
            </SubContainer>
          </SubContainer>
        </ContentContainer1>
      </PageContainer>
      <Footer />
    </>
  );
}

export default About;
