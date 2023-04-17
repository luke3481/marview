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
    rgba(225, 200, 100, 0),
    rgba(200, 150, 150, 0),
    rgba(150, 150, 170, 0),
    rgba(120, 120, 190, 0),
    rgba(110, 110, 205, 0.3),
    rgba(80, 80, 225, 0.7),
    rgba(20, 20, 255, 0.9)
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
