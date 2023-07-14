import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-option">
        <a href="#skills">
          <i class="fi-rr-poll-h option-icon"></i>About
        </a>
      </div>
      <div className="mobile-option">
        <a href="#projects">
          <i class="fi-rr-diagram-project option-icon"></i>Portfolio
        </a>
      </div>
      <div className="mobile-option">
        <a href="#work">
          <i class="fi-rr-user-robot option-icon"></i>Tech. Stack
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
          <i class="fi fi-rr-attribution-pencil option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Mobile;
