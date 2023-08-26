import React, { useState, useEffect } from "react";
import LoginButton from "./login";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar_styles/Navbar.css";
import ProductMenu from "./productMenu";
import ProfileMenu from "./profileMenu";

function Navbar({ currentPage }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [profiledropdown, setProfileDropdown] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { isAuthenticated } = useAuth0();
  const [navbarBackground, setNavbarBackground] = useState("transparent");

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Scroll Position:", scrollPosition);
      console.log("Current Page:", currentPage);

      if (scrollPosition < 60) {
        setNavbarBackground("transparent");
      } else {
        setNavbarBackground("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  const navbarStyle =
    currentPage === "livemap" ? {} : { background: navbarBackground };

  const navLinksColor =
    navbarBackground === "transparent" ? "white" : "#00008b";

  return (
    <>
      <section>
        <nav className="navbar" style={navbarStyle}>
          <NavLink
            to="/"
            className={`logo ${
              navbarBackground === "transparent" ? "transparent" : ""
            }`}
          ></NavLink>
          <div className="menu-icon" onClick={changeClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              style={{ color: navLinksColor }}
            />
          </div>
          <ul
            className={click ? "nav-side-menu start" : "nav-side-menu"}
            style={{ color: navLinksColor }}
          >
            <li className="nav-items">
              <NavLink
                to="/about"
                // className="nav-links"
                className={`nav-links ${
                  navbarBackground === "transparent" ? "link-color" : ""
                }`}
                onClick={closeMobileMenu}
                // style={{ color: navLinksColor }}
              >
                {" "}
                About
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/contact"
                // className="nav-links"
                className={`nav-links ${
                  navbarBackground === "transparent" ? "link-color" : ""
                }`}
                onClick={closeMobileMenu}
                // style={{ color: navLinksColor }}
              >
                {" "}
                Contact
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to="/livemap"
                className="nav-link-map"
                className={`nav-link-map ${
                  navbarBackground === "transparent" ? "link-color" : ""
                }`}
                onClick={closeMobileMenu}
                // style={{ color: navLinksColor }}
              >
                {" "}
                Live Map
              </NavLink>
            </li>
            {/* <li
              className="nav-items"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ color: navLinksColor }}
              >
                {" "}
                Products{" "}
                <i
                  className="fas fa-caret-down"
                  style={{ color: navLinksColor }}
                />
                {dropdown && <ProductMenu />}
              </NavLink>
            </li> */}
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
