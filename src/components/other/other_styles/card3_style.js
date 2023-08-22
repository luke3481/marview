import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 10px;
  background: #f8f8f8;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 769px) {
    &:hover {
      transform: translate(0, -10px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Headshot = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.h4`
  text-align: center;
  margin-bottom: 2px;
`;

export const Position = styled.div`
  margin-bottom: 8px;
  color: #666;
  text-align: center;
`;

export const Description = styled.div`
  text-align: center;
  color: #333;
  font-size: 0.8rem;
`;

export const LinkedInIcon = styled.a`
  margin-top: 8px;
  font-size: 24px;
  color: #0077b5;
  text-decoration: none;
  &:hover {
    color: #005f8e;
  }
`;
