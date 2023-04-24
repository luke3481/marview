import styled from "styled-components";

export const CardContainer = styled.div`
  width: ${({ width }) => width || "300px"};
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const CardBody = styled.p`
  font-size: 16px;
  color: #777;
`;
