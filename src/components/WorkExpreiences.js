import React from "react";

function WorkExpreiences(data) {
  return (
    <>
      {data.data.map((workExperience) => (
        <div className="workExpreiences" key={workExperience.id}>
          <h2 className="companyName">{workExperience.companyName}</h2>
          <h3 className="workLocation">{workExperience.location}</h3>
          <h3 className="workPosition">{workExperience.position}</h3>
          <p className="workDate">
            {workExperience.startDate}
            {" - "}
            {workExperience.endDate ? workExperience.endDate : "Present"}
          </p>
          {workExperience.workDescrition.map((workDescrition) => (
            <li>{workDescrition}</li>
          ))}
        </div>
      ))}
    </>
  );
}

export default WorkExpreiences;
