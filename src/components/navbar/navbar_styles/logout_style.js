import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  padding: 10px 25px;
  border-radius: 25px;
  font-size: 1 rem;
  text-decoration: none;
  font-weight: 500;
  width: 150px;
  color: #fff;
  cursor: pointer;
  background: #00008b;
  margin-top: 15px;
  text-align: center;

  &:hover {
    background: #4d4dff;
    color: #fff;
    transition: all 0.2s ease-in;
    text-decoration: none;
  }
`;
