import React from "react";
import "./home.css";
import myPic from "../../assets/img/avatar/kb.png";
import react from "../../assets/img/techLogo/react.png";
import javascript from "../../assets/img/techLogo/js.png";
import graphql from "../../assets/img/techLogo/graphql.png";

const Home = () => {
  return (
    <div id="home-section">
      <div className="home-content">
        <h4 className="home-cursive">Hello,</h4>
        <h1>I'm Vi</h1>
        <h5>A Software Engineer</h5>
        <div className="connect-link">
          <a href="#contact-section">
            Connect With Me <span>&#10230;</span>
          </a>
        </div>
      </div>
      <div className="home-image-section" style={{ position: "relative" }}>
      <div className="home-image-container">
        <img className="home-img" src={myPic} alt="Khanh Bui's avatar" />
      </div>
        <img className="avatar-logo" id="react-logo" src={react} alt="logo" />
        <img className="avatar-logo" id="js-logo" src={javascript} alt="logo" />
        <img className="avatar-logo" id="graphql-logo" src={graphql} alt="logo" />
      </div>
    </div>
  );
};

export default Home;

// #home-section {
//   padding: 5rem 7rem;
// }
// .home-content {
//   margin: 1rem 2rem 1rem 7rem;
//   flex-basis: 40%;
// }
// .home-img {
//   width: 45%;
// }
// .home-image-container {
//   flex-basis: 60%;
//   margin: 0;
// }
