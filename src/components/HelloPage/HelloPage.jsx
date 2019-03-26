import React from "react";
import Page from "../Common/Page";
import "./HelloPage.css";

const HelloPage = ({ inputRef, ...pageProps }) => (
  <Page className="HelloPage" inputRef={inputRef} {...pageProps}>
    <h1 className="Title">Hi, I'm Grzegorz</h1>
    <h3 className="subtitle">
      Junior Front-End Dev | ML enthusiast | Eager Learner
    </h3>
  </Page>
);

export default HelloPage;
