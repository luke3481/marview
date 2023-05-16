import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButton } from "./navbar_styles/logout_style.js";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <StyledButton
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Sign Out
    </StyledButton>
  );
}

export default LogoutButton;
