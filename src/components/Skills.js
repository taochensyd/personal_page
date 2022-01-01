import React from "react";

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
    <div className="containerFlexColumn">
      {section.map((sectionTitle, sectionIndex) => (
        <div key={sectionIndex} className="skillSection containerCard">
          <ul className="title">{sectionTitle}

          {data.data.map((skill) =>
            skill.category === sectionTitle ? (
              <li key={skill.id} className="">{skill.skill}</li>
            ) : null,
          )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
