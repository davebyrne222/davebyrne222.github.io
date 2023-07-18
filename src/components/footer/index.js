import React from "react";
import Separator from "../common/separator";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <Separator sx={{ height: "100%" }} />
      <>
        <p>
          Originally made by
          <a
            style={{ marginLeft: 2 }}
            href="https://github.com/ThantZinPhyo-Slark/React-Portfolio"
          >
            ThantZinPhyo
          </a>
          , Modified by
          <a
            style={{ marginLeft: 2 }}
            href="https://github.com/davebyrne222/davebyrne222.github.io"
          >
            DaveByrne222
          </a>
        </p>
      </>
    </div>
  );
}

export default Footer;
