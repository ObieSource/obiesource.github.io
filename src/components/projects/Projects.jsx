import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="obs__projects">
      <div className="obs__projects-container">
        <div className="obs__projects-project">
          <div className="obs__project-image"></div>
          <div className="obs__projects-project-heading">
            <div className="obs__projects-project-heading-title">Genetics</div>
            <div className="obs__projects-project-heading-status">
              IN PROGRESS
            </div>
          </div>
        </div>
        <div className="obs__projects-project">
          <div className="obs__project-image"></div>
          <div className="obs__projects-project-heading">
            <div className="obs__projects-project-heading-title">
              TimeStretch
            </div>
            <div className="obs__projects-project-heading-status">
              IN PROGRESS
            </div>
          </div>
        </div>
        <div className="obs__projects-project">
          <div className="obs__project-image">{/* <img></img> */}</div>
          <div className="obs__projects-project-heading">
            <div className="obs__projects-project-heading-title">Website</div>
            <div className="obs__projects-project-heading-status">
              IN PROGRESS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
