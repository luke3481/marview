import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: calc(100vh - 60px);
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  // background: linear-gradient(to right, #a6c0e0, #d6eaf7);

  @media screen and (max-width: 768px) {
    // justify-content: flex-start;
    align-items: center;
    height: auto;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto;
  justify-content: center;
`;

export const Title = styled.h3`
  color: #00008b;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
