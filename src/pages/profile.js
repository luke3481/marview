import React from "react";
import LoginButton from "./../components/navbar/login";
import LogoutButton from "./../components/navbar/logout";
import {
  PageContainer,
  ProfileContainer,
  Title,
} from "./page_styles/profile_style.js";
import { useAuth0 } from "@auth0/auth0-react";

// TODO:
// What UX difference is there between authenticated and nonauthenticated flows?
// How do I login to our auth0 account?
// How many users have created profiles?

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
      <ProfileContainer>
        <Title>Profile</Title>
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
