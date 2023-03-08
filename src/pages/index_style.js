import styled from "styled-components";
import ship_topview from "../imgs/ship_topview.jpg";

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${ship_topview});
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 60;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  color: #00008b;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;
