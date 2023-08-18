import React from "react";
import { Link } from "react-router-dom";
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
  TextBody2,
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
import Card3 from "../components/other/card3";
import info_video from "../imgs/info_video.mp4";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <PageContainer>
        <Video src={landing_video} autoPlay loop muted playsinline />
        <HeadlineContainer>
          <Title>The Future of Maritime Navigation</Title>
          <Demo to="/livemap">Try Map</Demo>
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
              width="250px"
            />
            <Card2
              title="Maritime Domain Awareness"
              body="See what’s actually on the ocean’s surface. Task assets more effectively, monitor sea lines of communication, and
illuminate dark ships and other vessels attempting to avoid detection."
              image={domain_awareness}
              width="250px"
            />
            <Card2
              title="AI/ML Training Data"
              body="Data collected from our network of vessels can be used to train AI/ML models for a variety of applications, including autonomous navigation, vessel classification, and more."
              image={train_data}
              width="250px"
            />
            <Card2
              title="Reduce Emissions"
              body="Comply with IMO regulations and reduce your carbon footprint. Marview’s data can be used to calculate emissions and fuel consumption, and to monitor compliance with regulations."
              image={co2_savings}
              width="250px"
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
          <TextBody2>
            We have experience across every facet of the maritime world, from
            commercial masters to maritime special operators. More importantly,
            we're commited to providing all maritime stakeholders with the
            insights they need.
          </TextBody2>
          <CardContainer>
            <Card3
              image="https://media.licdn.com/dms/image/C5603AQHet13bA04rHA/profile-displayphoto-shrink_800_800/0/1658165403601?e=1697673600&v=beta&t=F9eXzySx13lNOdet_lH-WQIJ6pVRz2pM69nRbV1FgK4"
              name="Eric O'Neil"
              position="CEO"
              description="Eric is a 10-year veteran of the US Marine Corps, where he led teams of 40+ Marines and ended his active duty career as a Special Operations Officer in the Marines’ Special Operations Command, with multiple deployments to Southeast Asia, Africa, and the Middle East. He holds an MBA and Master’s in Computer Science from the University of Chicago."
              linkedinUrl="https://www.linkedin.com/in/eric-oneil1/"
            />
            <Card3
              image="https://media.licdn.com/dms/image/C4E03AQF08kiFKJmE_g/profile-displayphoto-shrink_800_800/0/1655156549443?e=1697673600&v=beta&t=SF1gM_OtE3xzd0eGnzsjqtyano09dp9HR6P6pSeSn10"
              name="Brian Schmid"
              position="COO"
              description="Brian is a former US Navy Surface Warfare Officer and has spent 2,000+ hours driving US warships through many of the most congested waters on Earth. He’s received specialized training in high-speed and waterjet ship piloting and is qualified to operate a gas turbine propulsion plant. He holds a BS in finance from UNC-Chapel Hill and is a current MBA student at Chicago Booth."
              linkedinUrl="https://www.linkedin.com/in/bfschmid/"
            />
            <Card3
              image="https://media.licdn.com/dms/image/D5603AQFTWpuYSrhcSg/profile-displayphoto-shrink_800_800/0/1685554929219?e=1697673600&v=beta&t=VUxEkd7-i1jMMDnqu_AeIwHrwUoSDGhD1YLkhAdQ_Mk"
              name="Steven Blake"
              position="Biz Dev"
              description="Steven is a licensed Master Mariner with seven years experience operating oil and product tankers around the world. He is also a Strategic Sealift Officer in the U.S. Navy, providing subject matter expertise in Maritime Domain Awareness (MDA). He is currently earning his MBA at Chicago Booth."
              linkedinUrl="https://www.linkedin.com/in/steven-blake-2016/"
            />
            <Card3
              image="https://media.licdn.com/dms/image/C4E03AQGLuKdnOGJ7PA/profile-displayphoto-shrink_800_800/0/1601662991034?e=1697673600&v=beta&t=qHwEA-cthGTcFKloD0JsZVKTl0a-a-xlE0jyA7VzdJg"
              name="Samuel Kevetter"
              position="Product"
              description=""
              linkedinUrl="https://www.linkedin.com/in/samuel-kevetter/"
            />
            <Card3
              image="https://media.licdn.com/dms/image/C4E03AQGb6ZenELP5ZA/profile-displayphoto-shrink_800_800/0/1637039684055?e=1697673600&v=beta&t=ef3_Uy1jIxiJ4CZe98qPzgdJuQbK-nZDoKYf7YUSusw"
              name="Luke Birch"
              position="Product"
              description="Luke has several years of product development experience at large SaaS and financial technology companies. Additionally, Luke served four years as a US Army armor officer, leading platoons of 40+ soldiers. He holds an MBA and Master’s in Computer Science from the University of Chicago."
              linkedinUrl="https://www.linkedin.com/in/luke-birch/"
            />
          </CardContainer>
          <Demo to="/contact" style={{ "align-self": "end" }}>
            Learn More
          </Demo>
        </SubContainer>
      </ContentContainer3>
      <Footer />
    </>
  );
}

export default Home;
