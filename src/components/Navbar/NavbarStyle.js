import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import marview_logo from "../../imgs/marview_logo.png";

export const Nav = styled.nav`
  position: fixed;
  background: #ffffff;
  height: 60px;
  display: grid;
  top: 0;
  left: 0;
  width: 100%;
  grid-template-columns: 200px auto;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #00008b;
  text-decoration: none;
  padding: 1rem;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
  &:hover {
    color: #4d4dff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  grid-column-start: 2;
  display: flex;
  justify-content: center;
  align-items: stretch;
  white-space: nowrap;
  */ @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  grid-column-start: 1;
  padding-left: 0.5rem;
  content: url(${marview_logo});
  width: 100%;
`;
