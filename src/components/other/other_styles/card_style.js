import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 769px) {
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const CardImage = styled.img`
  width: 70%;
  margin-left: 15%;
`;

