import React from "react";
import resume from "../../assets/media/khanh-bui-resume.pdf";
import {
  BsLinkedin,
  BsFillFileEarmarkPersonFill,
  BsGithub,
} from "react-icons/bs";
import { RiCopyrightLine } from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
         Khanh Bui <RiCopyrightLine /> {new Date().getFullYear()}
      </p>
      <ul>
        <li className="footer-link">
          <a href="https://www.linkedin.com/in/khanh-bui-099999250/">
            <BsLinkedin className="icon" />
          </a>
        </li>
        <li className="footer-link">
          <a href="https://github.com/khanhpbui">
            <BsGithub className="icon" />
          </a>
        </li>
        <li className="footer-link">
          <a href={resume} download>
            <BsFillFileEarmarkPersonFill className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
