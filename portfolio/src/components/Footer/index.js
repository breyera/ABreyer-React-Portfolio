import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

function Footer() {
  return (
    <footer className="footer fixed-bottom mt-auto py-2 " id="footer">
      <div className="container">
        <a href="mailto:alicia_breyer@yahoo.com">
          <span>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="link"
              data-tip
              data-for="emailTip"
            />
            <ReactTooltip id="emailTip" place="top" effect="solid">
              Email
            </ReactTooltip>
          </span>
        </a>
        <a href="https://github.com/breyera" target="_blank" rel="noreferrer">
          <span>
            <FontAwesomeIcon
              icon={faGithub}
              className="link"
              data-tip
              data-for="gitTip"
            />
            <ReactTooltip id="gitTip" place="top" effect="solid">
              Github
            </ReactTooltip>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/alicia-breyer/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="link"
              data-tip
              data-for="linkTip"
            />
            <ReactTooltip id="linkTip" place="top" effect="solid">
              LinkedIn
            </ReactTooltip>
          </span>
        </a>
        <a
          href="https://drive.google.com/file/d/1jL-Ot2O7q8pOfBa5QcepwuLyj2Xd3iaA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FontAwesomeIcon
              icon={faFile}
              className="link"
              data-tip
              data-for="resTip"
            />
            <ReactTooltip id="resTip" place="top" effect="solid">
              Resume
            </ReactTooltip>
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
