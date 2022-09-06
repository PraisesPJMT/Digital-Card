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
          I try to keep up with security and best practices,
          and am always looking for new things to learn.
        </p>
      </div>
      <div className="interest">
        <h3 className="sub--title">
          Interest
        </h3>
        <p className="description">
          I&apos;m interested in both Front-End and Back-End spectrum.
          I am also interested in working on ambitious projects with
          positive people and goal oriented companies.
          <br />
          I derive great pleasure in watching Manchester United loose
          because I am a fan of Liverpool FC. I love swimming,
          watching TV series and travelling.
        </p>
      </div>
    </div>
    <div className="stack">
      <FontAwesomeIcon
        className="html stack-icon"
        icon={faHtml5}
      />
      <FontAwesomeIcon
        className="css stack-icon"
        icon={faCss3Alt}
      />
      <FontAwesomeIcon
        className="javascript stack-icon"
        icon={faSquareJs}
      />
      <FontAwesomeIcon
        className="python stack-icon"
        icon={faPython}
      />
      <FontAwesomeIcon
        className="ruby stack-icon"
        icon={faGem}
      />
      <FontAwesomeIcon
        className="c-program stack-icon"
        icon={faCuttlefish}
      />
      <FontAwesomeIcon
        className="react stack-icon"
        icon={faReact}
      />
      <FontAwesomeIcon
        className="git stack-icon"
        icon={faGitAlt}
      />
    </div>
  </div>
);

export default InfoCard;
