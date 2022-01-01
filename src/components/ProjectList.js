import React from "react";

function ProjectList(data) {

  return (
    <>
      {data.data.map((projectDetail) => (
        <div className="containerCard containerFlexColumn" key={projectDetail.id}>
          <p className="projectName title">{projectDetail.projectTitle}</p>

          <p className="info">Date: {projectDetail.startDate + " - "}{projectDetail.endDate.length > 0 ? projectDetail.endDate : "Present"}<br></br>Organization: {projectDetail.organizationName}<br></br>Type: {projectDetail.type}</p>
          
          <p className="projectDescriptionText text">
            {projectDetail.descriptionText}
          </p>
          <a
            href={projectDetail.sourceCode}
            target="_blank"
            className="projectLinkUrl">
            View Source Code at GitHub
          </a>
          <br></br>
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
