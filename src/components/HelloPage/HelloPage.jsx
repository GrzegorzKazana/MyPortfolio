import React from "react";
import Page from "../Common/Page";
import "./HelloPage.css";

const HelloPage = ({ inputRef, ...pageProps }) => (
  <Page className="HelloPage" inputRef={inputRef} {...pageProps}>
    <h1>Hi, i'm Grzesiek.</h1>
    <h3 className="subtitle">
      Junior Front-End Dev | ML aficionado | Eager Learner
    </h3>
  </Page>
);

export default HelloPage;
