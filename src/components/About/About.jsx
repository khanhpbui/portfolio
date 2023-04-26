import React from "react";
import "./about.css";
import myAvatar from "../../assets/img/avatar/kb1.png";
const About = () => {
  return (
    <div id="about-section" className="intro">
      <div className="sections-heading">
        <h4>Welcome to my</h4>
        <h2>Portfolio</h2>
      </div>
      <div className="about-content">
        <div className="about-image-container">
          <img className="about-img" src={myAvatar} alt="Khanh Bui's avatar" />
        </div>
        <p>
          As a results-driven software engineer with an unwavering passion for
          innovation, I am a natural collaborator who excels in agile
          environments and effectively communicates with cross-functional teams
          to achieve success. My meticulous attention to detail and commitment
          to excellence enable me to consistently deliver high-quality results
          on every project. <br></br>
          Whether it involves exploring new technologies or devising innovative
          solutions to complex problems, I am always eager to take on new
          challenges and leverage my creative problem-solving skills to drive
          success. With experience in building user-friendly applications from
          ideation to execution, I am devoted to continuously honing my skills
          and staying up-to-date with the latest trends and advancements in the
          field.
          <br></br> I am a valuable asset to any team seeking a passionate
          software engineer with a growth mindset and a dedication to delivering
          exceptional results.
        </p>
      </div>
    </div>
  );
};

export default About;
