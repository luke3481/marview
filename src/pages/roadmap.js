import React from "react";
import { PageContainer, Title } from "./page_styles/roadmap_style.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../components/footer/footer";

function Roadmap() {
  return (
    <>
      <PageContainer>
        <section>
          <div class="air air1"></div>
          <div class="air air2"></div>
          <div class="air air3"></div>
          <div class="air air4"></div>
        </section>
        <Title>Product Roadmap</Title>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              background: "#fff",
              color: "#00008b",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ scale: "0.5", background: "#00008b" }}
          >
            <h3 className="vertical-timeline-element-title">2023 - Q2</h3>
            <p>
              <li>Launch Live Map MVP</li>
              <li>Launch Heat Map MVP</li>
              <li>Complete pre-seed funding round</li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#fff", color: "#00008b" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ scale: "0.5", background: "#00008b" }}
          >
            <h3 className="vertical-timeline-element-title">2023 - Q3</h3>
            <p>
              <li>Hire Engineering Staff</li>
              <li>Integrate real-time VDR Data</li>
              <li>Upgrade AIS & Weather Data</li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#fff", color: "#00008b" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ scale: "0.5", background: "#00008b" }}
          >
            <h3 className="vertical-timeline-element-title">2023 - Q4</h3>
            <p>
              <li>Launch Route Analytics Platform</li>
              <li>Integrate Historical VDR Data</li>
              <li>Deliver Global Live Map Coverage</li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#fff", color: "#00008b" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{ scale: "0.5", background: "#00008b" }}
          >
            <h3 className="vertical-timeline-element-title">
              2024 - Q1 and Beyond
            </h3>
            <p>
              <li>Launch API Suite</li>
              <li>Launch Route Optimization Platform</li>
              <li>Launch Data Marketplace</li>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Roadmap;
