import React from "react";
import "./ProjectsPage.css";

const ProjectEntry = ({ projectData: { title, description, icon, url } }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="ProjectLink"
  >
    <div className="ProjectEntry">
      <i className={icon} />
      <div className="ProjectEntryContent">
        <div className="ProjectEntryTitle">{title}</div>
        <div className="ProjectEntrySubtitle">{description}</div>
      </div>
    </div>
  </a>
);

export default ProjectEntry;
