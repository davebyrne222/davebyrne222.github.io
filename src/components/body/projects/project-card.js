import React from "react";
import "./project-card.css";
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

export default ProjectCard;
