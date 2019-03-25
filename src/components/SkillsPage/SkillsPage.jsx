import React from "react";
import Page from "../Common/Page";
import "./SkillsPage.css";
import SkillEntry from "./SkillEntry";

const SkillsPage = ({ inputRef, ...pageProps }) => (
  <Page
    title="Skills"
    className="SkillsPage"
    inputRef={inputRef}
    {...pageProps}
  >
    <div className="SkillList">
      <SkillEntry />
      <SkillEntry />
    </div>
    <div className="SkillDescription" />
  </Page>
);
export default SkillsPage;
