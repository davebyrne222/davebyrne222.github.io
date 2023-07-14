import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I&#39;m <span className="info-name">Dave</span>.
          <br /> Physicist, Scrum Master, <strong>Back-End Developer</strong>
          <div className="about-info-subheader">
            "Huh!? Thats a weird mix of experience" - I agree!
            <br /> See <a href="#work">About</a> for a better explanation
          </div>
          <div className="about-info-body">
            I'm an IT professional with over 10 years experience in the software
            development industry, mainly as a Scrum Master. I'm now making the
            move to full-time developer
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
