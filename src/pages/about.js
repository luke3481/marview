import React, { useEffect } from "react";
import {
  PageContainer,
  ContentContainer1,
  ContentContainer2,
  SubContainer,
  SubContainer2,
  Subtitle,
  Demo,
  ContentContainer3,
  CardContainer,
  CardContainer2,
  Video,
} from "./page_styles/about_style.js";
import info_video from "../imgs/info_video.mp4";
import fuel_savings from "../imgs/fuel_savings.svg";
import co2_savings from "../imgs/co2_savings.svg";
import train_data from "../imgs/train_data.svg";
import domain_awareness from "../imgs/domain_awareness.svg";
import Card from "../components/other/card";
import Card2 from "../components/other/card2";
import Card3 from "../components/other/card3";
import polsky from "../imgs/polsky.png";
import origin from "../imgs/origin.png";
import danalec from "../imgs/danalec.png";
import penfed from "../imgs/penfed.png";
import mts from "../imgs/mts.jpg";
import ndia from "../imgs/ndia.png";
import eric from "../imgs/eric_headshot.jpg";
import brian from "../imgs/brian_headshot.jpg";
import luke from "../imgs/luke_headshot.jpg";
import steve from "../imgs/steve_headshot.jpg";
import sam from "../imgs/sam_headshot.jpg";
import Footer from "../components/footer/footer";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <SubContainer2>
            <Subtitle>Charting New Opportunities</Subtitle>
            <Video
              src={info_video}
              autoPlay={window.innerWidth > 768}
              loop
              muted
              playsinline
            />
          </SubContainer2>
        </ContentContainer1>
        <ContentContainer1>
          <SubContainer>
            <Subtitle>Extending the possibilities of marine data</Subtitle>
            <CardContainer>
              <Card2
                title="Optimize Routing"
                body="Marview’s data can be used to optimize routes, reduce fuel consumption, and avoid congestion, leading to significant savings."
                image={fuel_savings}
              />
              <Card2
                title="Domain Awareness"
                body="Task assets more effectively, monitor sea lines of communication, and illuminate dark ships and other vessels attempting to avoid detection."
                image={domain_awareness}
              />
              <Card2
                title="AI/ML Training Data"
                body="Use data collected from our network of vessels to train AI/ML models for applications such as autonomous navigation or vessel classification."
                image={train_data}
              />
              <Card2
                title="Reduce Emissions"
                body="Comply with IMO regulations and reduce your carbon footprint. Use our data to calculate emissions and monitor compliance with regulations."
                image={co2_savings}
              />
            </CardContainer>
          </SubContainer>
        </ContentContainer1>
        <ContentContainer2>
          <SubContainer>
            <Subtitle style={{ color: "white" }}>
              Our Investors & Partners
            </Subtitle>
            <CardContainer2>
              <Card image={polsky} partner="https://polsky.uchicago.edu/" />
              <Card image={origin} partner="https://www.originventures.com/" />
              <Card
                image={penfed}
                partner="https://penfedfoundation.org/how-we-help/veip/"
              />
              <Card image={ndia} partner="https://www.ndia.org/" />
              <Card image={danalec} partner="https://www.danelec.com/" />
              <Card image={mts} partner="https://mtsociety.memberclicks.net/" />
            </CardContainer2>
          </SubContainer>
        </ContentContainer2>
        <ContentContainer3>
          <SubContainer>
            <Subtitle>Our Team</Subtitle>
            <CardContainer>
              <Card3
                image={eric}
                name="Eric O'Neil"
                position="CEO"
                linkedinUrl="https://www.linkedin.com/in/eric-oneil1/"
              />
              <Card3
                image={brian}
                name="Brian Schmid"
                position="COO"
                linkedinUrl="https://www.linkedin.com/in/bfschmid/"
              />
              <Card3
                image={luke}
                name="Luke Birch"
                position="CPO"
                linkedinUrl="https://www.linkedin.com/in/luke-birch/"
              />
              <Card3
                image={steve}
                name="Steven Blake"
                position="Biz Dev"
                linkedinUrl="https://www.linkedin.com/in/steven-blake-2016/"
              />
              <Card3
                image={sam}
                name="Samuel Kevetter"
                position="Product"
                linkedinUrl="https://www.linkedin.com/in/samuel-kevetter/"
              />
            </CardContainer>
            <Demo to="/contact" style={{ "align-self": "end" }}>
              Learn More
            </Demo>
          </SubContainer>
        </ContentContainer3>
      </PageContainer>
      <Footer />
    </>
  );
}

export default About;
