import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item, idx) => {
        return (
          <a key={idx} href={item.link} target="_blank">
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
