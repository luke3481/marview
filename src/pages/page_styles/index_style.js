import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically and horizontally */
  background-color: rgba(0, 0, 0, 0.8);
  padding: 25px;
  gap: 20px;
  width: 60%;
  margin: auto;
  animation: ${fadeInAnimation} ease 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: -1;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;

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
  }
`;

export const Video2 = styled.video`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentContainer1 = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  background-color: #f8f8f8;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding: 20px 0px 20px 0px;
  }
`;

export const ContentContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding: 20px 0px 20px 0px;
  }
`;

export const SubContainer = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 15%;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: 25px;
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

const rotateAnimation = keyframes`
  0% {
    transform: perspective(500px) rotateY(0deg);
  }
  25% {
    transform: perspective(500px) rotateY(5deg);
  }
  50% {
    transform: perspective(500px) rotateY(0deg);
  }
  75% {
    transform: perspective(500px) rotateY(-5deg);
  }
  100% {
    transform: perspective(500px) rotateY(0deg);
  }
`;

export const LaptopImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;
  animation: ${rotateAnimation} 5s ease-in-out infinite;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
  }
`;
