import React from "react";

function ProjectList() {
  return (
    <div className="card">
      <h2 className="projectName">Title: Project 1</h2>
      <h4 className="projectDate">Date: </h4>
      <h4 className="projectOrganization">Organization:</h4>
      <h4 className="projectType">Type: Personal</h4>
      <h4 className="projectDescription">Description:</h4>
      <p className="projectDescriptionText">
        This is the description text for the project
      </p>
      <a href="/" className="projectLinkUrl">
        View Source Code
      </a>
      <a href="/" className="projectLinkUrl">
        View live page
      </a>
    </div>
  );
}

export default ProjectList;
