import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <a href="#resume-section">Resume</a>
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
                <Link onClick={() => setToggleNav(false)} to="/">About</Link>
              </li>
              <li>
                <Link onClick={() => setToggleNav(false)} to="/projects">Projects</Link>
              </li>
              <li>
                <Link onClick={() => setToggleNav(false)} to="/contact">Contact</Link>
              </li>
              <li>
                <Link onClick={() => setToggleNav(false)} to="/resume">Resume</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
