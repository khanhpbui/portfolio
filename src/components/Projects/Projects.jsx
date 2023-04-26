import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { VscRocket } from "react-icons/vsc";
import projects from "./projectArr";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projects-section">
      <div className="sections-heading">
        <h4>Checkout my</h4>
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-img">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
              <a href={project.repositoryLink} target="_blank" rel="noreferrer">
                <AiOutlineGithub />
              </a>
              <a href={project.deployedLink} target="_blank" rel="noreferrer">
                <VscRocket />
              </a>
            </div>
            </div>
            <div className="project-content">
              <div className="project-desc">
                <a href={project.deployedLink} target="_blank" rel="noreferrer">
                  <h3>{project.title}</h3>
                </a>
                <p>{project.description}</p>
              </div>
            </div>
            {/* can we do hover???? */}
     
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
