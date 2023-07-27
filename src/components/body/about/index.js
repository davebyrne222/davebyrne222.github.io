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
            I have always enjoyed software development - as an undergrad, I
            studied C and C++ and caught the 'bug'. I then moved to python and
            continued to use it wherever I could, be it work or personal
            projects. As a scrum master, I was always interested in what the
            developers were doing, often wanting to understand more of what they
            were working on and at times, contributing
          </li>
          <li>
            I miss working on technical challenges - as a physicist, I enjoyed
            working on difficult problems and creating solutions (often using
            python)
          </li>
          <li>
            The time is right - following suit with the recent widespread
            redundancies / layoffs in the tech. industry in Ireland, my role has
            been made redundant with my most recent employer. And
            coincidentally, I had recently started studying computer science in
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

      <h2 className="section-header">How did I get here?</h2>
      <p>
        After finishing college, I began working in the pharmaceutical industry
        as a Technical Development Specialist designing and building industrial
        sensors that could monitor the quality of pharmaceutical product being
        produced using just light. The company I worked for was small and so as
        somebody who had some coding experience, I began to work with the
        developers, mainly providing some technical expertise for the hardware
        control software they were developing for the sensors I was responsible
        for. Overtime, as the company evolved, I became the project manager for
        the development teams, managing all in-house development projects
        (essentially acting as the PM, PO, Designer, Tester etc.).
      </p>
      <p>
        While there, I again used python to conduct data analysis and I also
        later personally developed two customer-facing applications. The first
        was an automation system developed in python that could be used to
        control pharmaceutical processes via python scripts and websockets. The
        second was a desktop application written in PyQT and R that could
        analyse chemometric data and build predictive models using Partial-Least
        Squares Regression modelling. These predictive models could be used to
        monitor the product quality of an active pharmaceutical process which in
        turn would be fed back into the automation system I developed so that
        the process could be directed to produce the highest quality product.
      </p>
      <p>
        As time progressed and the company evolved to a scale where it became
        impossible to maintain multiple concurrent roles, I decided to focus on
        being a scrum master, eventually moving on to other companies.
      </p>
      <p>
        Having enjoyed being a scrum master for a long time, I miss working
        hands-on developing software and so have decided to re-focus my career.
      </p>
    </div>
  );
}

export default About;
