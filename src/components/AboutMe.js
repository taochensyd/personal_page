import React from "react";
import "../styles/componentsStyle.css";

function AboutMe(data) {
  return (
    <>
      {data.data.map((education) => (
        <div className="containerCard containerFlexColumn" key={education.id}>
          
          <p className="title">{education.courseName} </p>
          <p className="info">{education.universityName}<br></br>{education.startDate} {" - "}{education.endDate ? education.endDate : "Present"}</p>          
        </div>
      ))}
    </>
  );
}

export default AboutMe;
