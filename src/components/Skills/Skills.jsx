import React from "react";
import "./skill.css";
import techLogo from "./skillArr";

const Resume = () => {
  return (
    <div id="skills-section">
      <div className="sections-heading">
        <h4>My</h4>
        <h2>Skills</h2>
      </div>
      <div className="skill-list">
        {techLogo.map((logo) => (
          <div className="logos">
            <div className="skill-logo">
              <img
                key={logo.id}
                className="logo-img"
                id={logo.techName}
                src={logo.image}
                alt={logo.techName}
              />
            </div>
            <p>{logo.techName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
