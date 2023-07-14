import React from "react";
import Separator from "../../common/separator";
import "./about.css";
function About() {
  return (
    <div className="about">
      <Separator />
      <label className="section-title">About</label>

      <div className="subsection-title">
        Why Change to Software Development?
      </div>
      <div className="about-paragraph">
        I'm an IT professional with over 10 years experience in the software
        development industry, mainly as a Scrum Master. I'm now making the move
        to full-time developer
      </div>

      <div className="subsection-title">Why Now, Why Not 10 Years Ago?</div>
      <div className="about-paragraph">
        I took the opportunities life presented
      </div>
    </div>
  );
}

export default About;
