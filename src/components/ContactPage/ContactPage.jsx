import React from "react";
import Page from "../Common/Page/Page";
import "./ContactPage.css";

const ContactPage = ({ inputRef, ...pageProps }) => (
  <Page
    title="Contact me"
    className="ContactPage"
    inputRef={inputRef}
    {...pageProps}
  >
    <div className="EmailWrapper">
      <i className="fa fa-envelope-o" aria-hidden="true" />
      <span>kazana.grzegorz</span>
      <span>@gmail.com</span>
    </div>
  </Page>
);
export default ContactPage;
