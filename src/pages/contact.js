import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

import {
  PageContainer,
  ContactContainer,
  ContactForm,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  Title,
} from "./styles/contact_style.js";

const FORMSPARK_FORM_ID = "2pxnvScI";

function Contact() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ firstname, lastname, email, company, message });
    setShowMessage(true);
  };

  return (
    <PageContainer>
      <ContactContainer>
        <Title>Contact Us</Title>
        {showMessage ? (
          <div>
            <p>Thank you for your message!</p>
            <p>We will get back to you as soon as possible.</p>
          </div>
        ) : (
          <ContactForm onSubmit={onSubmit}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="firstname">First Name</FormLabel>
            <FormInput
              type="text"
              id="firstname"
              name="firstname"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormLabel htmlFor="lastname">Last Name</FormLabel>
            <FormInput
              type="text"
              id="lastname"
              name="lastname"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormLabel htmlFor="company">Company</FormLabel>
            <FormInput
              type="text"
              id="company"
              name="company"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              cols={50}
            />
            <FormButton type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Send Message"}
            </FormButton>
          </ContactForm>
        )}
      </ContactContainer>
    </PageContainer>
  );
}

export default Contact;
