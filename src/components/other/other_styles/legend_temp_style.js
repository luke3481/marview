import styled from "styled-components";

export const TemperatureLegendWrapper = styled.div`
  position: absolute;
  bottom: 20px;
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
    rgba(130, 87, 219, 1),
    rgba(32, 140, 236, 1),
    rgba(32, 196, 232, 1),
    rgba(35, 221, 221, 1),
    rgba(194, 255, 40, 1),
    rgba(255, 240, 40, 1),
    rgba(255, 194, 40, 1),
    rgba(252, 128, 20, 1)
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
