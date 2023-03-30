import styled from "styled-components";
import ship_topview from "../../imgs/ship_topview.jpg";

export const PageContainer = styled.div`
  background-color: #f8f8f8;
  margin-top: 60px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${ship_topview});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(255, 255, 255, 0.55);
  overflow: hidden;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  color: #00008b;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
`;

export const Subtitle = styled.h2`
  position: relative;
  z-index: 1;
  color: #00008b;
  // font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0px;
`;

export const Demo = styled.button`
  margin-top: 2rem;
  position: relative;
  z-index: 1;
  color: white;
  background-color: #00008b;
  // border-color: #00008b;
  padding: 10px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #00008b;
  }
`;
