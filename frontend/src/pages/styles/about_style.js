import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #f8f8f8;
  // margin-top: 60px;
  // height: calc(100vh - 60px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 60%;
  margin: 0 auto;
  justify-content: center;
`;

export const Title = styled.h3`
  position: relative;
  color: #00008b;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Member = styled.div`
  width: 300px;
  margin: 16px;
  text-align: center;
`;

export const Photo = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 2px;
  color: #00008b;
`;

export const Position = styled.h3`
  margin-top: 0px;
  color: gray;
`;
