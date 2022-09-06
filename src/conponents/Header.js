import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <div className="header">
    <h1 className="title">
      Praises Musa Tula
    </h1>
    <h2 className="sub-title">
      Full-Stack Developer
    </h2>
    <a
      className="portfolio"
      href="https://praisespjmt.github.io/Praises-Tula-Portfolio/"
      target="_blank"
      rel="noreferrer"
    >
      https://praises-tula.com/
    </a>
    <div className="quick-link">
      <a
        className="btn email-btn"
        href="mailto:praisesmusa@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="email"
          icon={faEnvelope}
        />
        <span>Email</span>
      </a>
      <a
        className="btn linkedin-btn"
        href="https://www.linkedin.com/in/praises-tula-9233aa76"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="linkedin"
          icon={faLinkedin}
        />
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
);

export default Header;
