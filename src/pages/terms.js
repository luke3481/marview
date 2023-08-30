import React, { useEffect } from "react";
import { PageContainer, ContentContainer } from "./page_styles/privacy_style.js";
import Footer from "../components/footer/footer";

function Terms() {

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
      <ContentContainer>
      <div>
        <h1>TERMS AND CONDITIONS</h1>

        <p>
          These terms and conditions (the "Terms and Conditions") govern the use
          of <b>www.marview.ai</b> (the "Site"). This Site is owned and operated
          by Marview. This Site is an ecommerce website.
        </p>

        <p>
          By using this Site, you indicate that you have read and understand
          these Terms and Conditions and agree to abide by them at all times.
        </p>

        <h2>Intellectual Property</h2>

        <p>
          All content published and made available on our Site is the property
          of Marview and the Site's creators. This includes, but is not limited
          to images, text, logos, documents, downloadable files and anything
          that contributes to the composition of our Site.
        </p>

        <h2>Accounts</h2>

        <p>
          When you create an account on our Site, you agree to the following:
        </p>
        <ul>
          <li>
            You are solely responsible for your account and the security and
            privacy of your account, including passwords or sensitive
            information attached to that account; and
          </li>
          <li>
            All personal information you provide to us through your account is
            up to date, accurate, and truthful and that you will update your
            personal information if it changes.
          </li>
        </ul>
        <p>
          We reserve the right to suspend or terminate your account if you are
          using our Site illegally or if you violate these Terms and Conditions.
        </p>
        <h2>Limitation of Liability</h2>

        <p>
          Marview and our directors, officers, agents, employees, subsidiaries,
          and affiliates will not be liable for any actions, claims, losses,
          damages, liabilities and expenses including legal fees from your use
          of the Site.
        </p>

        <h2>Indemnity</h2>

        <p>
          Except where prohibited by law, by using this Site you indemnify and
          hold harmless Marview and our directors, officers, agents, employees,
          subsidiaries, and affiliates from any actions, claims, losses,
          damages, liabilities and expenses including legal fees arising out of
          your use of our Site or your violation of these Terms and Conditions.
        </p>

        <h2>Applicable Law</h2>

        <p>
          These Terms and Conditions are governed by the laws of the State of
          Delaware.
        </p>

        <h2>Severability</h2>

        <p>
          If at any time any of the provisions set forth in these Terms and
          Conditions are found to be inconsistent or invalid under applicable
          laws, those provisions will be deemed void and will be removed from
          these Terms and Conditions. All other provisions will not be affected
          by the removal and the rest of these Terms and Conditions will still
          be considered valid.
        </p>

        <h2>Changes</h2>

        <p>
          These Terms and Conditions may be amended from time to time in order
          to maintain compliance with the law and to reflect any changes to the
          way we operate our Site and the way we expect users to behave on our
          Site. We will notify users by email of changes to these Terms and
          Conditions or post a notice on our Site.
        </p>
        <br/><br/>
      </div>
      </ContentContainer>
    </PageContainer>
    <Footer />
    </>
  );
}

export default Terms;
