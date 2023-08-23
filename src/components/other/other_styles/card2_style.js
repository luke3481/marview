import styled from "styled-components";

export const CardImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  background: #e6f5ff;
  border: 1px solid #e6f5ff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid #4d4dff;
    background: #fff;
  }
  &:hover ${CardImage} {
    filter: brightness(100%) sepia(100%) saturate(800%) hue-rotate(200deg);
  }
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const CardBody = styled.p`
  font-size: 14px;
  color: #777;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
