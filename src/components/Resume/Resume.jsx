import React from "react";
import "./resume.css";
import techLogo from "./skillArr";
import { RxDotFilled } from "react-icons/rx";

const Resume = () => {
  return (
    <div id="resume-section" className="resume-page">
      <div className="skill-content">
      <h2>Skills</h2>
      <div className="skill-resume">
        {/*============== skills =============*/}
        <p className="skill">
          HTML5 <RxDotFilled /> CSS3 <RxDotFilled /> JavaScript <RxDotFilled />{" "}
          Third Party APIs <RxDotFilled /> Handlebars.js <RxDotFilled /> jQuery{" "}
          <RxDotFilled /> Bootstrap <RxDotFilled /> Tailwind <RxDotFilled />{" "}
          React <RxDotFilled /> MySQL <RxDotFilled /> Sequelize <RxDotFilled />{" "}
          NoSQL <RxDotFilled /> MongoDB <RxDotFilled /> Mongoose <RxDotFilled />{" "}
          Jest <RxDotFilled /> Node.js <RxDotFilled /> Express.js{" "}
          <RxDotFilled /> Apollo <RxDotFilled /> GraphQL Heroku <RxDotFilled />{" "}
          Git <RxDotFilled /> GitHub <RxDotFilled /> Git Bash <RxDotFilled />{" "}
          Visual Studio Code <RxDotFilled /> NPM <RxDotFilled /> Insomnia
        </p>

        {/*============== logos =============*/}
        <div className="logos">
          {techLogo.map((logo) => (
            <img
              key={logo.id}
              className="logo"
              id={logo.techName}
              src={logo.image}
              alt={logo.techName}
            />
          ))}
        </div>

      </div>
      </div>
      
      <div className="my-resume">
          <a
            className="my-resume-link"
            href="https://docs.google.com/document/d/1P6negCQaE3iD2tDpht9PSk_Bha1ibmmn6VKRj5Rudfk/edit?usp=sharing"
          >
            Check Out My Resume
          </a>
        </div>
    </div>
  );
};

export default Resume;
