import React from "react";
import {
  PageContainer,
  TeamContainer,
  Title,
  Member,
  Photo,
  Name,
  Position,
} from "./styles/about_style.js";
import ericPhoto from "../imgs/Eric.jpg";
import brianPhoto from "../imgs/Brian.jpeg";
import lukePhoto from "../imgs/Luke.jpeg";
import willPhoto from "../imgs/Will.jpeg";
import billPhoto from "../imgs/Bill.jpeg";
import treyPhoto from "../imgs/Trey.jpeg";
import weiPhoto from "../imgs/Wei.jpeg";
import darrenPhoto from "../imgs/Darren.jpeg";
import johnPhoto from "../imgs/John.jpg";

const members = [
  {
    name: "Eric O'Neil",
    photo: ericPhoto,
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/eric-oneil1/",
  },
  {
    name: "Brian Schmid",
    photo: brianPhoto,
    position: "COO",
    linkedin: "https://www.linkedin.com/in/bfschmid/",
  },
  {
    name: "Luke Birch",
    photo: lukePhoto,
    position: "CTO",
    linkedin: "https://www.linkedin.com/in/luke-birch/",
  },
  {
    name: "Bill Lennon",
    photo: billPhoto,
    position: "Business Development",
    linkedin: "https://www.linkedin.com/in/bill-lennon/",
  },
  {
    name: "John Hart",
    photo: johnPhoto,
    position: "Business Development",
    linkedin: "https://www.linkedin.com/in/john-hart-33435514b/",
  },
  {
    name: "Trey Grizzard",
    photo: treyPhoto,
    position: "Engineering",
    linkedin: "https://www.linkedin.com/in/trey-grizzard/",
  },
  {
    name: "Will Schwieder",
    photo: willPhoto,
    position: "Engineering",
    linkedin: "https://www.linkedin.com/in/willschwieder/",
  },
  {
    name: "Darren Colby",
    photo: darrenPhoto,
    position: "Engineering",
    linkedin: "https://www.linkedin.com/in/darren-colby/",
  },
  {
    name: "Wei Cai",
    photo: weiPhoto,
    position: "Engineering",
    linkedin: "https://linkedin.com/in/wei-cai-5b7159230/",
  },
];

function About() {
  return (
    <>
      <PageContainer>
        <Title>Our Team</Title>
        <TeamContainer>
          {members.map((member) => (
            <Member key={member.name}>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Photo src={member.photo} alt={member.name} />
              </a>
              <Name>{member.name}</Name>
              <Position>{member.position}</Position>
            </Member>
          ))}
        </TeamContainer>
      </PageContainer>
    </>
  );
}

export default About;
