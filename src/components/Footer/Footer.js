/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-contact-title">
        <p>
          Made with
          {' '}
          <FontAwesomeIcon icon={faHeart} className="text-primary" />
          {' '}
          by Samodra
        </p>
      </div>
    </footer>
  );
}

export default Footer;
