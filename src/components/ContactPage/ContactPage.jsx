import React from "react";
import Page from "../Common/Page";
import "./ContactPage.css";

const ContactPage = ({ inputRef, ...pageProps }) => (
  <Page
    title="Contact"
    className="ContactPage"
    inputRef={inputRef}
    {...pageProps}
  >
    <div className="EmailWrapper">
      <i className="fa fa-envelope-o" aria-hidden="true" />
      <span>kazana.grzegorz@gmail.com</span>
    </div>
  </Page>
);
export default ContactPage;
