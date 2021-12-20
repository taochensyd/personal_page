import React from "react";

function ProjectList(data) {
  //console.log(data.data);

  return (
    <>
      {data.data.map((projectDetail) => (
        <div className="projectCard" key={projectDetail.id}>
          <h2 className="projectName">{projectDetail.projectTitle}</h2>
          <h4 className="projectDate">{projectDetail.startDate}</h4>
          <h4 className="projectOrganization">
            {projectDetail.organizationName}
          </h4>
          <h4 className="projectType">{projectDetail.type}</h4>
          <p className="projectDescriptionText">
            This is the description text for the project
          </p>
          <a
            href={projectDetail.sourceCode}
            target="_blank"
            className="projectLinkUrl">
            View Source Code at GitHub
          </a>
          <a
            href={projectDetail.livePage}
            target="_blank"
            className="projectLinkUrl">
            View live page
          </a>
        </div>
      ))}
    </>
  );
}

export default ProjectList;
