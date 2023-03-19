/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import gaEventsTracker from '../../analytics/gaEventsTracker';
import './Hero.scss';

function Hero({ componentRef, refs }) {
  return (
    <div className="hero" ref={componentRef}>
      <div className="hero-container">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Samodra.</h1>
        <h2 className="hero-subname">Software Engineer</h2>
        <p className="hero-summary">I&apos;m interested in both frontend and backend stuff. Learn every day about how to use technology in the best way.</p>
        <button type="button" onClick={() => { refs.current[5].scrollIntoView({ behavior: 'smooth' }); }} className="btn btn-primary btn-outline">Get In Touch</button>
      </div>

      <aside className="hero-left">
        <ul className="hero-contact">
          <li>
            <a
              href="https://github.com/saamodra"
              onClick={() => gaEventsTracker('External Links', 'Github', 'https://github.com/saamodra')}
              aria-label="Samodra's Github"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saamodra"
              onClick={() => gaEventsTracker('External Links', 'Linkedin', 'https://www.linkedin.com/in/saamodra')}
              aria-label="Samodra's Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/samodra.me/"
              onClick={() => gaEventsTracker('External Links', 'Instagram', 'https://instagram.com/samodra.me')}
              aria-label="Samodra's Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </aside>

      <aside className="hero-right">
        <a
          href="mailto:samodra.me@gmail.com"
          onClick={() => gaEventsTracker('Mail', 'Email', 'mailto:samodra.me@gmail.com')}
          target="_blank"
          rel="noreferrer"
        >
          samodra.me@gmail.com
        </a>
      </aside>
    </div>
  );
}

export default Hero;
