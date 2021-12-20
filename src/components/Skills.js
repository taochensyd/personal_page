import React from "react";
import "../styles/componentsStyle.css";

function Skills(data) {
  var section = [];
  function getSectionTitle(data, section) {
    for (let i = 0; i < data.data.length; i++) {
      if (section.includes(data.data[i].category) === false) {
        section.push(data.data[i].category);
      }
    }
  }

  getSectionTitle(data, section);
  return (
    <>
      {section.map((sectionTitle, sectionIndex) => (
        <div key={sectionIndex} className="skillSection">
          {sectionTitle}

          {data.data.map((skill) =>
            skill.category === sectionTitle ? (
              <h6 key={skill.id}>{skill.skill}</h6>
            ) : null,
          )}
        </div>
      ))}
    </>
  );
}

export default Skills;
