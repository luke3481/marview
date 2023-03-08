import React from "react";
import { Nav, NavLink, NavMenu, Logo } from "./NavbarStyle";

function Navbar() {
  return (
    <>
      <Nav>
        <Logo to="/" activeStyle></Logo>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/blog" activeStyle>
            Blog
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
