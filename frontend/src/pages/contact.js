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
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, subject, message });
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
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea
              id="message"
              name="message"
              placeholder="Enter your message"
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
