import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { VscRocket } from "react-icons/vsc";
import projects from "./projectArr";
import "./projects.css";

const Projects = () => {
  return (
    <div id="project-section" className="project-page">
      <h2>Check out my projects:</h2>
      <div className="projects">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-img">
              <a href={project.deployedLink} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
            <div className="project-content">
              <div className="project-desc">
                <a href={project.deployedLink} target="_blank" rel="noreferrer">
                  <h4>{project.title}</h4>
                </a>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-links">
              <a href={project.repositoryLink} target="_blank" rel="noreferrer">
                <AiOutlineGithub />
              </a>
              <a href={project.deployedLink} target="_blank" rel="noreferrer">
                <VscRocket />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
