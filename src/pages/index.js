import React, { useState, useEffect } from "react";
import { useFormspark } from "@formspark/use-formspark";
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
  Checklist,
  ListItem,
  Checkmark,
  CheckmarkWrapper,
  LaptopImage,
  StayInTouchSection,
  StayInTouchHeading,
  StayInTouchDescription,
  FormInput,
  FormButton,
  ContactForm,
} from "./page_styles/index_style.js";
import landing_video from "../imgs/landing_video.mp4";
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
import laptop from "../imgs/laptop.png";
import checkmark from "../imgs/checkmark.png";
import Footer from "../components/footer/footer";

const FORMSPARK_FORM_ID = "ky7eYulK";

function Home() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ email });
    setShowMessage(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Subtitle>Everything you need. In one place.</Subtitle>
          <SubContainer2>
            <Checklist>
              <ListItem>
                <CheckmarkWrapper>
                  <Checkmark src={checkmark} />
                </CheckmarkWrapper>
                AIS
              </ListItem>
              <ListItem>
                <CheckmarkWrapper>
                  <Checkmark src={checkmark} />
                </CheckmarkWrapper>
                Weather
              </ListItem>
              <ListItem>
                <CheckmarkWrapper>
                  <Checkmark src={checkmark} />
                </CheckmarkWrapper>
                Currents
              </ListItem>
              <ListItem>
                <CheckmarkWrapper>
                  <Checkmark src={checkmark} />
                </CheckmarkWrapper>
                Pressure
              </ListItem>
              <ListItem>
                <CheckmarkWrapper>
                  <Checkmark src={checkmark} />
                </CheckmarkWrapper>
                Historical Trends
              </ListItem>
              <ListItem>
                <CheckmarkWrapper>
                  <Checkmark src={checkmark} />
                </CheckmarkWrapper>
                ENCs
              </ListItem>
            </Checklist>
            <LaptopImage src={laptop} alt="marview laptop" />
          </SubContainer2>
        </SubContainer>
      </ContentContainer1>
      <StayInTouchSection>
        <StayInTouchHeading>Stay In Touch</StayInTouchHeading>
        <StayInTouchDescription>
          Be the first to know about product updates!
        </StayInTouchDescription>
        {showMessage ? (
          <StayInTouchDescription>
            <p>You're on the list!</p>
          </StayInTouchDescription>
        ) : (
          <ContactForm onSubmit={onSubmit}>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormButton type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </FormButton>
          </ContactForm>
        )}
      </StayInTouchSection>
      {/* <ContentContainer1>
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
          <CardContainer>
            <Card image={polsky} partner="https://polsky.uchicago.edu/" />
            <Card image={origin} partner="https://www.originventures.com/" />
            <Card image={danalec} partner="https://www.danelec.com/" />
          </CardContainer>
        </SubContainer>
      </ContentContainer2>
      <ContentContainer3>
        <SubContainer>
          <Subtitle>Our Team</Subtitle>
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
              description="Samuel is a licensed Merchant Marine Officer with an unlimited tonnage Chief Mate License upon ocean with six years of professional sailing experience, and a Strategic Sealift Officer in the US Navy. He is finishing a Masters in Computer Science with a specialization in Artificial Intelligence at SMU, and, most recently, worked as a software engineer at Amazon."
              linkedinUrl="https://www.linkedin.com/in/samuel-kevetter/"
            />
            <Card3
              image="https://media.licdn.com/dms/image/C4E03AQGb6ZenELP5ZA/profile-displayphoto-shrink_800_800/0/1637039684055?e=1697673600&v=beta&t=ef3_Uy1jIxiJ4CZe98qPzgdJuQbK-nZDoKYf7YUSusw"
              name="Luke Birch"
              position="Product"
              description="Luke has several years of product development experience at large SaaS and financial technology companies. Additionally, Luke served four years as a US Army armor officer, leading platoons of 40+ soldiers. He holds an MBA and Masters in Computer Science from the University of Chicago."
              linkedinUrl="https://www.linkedin.com/in/luke-birch/"
            />
          </CardContainer>
          <Demo to="/contact" style={{ "align-self": "end" }}>
            Learn More
          </Demo>
        </SubContainer>
      </ContentContainer3> */}
      <Footer />
    </>
  );
}

export default Home;
