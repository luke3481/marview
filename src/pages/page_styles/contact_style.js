import styled from "styled-components";
import wave from "../../imgs/wave.png";

export const PageContainer = styled.div`
  // min-height: calc(100vh - 60px);

  section {
    position: relative;
    width: 100%;
    height: 30vh;
    background: #4d4dff;
    overflow: hidden;
  }
  section .air {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(${wave});
    background-size: 1000px 100px;
  }
  section .air.air1 {
    animation: wave 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  section .air.air2 {
    animation: wave2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  section .air.air3 {
    animation: wave 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }
  section .air.air4 {
    animation: wave2 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
  @keyframes wave {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  @keyframes wave2 {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: -1000px;
    }
  }

  @media screen and (max-width: 768px) {
    // justify-content: flex-start;
    align-items: center;
    height: auto;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  // background: #fff;
  // border-radius: 25px;
  // padding-bottom: 20px;
  // padding: 20px;
  @media screen and (max-width: 768px) {
    // padding: 10px;
  }
`;

export const Title = styled.h1`
  color: #00008b;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 25px;
  padding: 40px;
  width: 50%;
`;

export const FormLabel = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
  display: inline-block;
  color: #00008b;
  // width: 49%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #c0c0c0;
  border-radius: 25px;
  margin-bottom: 15px;
  font: inherit;
  display: inline-block;
  // width: 49%;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #c0c0c0;
  border-radius: 25px;
  margin-bottom: 15px;
  font: inherit;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormButton = styled.button`
  padding: 15px 20px;
  font-size: 1rem;
  background-color: #4d4dff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 150px;
  display: flex;
  margin-left: auto;

  &:hover {
    background-color: #fff;
    color: #00008b;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
