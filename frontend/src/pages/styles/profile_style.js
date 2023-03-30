import styled from "styled-components";

export const PageContainer = styled.div`
  margin-top: 60px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const Button = styled.button`
  margin-top: 2rem;
  position: relative;
  z-index: 1;
  color: white;
  background-color: #00008b;
  // border-color: #00008b;
  padding: 10px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #00008b;
  }
`;
