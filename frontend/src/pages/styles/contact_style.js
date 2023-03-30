import styled from "styled-components";

export const PageContainer = styled.div`
  // margin-top: 60px;
  // min-height: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
`;

export const ContactContainer = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h3`
  position: relative;
  color: #00008b;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font: inherit;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font: inherit;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
