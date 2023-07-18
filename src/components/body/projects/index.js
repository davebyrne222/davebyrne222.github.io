import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
// import ProjectCard from "./project-card";
import ActionAreaCard from "./project-card";
import Grid from "@mui/material/Unstable_Grid2";
import "./projects.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

function Projects() {
  const data = ProjectData;
  return (
    <div className="section projects">
      <Separator />
      <h1 className="section-title">Portfolio</h1>
      <Grid container spacing={2} alignItems={"stretch"}>
        {data.map((project) => {
          return (
            <Grid sm={1} md={4} key={project.id}>
              <ActionAreaCard project={project} key={project.id} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Projects;
