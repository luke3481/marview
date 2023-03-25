import React from "react";
import { Nav, NavLink, NavMenu, Logo } from "./NavbarStyle";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <>
      <Nav>
        <Logo to="/" activeStyle></Logo>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/solution" activeStyle>
            Solution
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/blog" activeStyle>
            Blog
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
