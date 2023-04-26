import React from "react";
import "./menu.css";

function BurgerMenu({ handleToggle }) {
  return (
    <ul className="menu">
      <li>
        <a href="#home-section" onClick={handleToggle}>
          Home
        </a>
      </li>
      <li>
        <a href="#about-section" onClick={handleToggle}>
          About
        </a>
      </li>
      <li>
        <a href="#skills-section" onClick={handleToggle}>
          Skills
        </a>
      </li>

      <li>
        <a href="#projects-section" onClick={handleToggle}>
          Projects
        </a>
      </li>
      <li>
        <a href="#contact-section" onClick={handleToggle}>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default BurgerMenu;
