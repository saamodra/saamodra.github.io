/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import './About.scss';

function About({ componentRef }) {
  return (
    <section className="section-about" id="about" ref={componentRef}>
      <div className="section-title">
        <h2>
          <span className="text-primary">02. </span>
          About
        </h2>
      </div>

      <div className="section-about-content">
        <div className="section-image">
          <picture>
            <source media="(min-width:1024px)" type="image/webp" srcSet="images/profile-large.webp" />
            <source media="(min-width:1024px)" type="image/jpeg" srcSet="images/profile-large.jpg" />
            <source type="image/webp" srcSet="images/profile-small.webp" />
            <img src="images/profile-small.jpg" alt="Profile" loading="lazy" />
          </picture>
        </div>
        <div className="section-description">
          <p>
            Hello! My name is
            {' '}
            <span className="text-name">Samodra</span>
            . I am a software engineer with industry experience building websites and web applications.
            I specialize in frontend and have professional experience working with React.js, currently working with Ruby on Rails and React.js.
          </p>
          <p>
            My main focus these days is to give my best at my workplace. Currently, I&apos;m also starting my bachelor degree extension program at Bina Nusantara University.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
