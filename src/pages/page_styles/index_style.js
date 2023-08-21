import styled from "styled-components";
import { Link } from "react-router-dom";
import ship_topview from "../../imgs/ship_topview.jpg";
import wave from "../../imgs/wave.png";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    background: url(${ship_topview});
    background-postion: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    padding-top: 60px;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 10%;
  margin-top: 10%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 10%;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 5rem;
  text-align: left;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Demo = styled(Link)`
  padding: 15px 50px;
  border-radius: 25px;
  border: 1px solid #4d4dff;
  font-size: 1 rem;
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
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  flex-wrap: column-wrap;
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

export const Subtitle = styled.h3`
  color: black;
  font-size: 2.5rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
