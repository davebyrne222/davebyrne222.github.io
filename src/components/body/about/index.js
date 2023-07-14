import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hi, I&#39;m <span className="info-name">Dave</span>.
         <br /> Physicist, Scrum Master, Back-End Developer
         <div className="about-info-footnote"> 
          "Huh!? Thats a weird mix of experience" - I agree!
          <br /> See About for a better explanation
        </div>
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;