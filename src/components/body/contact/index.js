import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="section contact">
      <Separator />
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            Want to get in touch? Contact me at any of the following platforms
          </p>
          <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;
