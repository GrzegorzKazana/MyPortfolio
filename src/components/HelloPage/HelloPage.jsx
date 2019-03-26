import React from "react";
import Page from "../Common/Page";
import "./HelloPage.css";

const HelloPage = ({ inputRef, ...pageProps }) => (
  <Page className="HelloPage" inputRef={inputRef} {...pageProps}>
    <h1 className="Title">Hi, I'm Grzegorz</h1>
    <h3 className="subtitle">
      <span>Junior Front-End Dev |&nbsp;</span>
      <span>ML enthusiast |&nbsp;</span>
      <span>Eager Learner</span>
    </h3>
  </Page>
);

export default HelloPage;
