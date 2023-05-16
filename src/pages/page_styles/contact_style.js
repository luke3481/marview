import styled from "styled-components";
import ship_topview from "../../imgs/background.jpg";

export const PageContainer = styled.div`
  min-height: calc(100vh - 60px);
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;

  @media screen and (max-width: 768px) {
    // justify-content: flex-start;
    align-items: center;
    height: auto;
  }
`;

export const ContactContainer = styled.div`
  max-width: 700px;
  width: 80%;
  justify-content: center;
  padding-bottom: 20px;
  // padding: 20px;
  @media screen and (max-width: 768px) {
    // padding: 10px;
  }
`;

export const Title = styled.h4`
  color: #00008b;
  font-size: 2rem;
  font-weight: bold;
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
  border: 1px solid #fff;
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
  border: 1px solid #fff;
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
