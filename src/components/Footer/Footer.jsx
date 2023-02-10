import React from "react";
import { BsLinkedin, BsFillFileEarmarkPersonFill, BsGithub } from "react-icons/bs";
import './footer.css'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>Khanh Bui - {new Date().getFullYear()}</p>
        <ul>
          <li className="footer-link">
            <a href="https://www.linkedin.com/in/khanh-bui-099999250/">
              <BsLinkedin className="icon"/>
            </a>
          </li>
          <li className="footer-link">
            <a href="https://github.com/khanhpbui">
              <BsGithub className="icon"/>
            </a>
          </li>
          <li className="footer-link">
            <a href="https://docs.google.com/document/d/1P6negCQaE3iD2tDpht9PSk_Bha1ibmmn6VKRj5Rudfk/edit?usp=sharing">
              <BsFillFileEarmarkPersonFill className="icon"/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
