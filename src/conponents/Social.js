import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';

const SocialCard = () => (
  <div className="social-card">
    <a
      className="social-icon email-btn"
      href="https://twitter.com/PraisesPJMT"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        className="social-icon twitter"
        icon={faTwitter}
      />
    </a>
    <a
      className="social-icon email-btn"
      href="https://web.facebook.com/praises.musa"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        className="social-icon facebook"
        icon={faSquareFacebook}
      />
    </a>
    <a
      className="social-icon email-btn"
      href="https://www.instagram.com/praisespjmt/"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        className="social-icon instagram"
        icon={faSquareInstagram}
      />
    </a>
    <a
      className="social-icon email-btn"
      href="https://github.com/PraisesPJMT"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        className="social-icon github"
        icon={faSquareGithub}
      />
    </a>
  </div>
);

export default SocialCard;
