import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/Navbar/login";
import LogoutButton from "../components/Navbar/logout";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { PageContainer, Title } from "./profile_style.js";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <PageContainer>
        <Title>Log In</Title>
        <LoginButton />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <Title>Profile</Title>
      <LogoutButton />
    </PageContainer>
  );
}

export default Profile;
