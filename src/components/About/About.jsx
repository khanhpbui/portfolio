import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import myName from "../../assets/gif/name.gif"
import myPic from "../../assets/img/avatar/kb1.jpg"

const About = () => {
  return (
    <div id="about-section" className="intro">
      <h5>Hello there, my name is</h5>
      <img className="my-name" src={myName} alt="Khanh Bui"/>
      <p className="my-title">A Software Engineer</p>
      <img className="my-pic" src={myPic} alt="Khanh Bui's avatar" />
      <p>
        Creative and enthusiastic developer with prior experience in customer
        service and sales. Team work makes the dream work, so collaborating to
        drive the team's success is a must. Developed & honed skills with a
        Full-Stack Web Development Certificate from Georgia Institute of
        Technology. Determined, self-driven and enjoys the challenges of complex
        problem solving.
      </p>
      <div className="connect-link">
        <Link to="/contact">
          Connect With Me <span>&#10230;</span>
        </Link>
      </div>
    </div>
  );
};

export default About;
