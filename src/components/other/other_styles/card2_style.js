import styled from "styled-components";

export const CardImage = styled.img`
  height: 200px;
  padding: 5px 5px 5px 5px;
  width: auto;
  //   object-fit: cover;
  margin: 0 auto; /* Add margin: 0 auto to center the image horizontally */
  display: block;
`;

export const CardContainer = styled.div`
  width: ${({ width }) => width || "300px"};
  background-color: #fff;
  border-radius: 2px;
  //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &:hover {
    border: 1px solid #4d4dff;
  }
  &:hover ${CardImage} {
    filter: brightness(100%) sepia(100%) saturate(800%) hue-rotate(200deg);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const CardBody = styled.p`
  font-size: 16px;
  color: #777;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
