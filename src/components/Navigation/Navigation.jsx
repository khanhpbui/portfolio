import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";
// import { FaFileDownload } from "react-icons/fa";
import "./navigation.css";

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-lg-screen">
        <ul className="navbar-lg-screen-links">
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#skill-section">Skills</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#project-section">Projects</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-sm-screen">
        <CgMenu
          className="navbar-sm-screen-icon"
          onClick={() => setToggleNav(true)}
        />

        {toggleNav && (
          <div className="navbar-sm-screen-overlay">
            <MdClose
              className="navbar-sm-screen-icon-close"
              onClick={() => setToggleNav(false)}
            />
            <ul className="navbar-sm-screen-links">
              <li>
                <a href="#about-section" onClick={() => setToggleNav(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skill-section" onClick={() => setToggleNav(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#resume" onClick={() => setToggleNav(false)}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#project-section" onClick={() => setToggleNav(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact-section" onClick={() => setToggleNav(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
