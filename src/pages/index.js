import React from "react";
import {
  PageContainer,
  Title,
  HeadlineContainer,
  Subtitle,
  Demo,
  Video,
  Video2,
  ContentContainer1,
  ContentContainer2,
  ContentContainer3,
  SubContainer,
  SubContainer2,
  CardContainer,
  TextBody,
} from "./page_styles/index_style.js";
import landing_video from "../imgs/landing_video.mp4";
import before from "../imgs/ais_only.png";
import after from "../imgs/ais_andradar.png";
import fuel_savings from "../imgs/fuel_savings.svg";
import co2_savings from "../imgs/co2_savings.svg";
import train_data from "../imgs/train_data.svg";
import domain_awareness from "../imgs/domain_awareness.svg";
import Card from "../components/other/card";
import Card2 from "../components/other/card2";
import info_video from "../imgs/info_video.mp4";

function Home() {
  return (
    <>
      <PageContainer>
        <Video src={landing_video} autoPlay loop muted playsinline />
        <HeadlineContainer>
          <Title>The Future of Maritime Navigation</Title>
          <Demo to="/contact">Schedule a Demo</Demo>
        </HeadlineContainer>
      </PageContainer>
      <ContentContainer1>
        <SubContainer>
          <Subtitle>Navigate the Ocean like Never Before</Subtitle>
          <CardContainer>
            <Card
              title="Visibility Today"
              body="AIS only."
              image={before}
              width="45%"
            />
            <Card
              title="Visibility with Marview"
              body="Marview combines weather, oceanographic, and traditional AIS feeds from thousands of shipborne sensors into one platform, empowering mariners with a single screen for all navigational needs."
              image={after}
              width="45%"
            />
          </CardContainer>
        </SubContainer>
      </ContentContainer1>
      <ContentContainer2>
        <SubContainer>
          <Subtitle>Extending the Possibilities of Radar Data</Subtitle>
          <CardContainer>
            <Card2
              title="Optimize Routing"
              body="Marview’s data can be used to optimize routes, reduce fuel consumption, and avoid congestion, leading to significant savings for ship owners and operators."
              image={fuel_savings}
              width="300px"
            />
            <Card2
              title="Maritime Domain Awareness"
              body="See what’s actually on the ocean’s surface. Task assets more effectively, monitor sea lines of communication, and
illuminate dark ships and other vessels attempting to avoid detection."
              image={domain_awareness}
              width="300px"
            />
            <Card2
              title="AI/ML Training Data"
              body="Data collected from our network of vessels can be used to train AI/ML models for a variety of applications, including autonomous navigation, vessel classification, and more."
              image={train_data}
              width="300px"
            />
            <Card2
              title="Reduce Emissions"
              body="Comply with IMO regulations and reduce your carbon footprint. Marview’s data can be used to calculate emissions and fuel consumption, and to monitor compliance with regulations."
              image={co2_savings}
              width="300px"
            />
          </CardContainer>
        </SubContainer>
      </ContentContainer2>
      <ContentContainer1>
        <SubContainer>
          <Subtitle>Charting New Opportunities</Subtitle>
          <SubContainer2>
            <TextBody>
              <p>
                We’re focused on building solutions that get actionable insights
                into the hands of those who need it. By leveraging open-source
                data, existing sensor capabilities, and our own domain
                experience, we build mission-essential applications unmatched by
                traditional enterprise software providers.
              </p>
            </TextBody>
            <Video2 src={info_video} autoPlay loop muted playsinline />
          </SubContainer2>
        </SubContainer>
      </ContentContainer1>
      <ContentContainer3>
        <SubContainer>
          <Subtitle>The Right Team</Subtitle>
          <TextBody>
            We have experience across every facet of the maritime world, from
            commercial masters to maritime special operators. More importantly,
            we're commited to providing all maritime stakeholders with the
            insights they need.
          </TextBody>
          <Demo to="/contact">Schedule a Demo</Demo>
        </SubContainer>
      </ContentContainer3>
    </>
  );
}

export default Home;
