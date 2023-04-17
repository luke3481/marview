import styled from "styled-components";

export const TemperatureLegendWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1000;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInOut 1s ease-out forwards;
  opacity: 0;

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

export const ColorScale = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column-reverse;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(238, 206, 206, 0.4),
    rgba(179, 100, 188, 0.7),
    rgba(63, 33, 59, 0.8),
    rgba(116, 76, 172, 0.9),
    rgba(70, 0, 175, 1),
    rgba(13, 17, 38, 1)
  );
`;

export const StopLabel = styled.div`
  width: 100%;
  height: calc(100% / 8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelText = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
`;
