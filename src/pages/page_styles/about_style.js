import styled from "styled-components";
import wave from "../../imgs/wave.png";

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
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Box = styled.div`
  width: 200px;
  background-color: #00008b;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 5px;
`;

export const TextBody = styled.div`
  width: 60%;
  background-color: #f8f8f8;
  color: black;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Video2 = styled.video`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h1`
  color: black;
  // font-weight: 600;
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
