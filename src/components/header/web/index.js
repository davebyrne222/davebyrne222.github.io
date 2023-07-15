import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i className="fi-rr-diagram-project option-icon"></i>Portfolio
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi-rr-user-robot option-icon"></i>Tech. Stack
        </a>
      </div>
      <div className="web-option">
        <a href="#about">
          <i className="fi-rr-poll-h option-icon"></i>About
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="fi fi-rr-attribution-pencil option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
