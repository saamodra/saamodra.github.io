/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import gaEventsTracker from '../../analytics/gaEventsTracker';
import initialData from '../../data/projects';
import './Project.scss';

function Project({ componentRef }) {
  const [projects, setProjects] = useState(initialData);

  return (
    <section className="section-project" ref={componentRef}>
      <div className="section-title">
        <h2>
          <span className="text-primary">05. </span>
          Projects
        </h2>
      </div>

      <div className="section-content">
        {projects.map((data) => (
          <div className="section-project-item" key={data.id}>
            <div className="project-content">
              <div>
                <p className="project-overline">{data.overline}</p>
                <p className="project-title">{data.title}</p>
                <p className="project-description">{data.description}</p>

                <div className="project-links">
                  <ul className="project-tech">
                    {data.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  {data.links.github && (
                    <a
                      href={data.links.github}
                      onClick={() => gaEventsTracker('External Links', 'Github', data.links.github)}
                      aria-label={`Github ${data.title}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-image">
              <picture>
                <source media="(min-width:1024px)" type="image/webp" srcSet={`./projects/${data.image}-large.webp`} />
                <source media="(min-width:1024px)" type="image/jpeg" srcSet={`./projects/${data.image}-large.jpg`} />
                <source type="image/webp" srcSet={`./projects/${data.image}-small.webp`} />
                <img src={`./projects/${data.image}-small.jpg`} alt={data.title} loading="lazy" />
              </picture>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Project;
