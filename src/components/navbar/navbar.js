import React, { useState } from "react";
import LoginButton from "./login";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar_styles/Navbar.css";
import ProductMenu from "./productMenu";
import ProfileMenu from "./profileMenu";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [profiledropdown, setProfileDropdown] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { isAuthenticated } = useAuth0();

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onMouseProfileEnter = () => {
    setProfileDropdown(true);
  };

  const onMouseProfileLeave = () => {
    setProfileDropdown(false);
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
                to="/roadmap"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Roadmap
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
            {/* <li
              className="nav-items"
              onMouseEnter={onMouseProfileEnter}
              onMouseLeave={onMouseProfileLeave}
            >
              {!isAuthenticated && <LoginButton />}
              {isAuthenticated && (
                <NavLink className="nav-links">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                  <i className="fas fa-caret-down" />
                  {profiledropdown && <ProfileMenu />}
                </NavLink>
              )}
            </li> */}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
