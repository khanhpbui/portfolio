import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div id="about-section" className="intro">
      <h5>Hello there, my name is</h5>
      <h1 className="my-name">KHANH BUI</h1>
      <p>A Software Developer</p>
      <img src="https://picsum.photos/seed/picsum/200/300?grayscale" alt="" />
      <p>
        Creative and enthusiastic developer with prior experience in customer
        service and sales. Team work makes the dream work, so collaborating to
        drive the team's success is a must. Developed & honed skills with a
        Full-Stack Web Development Certificate from Georgia Institute of
        Technology. Determined, self-driven and enjoy the challenges of complex
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
