import styled from "styled-components";
import { Link } from "react-router-dom";
import ship_topview from "../../imgs/ship_topview.jpg";
import landing_video from "../../imgs/landing_video.mov";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // &::after {
  //   content: "";
  //   // background: url(${ship_topview});
  //   // background-size: cover;
  //   background-position: center;
  //   overflow: hidden;
  //   opacity: 0.2;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   position: absolute;
  //   z-index: -1;
  // }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 10%;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 5rem;
  text-align: left;
  margin-top: 10%;
  margin-bottom: 0;
`;

export const Subtitle = styled.h3`
  color: #fff;
  font-size: 5rem;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Video = styled.video`
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  // filter: opacity(60%);
  // filter: invert(100%) hue-rotate(180deg) brightness(0.6);
`;

export const Demo = styled(Link)`
  padding: 10px 25px;
  border-radius: 25px;
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
    transition: all 0.2s ease-in;
    text-decoration: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 10%;
`;
