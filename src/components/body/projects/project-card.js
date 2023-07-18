import React from "react";
import "./project-card.css";

// -----------------------------------
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CardActionArea, CardHeader } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ActionAreaCard({ project }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      raised={true}
    >
      <CardActionArea
        href={project.live ? project.github : null}
        disabled={!project.live}
        target="_blank"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <CardHeader title={project.title} />
        <CardContent>
          {project.live ? (
            ""
          ) : (
            <Chip label="Coming Soon" size="small" variant="outlined" />
          )}
        </CardContent>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="body1" color="text.secondary">
            {project.tagline}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {project.about}
          </Typography>
        </CardContent>
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: "wrap", rowGap: "10px" }}
          >
            {project.tags.map((tag, idx) => {
              return <Chip label={tag} size="small" key={idx} />;
            })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
// -----------------------------------

function ProjectCard({ project }) {
  return (
    <a
      className={project.live ? "project-card-link" : null}
      href={project.live ? project.github : null}
      target="_blank"
    >
      <div className="project-card">
        <div className="project-info">
          <h2 className="section-header">
            {project.title}{" "}
            {project.live ? null : (
              <label className="tag tag-coming-soon">Coming Soon!</label>
            )}
          </h2>
          <p>{project.tagline}</p>
          <p>{project.about}</p>
          <div className="project-tags">
            {project.tags.map((tag, idx) => {
              return (
                <label className="tag" key={idx}>
                  {tag}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </a>
  );
}

// export default ProjectCard;
