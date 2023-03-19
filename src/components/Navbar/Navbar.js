/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as fasFaBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes as fasTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ refs }) {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleNavClick = () => setShowNav(!showNav);
  const closeNav = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth' });
    setShowNav(false);
  };

  const scrollToRef = (ref) => {
    ref.scrollIntoView({ behavior: 'smooth' });
  };

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY;
    const isScrolled = windowPosition > 50;

    setScrolled(isScrolled);
  });

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'box-shadow' : ''}`}>
        <button type="button" onClick={() => scrollToRef(refs.current[0])} className="nav-link" aria-label="Navbar Logo">
          <picture>
            <source media="(min-width:1200px)" type="image/png" srcSet="wm-red-2/wm-large.png" />
            <source media="(min-width:768px)" type="image/png" srcSet="wm-red-2/wm-medium.png" />
            <img
              src="wm-red-2/wm-small.png"
              alt="Navbar Logo"
              height="40"
              width="40"
              className="nav-logo"
              loading="lazy"
            />
          </picture>
          {/* <img src="./wm-red-2-min.png" alt="Navbar Logo" height="40" width="40" className="nav-logo" loading="lazy" /> */}
        </button>

        <ul className="nav-items">
          <li><button type="button" onClick={() => scrollToRef(refs.current[1])}>About</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[2])}>Education</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[3])}>Experience</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[4])}>Projects</button></li>
          <li><button type="button" onClick={() => scrollToRef(refs.current[5])}>Contact</button></li>
          <li>
            <label className="switch desktop" htmlFor="switch" aria-label="Toggle Mode">
              <input type="checkbox" id="switch" onChange={changeMode} checked={!darkMode} />
              <span className="slider round" />
            </label>
          </li>
        </ul>

        <div className="menu-icon">
          <button type="button" onClick={handleNavClick} aria-label="Mobile Menu Toggle">
            <FontAwesomeIcon icon={showNav ? fasTimes : fasFaBars} />
          </button>
        </div>

        <aside aria-hidden={!showNav} tabIndex="-1" className={`aside-nav ${showNav ? 'active' : ''}`}>
          <ul>
            <li><button type="button" onClick={() => closeNav(refs.current[0])}>Home</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[1])}>About</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[2])}>Education</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[3])}>Experience</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[4])}>Projects</button></li>
            <li><button type="button" onClick={() => closeNav(refs.current[5])}>Contact Me</button></li>
            <li>
              <label className="switch" htmlFor="switchAside" aria-label="Toggle Mode">
                <input type="checkbox" id="switchAside" onChange={changeMode} checked={!darkMode} />
                <span className="slider round" />
              </label>
            </li>
          </ul>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
