import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButton } from "./navbar_styles/button_style.js";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledButton onClick={() => loginWithRedirect()}>Sign In</StyledButton>
  );
}

export default LoginButton;
