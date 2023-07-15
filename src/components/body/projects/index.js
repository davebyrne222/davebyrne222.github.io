import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <h1 className="section-title">Portfolio</h1>
      <>
        {data.map((project, idx) => {
          return <ProjectCard project={project} key={idx} />;
        })}
      </>
    </div>
  );
}

export default Projects;
