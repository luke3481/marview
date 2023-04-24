import styled from "styled-components";

export const LegendContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInOut 1s ease-out forwards;
  opacity: 0;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1000;
  width: 100px;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LegendItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LegendImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

export const LegendTitle = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
`;
