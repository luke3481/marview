import styled from "styled-components";
import heatmap from "../../imgs/heatmap.png";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: url(${heatmap});
  background-color: #f8f8f8;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h1`
  color: #00008b;
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
