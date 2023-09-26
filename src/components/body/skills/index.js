import React from "react";
import Separator from "../../common/separator/index";
import "./skills.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
function Skills() {
  const data = SkillsData;
  return (
    <div className="section skills">
      <Separator />
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {data.map((item, idx) => {
          return (
            <div className="skills-section" key={idx}>
              <h3 className="section-header">{item.type}</h3>
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
