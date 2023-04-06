import styled from "styled-components";
import ship_topview from "../../imgs/ship_topview.jpg";

export const PageContainer = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    background: url(${ship_topview});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

// export const Overlay = styled.div`
//   // position: absolute;
//   top: 60px;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(255, 255, 255, 0.55);
//   overflow: hidden;
// `;

export const Title = styled.h1`
  // position: relative;
  color: #00008b;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
`;

export const Subtitle = styled.h2`
  // position: relative;
  color: #00008b;
  // font-size: 5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0px;
`;

export const Demo = styled.button`
  margin-top: 2rem;
  // position: relative;
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
