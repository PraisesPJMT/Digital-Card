import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import {
  faCuttlefish, faHtml5, faCss3Alt, faSquareJs, faPython, faReact, faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

const InfoCard = () => (
  <div className="information">
    <div className="infoCard">
      <div className="about">
        <h3 className="sub--title">
          About
        </h3>
        <p className="description">
          I&apos;m a Full-Stack Software Developer located in Nigeria.
          I have great passion for UI creation, effect,
          animation and dynamic user experiences.
          <br />
          <br />
          I try to keep up with security and best practices,
          and am always looking for new things to learn.
        </p>
      </div>
      <div className="interest">
        <h3 className="sub--title">
          Interest
        </h3>
        <p className="description">
          I&apos;m interested in working on ambitious projects with
          positive people and goal oriented companies.
          <br />
          <br />
          I am a Liverpool FC fan. I love swimming,
          watching TV series and travelling.
        </p>
      </div>
    </div>
    <div className="stack">
      <h3 className="sub--title stack-title">
        Stack
      </h3>
      <div className="stack-container">
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="html stack-icon"
            icon={faHtml5}
          />
          <span className="stack-name">
            HTML5
          </span>
        </div>
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="css stack-icon"
            icon={faCss3Alt}
          />
          <span className="stack-name">
            CSS3
          </span>
        </div>
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="javascript stack-icon"
            icon={faSquareJs}
          />
          <span className="stack-name">
            JavaScript
          </span>
        </div>
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="python stack-icon"
            icon={faPython}
          />
          <span className="stack-name">
            Python
          </span>
        </div>
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="ruby stack-icon"
            icon={faGem}
          />
          <span className="stack-name">
            Ruby
          </span>
        </div>
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="c-program stack-icon"
            icon={faCuttlefish}
          />
          <span className="stack-name">
            C-Program
          </span>
        </div>
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="react stack-icon"
            icon={faReact}
          />
          <span className="stack-name">
            React
          </span>
        </div>
        <div className="stack-wrap">
          <FontAwesomeIcon
            className="git stack-icon"
            icon={faGitAlt}
          />
          <span className="stack-name">
            Git
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default InfoCard;
