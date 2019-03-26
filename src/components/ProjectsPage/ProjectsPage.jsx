import React from "react";
import Page from "../Common/Page";
import "./ProjectsPage.css";
import ProjectEntry from "./ProjectEntry";

const ProjectsPage = ({ inputRef, ...pageProps }) => (
  <Page
    title="Projects"
    className="ProjectsPage"
    inputRef={inputRef}
    {...pageProps}
  >
    <div>Here is what i've been working on lately. Something something.</div>

    <div className="ProjectsList">
      <ProjectEntry />
      <ProjectEntry />
      <ProjectEntry />
    </div>

    <div>Here is what i've been working on lately. Something something.</div>
  </Page>
);

export default ProjectsPage;
