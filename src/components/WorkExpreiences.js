import React from "react";
import "../styles/componentsStyle.css";

function WorkExpreiences(data) {
  return (
    <>
      {data.data.map((workExperience) => (
        <div className="containerCard containerFlexColumn" key={workExperience.id}>
          <p className="title">{workExperience.position}</p>
          <p className="info">{workExperience.companyName}<br></br>{workExperience.location}<br></br>{workExperience.startDate}{" - "}{workExperience.endDate ? workExperience.endDate : "Present"}</p>
          {workExperience.workDescrition.map((workDescrition) => (
            <li>{workDescrition}</li>
          ))}
        </div>
      ))}
    </>
  );
}

export default WorkExpreiences;
