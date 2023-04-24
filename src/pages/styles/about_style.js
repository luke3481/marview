import styled from "styled-components";
import about from "../../imgs/about.png";

export const PageContainer = styled.div`
  background-color: #fff;
  min-height: calc(100vh - 60px);
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
  width: 80%;
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 30px;
  }
`;

export const ContentContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${about});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 700px;
  background-position: top;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 20px 0px 20px 0px;
  }
`;

export const ContentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Box = styled.div`
  width: 200px;
  background-color: #00008b;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 5px;
`;

export const TextBody = styled.div`
  width: 60%;
  background-color: #f8f8f8;
  color: black;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;
