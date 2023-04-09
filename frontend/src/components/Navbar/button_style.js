import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  padding: 3px 25px;
  border-radius: 25px;
  font-size: 1 rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  background: #00008b;

  &:hover {
    background: #4d4dff;
    color: white;
    transition: all 0.2s ease-in;
  }
`;
