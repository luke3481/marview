import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, Logo } from "./NavbarStyle";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showHamBurgerMenu = windowWidth < 768;

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  /*return (
    <>
      <Nav>
        <Logo to="/" activeStyle></Logo>
        <NavMenu>
          <NavLink to="/product" activeStyle>
            PRODUCT
          </NavLink>
          <NavLink to="/about" activeStyle>
            ABOUT
          </NavLink>
          <NavLink to="/roadmap" activeStyle>
            ROADMAP
          </NavLink>
          <NavLink to="/contact" activeStyle>
            CONTACT
          </NavLink>
          <NavLink to="/profile" activeStyle>
            PROFILE
          </NavLink>
          <NavLink to="/login" activeStyle>
            LOG IN
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );*/

  return (
    <Nav>
      {showHamBurgerMenu ? (
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
      ) : (
        <div className="nav-menu">
          <NavMenu>
            <NavLink to="/product" activeStyle>
              PRODUCT
            </NavLink>
            <NavLink to="/about" activeStyle>
              ABOUT
            </NavLink>
            <NavLink to="/roadmap" activeStyle>
              ROADMAP
            </NavLink>
            <NavLink to="/contact" activeStyle>
              CONTACT
            </NavLink>
            <NavLink to="/profile" activeStyle>
              PROFILE
            </NavLink>
            <NavLink to="/login" activeStyle>
              LOG IN
            </NavLink>
          </NavMenu>
        </div>
      )}

      {showHamBurgerMenu && isMenuOpen && (
        <div className="menu-items">
          <NavMenu>
            <NavLink to="/product" activeStyle>
              PRODUCT
            </NavLink>
            <NavLink to="/about" activeStyle>
              ABOUT
            </NavLink>
            <NavLink to="/roadmap" activeStyle>
              ROADMAP
            </NavLink>
            <NavLink to="/contact" activeStyle>
              CONTACT
            </NavLink>
            <NavLink to="/profile" activeStyle>
              PROFILE
            </NavLink>
            <NavLink to="/login" activeStyle>
              LOG IN
            </NavLink>
          </NavMenu>
        </div>
      )}
    </Nav>
  );
}

export default Navbar;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import {
//   Nav,
//   Logo,
//   Bars,
//   NavMenu,
//   NavLink,
//   MobileNavMenu,
//   MenuIcon,
//   MobileNavItem,
//   NavItem,
//   AuthButton,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarStyle";

// function Navbar() {
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   const logoutWithRedirect = () =>
//     logout({
//       logoutParams: {
//         returnTo: window.location.origin,
//       },
//     });

//   return (
//     <>
//       <Nav>
//         <Logo to="/" />
//         <Bars />
//         <NavMenu>
//           <NavItem>
//             <NavLink to="/" activeStyle>
//               Home
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to="/solution" activeStyle>
//               Product
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to="/about" activeStyle>
//               About
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to="/blog" activeStyle>
//               Blog
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to="/contact" activeStyle>
//               Contact
//             </NavLink>
//           </NavItem>
//         </NavMenu>
//         <NavBtn>
//           {isAuthenticated ? (
//             <AuthButton onClick={() => logoutWithRedirect()}>
//               Log Out
//             </AuthButton>
//           ) : (
//             <NavBtnLink onClick={() => loginWithRedirect()}>Log In</NavBtnLink>
//           )}
//         </NavBtn>
//         <MobileNavMenu>
//           <MenuIcon />
//           <MobileNavItem>
//             <NavLink to="/" activeStyle>
//               Home
//             </NavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <NavLink to="/solution" activeStyle>
//               Product
//             </NavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <NavLink to="/about" activeStyle>
//               About
//             </NavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <NavLink to="/blog" activeStyle>
//               Blog
//             </NavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             <NavLink to="/contact" activeStyle>
//               Contact
//             </NavLink>
//           </MobileNavItem>
//           <MobileNavItem>
//             {isAuthenticated ? (
//               <AuthButton onClick={() => logoutWithRedirect()}>
//                 Log Out
//               </AuthButton>
//             ) : (
//               <NavBtnLink onClick={() => loginWithRedirect()}>
//                 Log In
//               </NavBtnLink>
//             )}
//           </MobileNavItem>
//         </MobileNavMenu>
//       </Nav>
//     </>
//   );
// }

// export default Navbar;
