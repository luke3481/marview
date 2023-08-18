import React from "react";
import {
  Container,
  SubContainer,
  ContentContainer,
  SubContainer2,
  Text,
  Title,
  Links,
  SignUp,
  LinkContainer,
} from "./footer_style";

function Footer() {
  return (
    <Container>
      <SubContainer>
        <ContentContainer>
          <Title>About Us</Title>
          <Text>
            Marview aims to create the world’s highest-quality source of ocean
            data, taking the guesswork out of maritime decision making.
          </Text>
        </ContentContainer>
        <ContentContainer>
          <Title>Resources</Title>
          <LinkContainer>
            <Links to="/roadmap">Roadmap</Links>
            <Links to="/privacy">Privacy</Links>
            <Links to="/terms">Terms</Links>
            <Links to="/contact">Contact</Links>
          </LinkContainer>
        </ContentContainer>
        <ContentContainer>
          <Title>Stay in Touch</Title>
          <Text>Sign up to receive important updates on products.</Text>
          <br />
          <SignUp to="/contact">Sign Up</SignUp>
        </ContentContainer>
      </SubContainer>
      <SubContainer2>
        <Text>© 2023 Marview. All rights reserved. </Text>
      </SubContainer2>
    </Container>
  );
}

export default Footer;
