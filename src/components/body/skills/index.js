import React from "react";
import Separator from "../../common/separator/index";
import "./skills.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <h1 className="section-title">Skills</h1>
      <div className="skills-container">
        {data.map((item, idx) => {
          return (
            <div className="skills-section" key={idx}>
              <h2 className="section-header">{item.type}</h2>
              <div className="skills-list">
                {item.list.map((skill, idx) => {
                  return <SkillCard skill={skill} key={idx} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
