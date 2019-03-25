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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero
    metus, porta in nisl non, congue feugiat nisi. Morbi a elit semper mi
    blandit tincidunt. Fusce nec venenatis lectus. Nullam aliquet vel erat at
    semper.
  </Page>
);
export default ContactPage;
