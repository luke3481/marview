import styled from "styled-components";
import wave from "../../imgs/wave.png";
import { Link } from "react-router-dom";
import geo from "../../imgs/geo_background.jpeg";
import hero from "../../imgs/hero-bg.png";

export const Demo = styled(Link)`
  padding: 20px 60px;
  border-radius: 40px;
  border: 1px solid #4d4dff;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 500;
  width: 150px;
  color: #fff;
  cursor: pointer;
  background: #4d4dff;
  margin-top: 15px;
  text-align: center;

  &:hover {
    background: #fff;
    color: #00008b;
    border: 1px solid #00008b;
    transition: all 0.2s ease-in;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 1.2rem;
  }
`;

export const Video = styled.video`
  width: 100%;
`;

export const ContentContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding: 20px 0px 20px 0px;
  }
`;

export const ContentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url(${geo}),
    linear-gradient(140deg, #00008b 0%, #7282f4 100%);
  background-blend-mode: overlay;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding: 20px 0px 20px 0px;
  }
`;

export const ContentContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding: 20px 0px 20px 0px;
  }
`;

export const SubContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 90%;
  }
`;

export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const TextBody = styled.div`
  display: flex;
  align-items: center;
  padding-right: 100px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
  }
`;

export const TextBody2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 30px;
  & > * {
    flex-basis: 100%; /* You can adjust the width value as needed */
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const CardContainer2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 30px;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

export const Subtitle = styled.div`
  color: black;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  padding-bottom: 50px;
`;

export const Checklist = styled.ul`
  list-style: none;
  padding-left: 50px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

export const CheckmarkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #f8f8f8;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Checkmark = styled.img`
  width: 24px;
  height: 24px;
`;

export const StayInTouchSection = styled.section`
  background-color: black;
  padding-top: 40px;
  padding-bottom: 60px;
  text-align: center;
`;

export const StayInTouchHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
`;

export const StayInTouchDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: white;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #4d4dff;
  border: 1px solid #4d4dff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
  width: 100px;
  &:hover {
    background: #fff;
    color: #00008b;
    border: 1px solid #00008b;
    transition: all 0.2s ease-in;
    text-decoration: none;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export const PageContainer = styled.div`
  // min-height: calc(100vh - 60px);

  section {
    position: relative;
    width: 100%;
    height: 30vh;
    background: #4d4dff;
    overflow: hidden;
  }
  section .air {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(${wave});
    background-size: 1000px 100px;
  }
  section .air.air1 {
    animation: wave 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  section .air.air2 {
    animation: wave2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  section .air.air3 {
    animation: wave 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }
  section .air.air4 {
    animation: wave2 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
  @keyframes wave {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  @keyframes wave2 {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: -1000px;
    }
  }

  @media screen and (max-width: 768px) {
    // justify-content: flex-start;
    align-items: center;
    height: auto;
  }
`;

// export const SubContainer = styled.div`
//   padding-top: 50px;
//   padding-bottom: 50px;
//   display: flex;
//   flex-direction: column;
//   width: 70%;
//   @media screen and (max-width: 768px) {
//     justify-content: center;
//     width: 90%;
//   }
// `;

// export const ContentContainer1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   background-color: #fff;
//   padding-bottom: 30px;
//   @media screen and (max-width: 768px) {
//     padding: 20px 0px 20px 0px;
//   }
// `;

// export const ContentContainer2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-top: 50px;
//   padding-bottom: 50px;
// `;

// export const Box = styled.div`
//   width: 200px;
//   background-color: #00008b;
//   color: #fff;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 20px;
//     padding: 5px;
// `;

// export const TextBody = styled.div`
//   width: 60%;
//   background-color: #f8f8f8;
//   color: black;
//   padding: 20px;
//   @media screen and (max-width: 768px) {
//     width: 100%;
// `;

// export const Title = styled.h3`
//   color: #fff;
//   font-size: 3rem;
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// export const Video2 = styled.video`
//   width: 60%;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const Subtitle = styled.h1`
//   color: black;
//   // font-weight: 600;
//   font-size: 3rem;
//   @media screen and (max-width: 768px) {
//     text-align: center;
//   }
// `;
