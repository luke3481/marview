import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/login";
import LogoutButton from "../components/logout";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  PageContainer,
  ProfileContainer,
  Title,
  Button,
} from "./styles/profile_style.js";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <PageContainer>
        <ProfileContainer>
          <Title>Profile</Title>
          <LoginButton />
        </ProfileContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Title>Profile</Title>
      <ProfileContainer>
        {isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}
        <LogoutButton />
      </ProfileContainer>
    </PageContainer>
  );
}

export default Profile;
