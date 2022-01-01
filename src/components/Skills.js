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
          <dl className="title">{sectionTitle}

          {data.data.map((skill) =>
            skill.category === sectionTitle ? (
              <dt key={skill.id} className="subtitle dashed">{skill.skill}{skill.subSkills.map((subSkill) => subSkill ? <dd>{subSkill}</dd> : null)}</dt>
            ) : null,
          )}
          </dl>
        </div>
      ))}
    </div>
  );
}

export default Skills;
