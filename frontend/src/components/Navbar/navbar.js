import React, { useState } from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import ProductMenu from "../productMenu";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { isAuthenticated, isLoading } = useAuth0();

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <section>
        <nav className="navbar">
          <NavLink to="/" className="logo"></NavLink>
          <div className="menu-icon" onClick={changeClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
            <li
              className="nav-items"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink className="nav-links" onClick={closeMobileMenu}>
                {" "}
                Products <i className="fas fa-caret-down" />
                {dropdown && <ProductMenu />}
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                About
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Contact
              </NavLink>
            </li>
            <li className="nav-items">
              {!isAuthenticated && <LoginButton />}
              {isAuthenticated && <LogoutButton />}
            </li>
            {/* <li className="nav-items">
              <NavLink
                to="/profile"
                className="nav-links-button"
                onClick={closeMobileMenu}
              >
                {" "}
                Test{" "}
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
