import React from "react";
import "./ProjectsPage.css";

const GithubButton = props => (
  <a
    href="https://github.com/GrzegorzKazana"
    target="_blank"
    rel="noopener noreferrer"
    className="ProjectLink"
  >
    <div className="GithubButton">
      <i className="devicon-github-plain" />
      <div>MORE</div>
    </div>
  </a>
);

export default GithubButton;
