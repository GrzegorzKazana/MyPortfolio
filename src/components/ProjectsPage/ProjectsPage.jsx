import React from "react";
import Page from "../Common/Page/Page";
import "./ProjectsPage.css";
import ProjectEntry from "./ProjectEntry";
import GithubButton from "./GithubButton";
import projectSetData from "./ProjectSetData";

const ProjectsPage = ({ inputRef, ...pageProps }) => (
  <Page
    title="Projects"
    className="ProjectsPage"
    inputRef={inputRef}
    {...pageProps}
  >
    <div>Here is what I've been working on lately.</div>

    <div className="ProjectsList">
      {projectSetData &&
        projectSetData.map((projectData, index) => (
          <ProjectEntry key={index} projectData={projectData} />
        ))}
    </div>
    <GithubButton />
  </Page>
);

export default ProjectsPage;
