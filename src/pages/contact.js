import React, { useState, useEffect } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Footer from "../components/footer/footer.js";

import {
  PageContainer,
  ContactContainer,
  ContactForm,
  FormInput,
  FormTextArea,
  FormButton,
  Title,
} from "./page_styles/contact_style.js";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageContainer>
        <section>
          <div class="air air1"></div>
          <div class="air air2"></div>
          <div class="air air3"></div>
          <div class="air air4"></div>
        </section>
        <ContactContainer>
          {showMessage ? (
            <div>
              <p>Thank you for your message!</p>
              <p>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <ContactForm onSubmit={onSubmit}>
              <Title>Contact Us</Title>
              {/* <FormLabel htmlFor="email">Email</FormLabel> */}
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <FormLabel htmlFor="firstname">First Name</FormLabel> */}
              <FormInput
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                required
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {/* <FormLabel htmlFor="lastname">Last Name</FormLabel> */}
              <FormInput
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                required
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              {/* <FormLabel htmlFor="company">Company</FormLabel> */}
              <FormInput
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              {/* <FormLabel htmlFor="message">Message</FormLabel> */}
              <FormTextArea
                id="message"
                name="message"
                placeholder="Message"
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
      <Footer />
    </>
  );
}

export default Contact;
