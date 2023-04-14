import styled from "styled-components";
import ship_topview from "../../imgs/background.jpg";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align_items: center;
  background-image: url(${ship_topview});
  // background-color: #f8f8f8;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const ContactContainer = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h4`
  position: relative;
  color: #00008b;
  // color: #fff;
  font-size: 3rem;
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
  display: none;
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font: inherit;
  display: flex;
  align-self: right;

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
