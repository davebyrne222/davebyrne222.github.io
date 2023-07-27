import React from "react";
import Separator from "../../common/separator";
import { AboutData } from "../../data/about";
import "./about.css";
function About() {
  return (
    <div className="section about">
      <Separator />
      <h1 className="section-title">About</h1>
      <p>
        I'm Dave, from Dublin, Ireland. I've been working in the area of
        software development for over 10 years and programming on the side for
        longer than that. After many years of longing to work in software
        development, I'm making the change.
      </p>

      <h2 className="section-header">Why Change to Software Development?</h2>
      <span>
        Three reasons:
        <ul>
          <li>
            I have always enjoyed 'coding' - As an undergrad, I studied C and
            C++ and caught the 'bug'. I then moved on to python and continued to
            use it wherever I could, be it work or personal projects. As a scrum
            master, I was always interested in what the developers were doing,
            often wanting to understand more of what they were working on and at
            times, contributing
          </li>
          <li>
            I miss working on technical challenges - as a physicist, I enjoyed
            working on difficult problems and creating solutions (often using
            python)
          </li>
          <li>
            The time is right - I have just been made redundant (layed-off) and
            coincidentally had recently started studying computer science in
            Dublin Business School as a hobby, so I felt it was the right time
            to make the change
          </li>
        </ul>
      </span>

      <h2 className="section-header">
        How are physics, Scrum Mastering, and Software Development related?
      </h2>
      <p>
        Physicists regularly use programming as a tool to assist in their
        research and work, so-much-so that my first coding experience was as an
        undergraduate student first studying Matlab, and then C & C++ for
        numerical analysis. As a masters student, I then used python for data
        analysis and modelling.
      </p>
      <p>
        As a scrum master, I spent 10 years working very closely with a number
        of development teams across a broad range of projects including
        industrial automation & IoT, speech technology for education, and most
        recently in the travel industry connecting travel agents, airlines,
        hotels, etc. During this time, I became intimately involved in the
        development lifecycle, from requirements generation to design, from
        prototyping to full CI/CD pipelined implementations, from dark-releases
        to global customer releases (and the inevitable outages).
      </p>
      <p>
        And during that time, I contributed to some software projects directly
        and built some proprietary applications myself.
      </p>

      {/* <h2 className="section-header">"So your a seasoned developer"</h2>
      <p>
        Not at all. I can read code and understand complex implementations but
        to date, I have only developed 'simple' applications. Additionally, as I
        am largely self-taught, I suspect I have some learning to do when it
        comes to best-practices. That being said, I am not starting from scratch
        even though it may seem that way on paper.
      </p> */}

      <h2 className="section-header">How did I get here?</h2>
      <p>
        After finishing college, I began working in the pharmaceutical industry
        as a physicist. The company I worked for was small and so as somebody
        who had some coding experience, I began to work with the developers,
        mainly providing some technical expertise for hardware control software
        they were developing. Overtime, as the company evolved, I became the
        project manager for the development teams, managing all in-house
        development projects (essentially acting as the PM, PO, Designer, Tester
        etc.).
      </p>
      <p>
        While there, I again used python to conduct data analysis as my role as
        a technical expert but I also later personally developed two
        customer-facing applications. The first was an automation system
        developed in python that could be used to control pharmaceutical
        processes via python scripts and websockets. The second was a desktop
        application written in PyQT and R that could analyse chemometric data
        and build predictive models using partial-least squares regression
        modelling.
      </p>
      <p>
        Again, being in a small company, everybody wears many hats and I decided
        to focus on being a scrum master, moving on to other roles in other
        companies. I loved being a scrum master for a long time, but I can't
        help but miss the technical side of things.
      </p>
    </div>
  );
}

export default About;