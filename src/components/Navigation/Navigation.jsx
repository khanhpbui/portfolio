import React, { useState } from "react";
import BurgerMenu from "../Menu/Menu";
import "./navigation.css";
import logo from "../../assets/img/avatar/logo3.png";
import { Divide as Hamburger } from "hamburger-react";
const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-sm-screen">
        <a href="#home-section" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="burger-btn">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            label="Show menu"
          />
        </div>
      </div>
      {isOpen && (
        <div className="burger-menu">
          <BurgerMenu handleToggle={() => setOpen(false)} />
        </div>
      )}

        <div className="menu-lg-screen">
          <BurgerMenu handleToggle={() => setOpen(false)} />
        </div>
      

      {/* <div className="navbar-lg-screen">
        <img src={logo} alt="logo" />
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

      
          */}
    </nav>
  );
};

export default Navigation;
