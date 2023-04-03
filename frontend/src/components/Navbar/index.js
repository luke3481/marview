// import React, { useState } from "react";
// import {
//   Nav,
//   NavLink,
//   DropdownLink,
//   DropDownContent,
//   NavMenu,
//   Logo,
// } from "./NavbarStyle";
// import Dropdown from "../productMenu";
// import { useAuth0 } from "@auth0/auth0-react";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   const logoutWithRedirect = () =>
//     logout({
//       logoutParams: {
//         returnTo: window.location.origin,
//       },
//     });

//   return (
//     <>
//       <Nav>
//         <Logo to="/" activeStyle onClick={closeMobileMenu}></Logo>
//         <NavMenu>
//           <NavLink to="/about" activeStyle>
//             ABOUT
//           </NavLink>
//           <NavLink activeStyle>Product{dropdown && <Dropdown />}</NavLink>
//           <NavLink to="/roadmap" activeStyle>
//             ROADMAP
//           </NavLink>
//           <NavLink to="/contact" activeStyle>
//             CONTACT
//           </NavLink>
//           <NavLink to="/profile" activeStyle>
//             PROFILE
//           </NavLink>
//         </NavMenu>
//       </Nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProductMenu from "../productMenu";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/livemap" className="nav-links" onClick={closeMobileMenu}>
              Products <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <ProductMenu />}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
