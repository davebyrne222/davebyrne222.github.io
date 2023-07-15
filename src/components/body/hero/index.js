import React from "react";
import "./hero.css";
import SocialContact from "../../common/social-contact/index";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-info">
          Hi, I&#39;m <span className="info-name">Dave</span>
          <div className="hero-tagline">
            <label className="hero-prof-old">Physicist</label>{" "}
            <label className="hero-prof-old">Scrum Master</label> [ Back-End ]{" "}
            <strong> Developer</strong>
          </div>
          <div className="hero-info-subheader">
            <div className="hero-quote">
              "Huh!? Thats a weird mix of experience" <br /> - You
            </div>
            <br /> I agree! See <a href="#about">About</a> for a better
            explanation
          </div>
          <div className="hero-info-body">
            I'm an IT professional with over 10 years experience in the software
            development industry, primarily as a Scrum Master. I'm now
            transitioning to full-time developer
          </div>
          <div className="hero-info-body">
            Please read my portfolio, check-out my experience, and contact me
            with any opportunities you may have
          </div>
        </div>
        <div className="hero-photo">
          <img src={require("../../../assets/hero.png")} className="picture" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default Hero;
