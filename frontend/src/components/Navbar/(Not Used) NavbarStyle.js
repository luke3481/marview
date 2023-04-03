import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import marview_logo from "../../imgs/marview_logo.png";

export const Nav = styled.nav`
  position: fixed;
  background: #ffffff;
  display: grid;
  grid-template-columns: 200px auto 100px;
  grid-template-rows: 60px;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #00008b;
  font-weight: bold;
  text-decoration: none;
  padding: 2rem;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
  &:hover {
    color: #4d4dff;
  }
`;

export const DropDownBox = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
`;

export const DropDownContent = styled(Link)`
  color: #00008b;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    color: #4d4dff;
  }
`;

export const DropdownLink = styled(Link)`
  color: #00008b;
  font-weight: bold;
  text-decoration: none;
  padding: 2rem;
  cursor: pointer;
  position: relative;

  &.active {
    color: #4d4dff;
  }

  &:hover + ${DropDownBox} {
    display: inline-block;
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
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  grid-column-start: 1;
  content: url(${marview_logo});
  height: 60%;
  margin-left: 10px;
`;
