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
        </NavMenu>
      </Nav>
    </>
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
