import React from "react";
import Separator from "../../common/separator";
import "./about.css";
function About() {
  return (
    <div className="about">
      <Separator />
      <h1 className="section-title">About</h1>

      <h2 className="section-header">Why Change to Software Development?</h2>
      <p>
        I'm an IT professional with over 10 years experience in the software
        development industry, mainly as a Scrum Master. I'm now making the move
        to full-time developer
      </p>

      <h2 className="section-header">How did I get here?</h2>
      <p>
        I'm an IT professional with over 10 years experience in the software
        development industry, mainly as a Scrum Master. I'm now making the move
        to full-time developer
      </p>

      <h2 className="section-header">Why Now, Why Not 10 Years Ago?</h2>
      <p>I took the opportunities life presented</p>
    </div>
  );
}

export default About;
