import React from "react";

function AboutMe(data) {
  return (
    <>
      {data.data.map((education) => (
        <div className="educationCard" key={education.id}>
          <h2>Education:</h2>
          <h3>{education.courseName}</h3>
          <h3>{education.universityName}</h3>
          <h3>
            {education.startDate} {" - "}{" "}
            {education.endDate ? education.endDate : "Present"}
          </h3>
        </div>
      ))}
    </>
  );
}

export default AboutMe;
