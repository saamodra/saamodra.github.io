import React, { useState } from 'react';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import experiences from '../../data/experiences';
import { monthsDiffText, dateFormatter } from '../../lib/dateCalculator';
import './Experience.scss';

function Experience({ componentRef }) {
  const [tab, setTab] = useState(0);
  const tabChange = (tabParam) => {
    setTab(tabParam);
  }

  return (
    <section className="section-experience" ref={componentRef}>
      <div className="section-title">
        <h2>
          <span className="text-primary">04. </span>
          Experience
        </h2>
      </div>

      <div className="section-content-experience">
        <aside className="experience-navigator">
          {experiences.map((experience, index) => (
            <button
              key={experience.id}
              type="button"
              className={`experience-tab ${tab === index ? 'active' : ''}`}
              onClick={() => tabChange(index)}
            >
              {experience.menu}

            </button>
          ))}
        </aside>

        <div className="overflow-hidden">
          <div className="experience-content-container" style={{ transform: `translateX(-${tab * 100}%)` }}>
            {experiences.map((experience) => {
              const { id, role, company, startDate, endDate, description } = experience;

              return (
                <div className="experience-content" key={id}>
                  <div className="experience-title">
                    <h3>
                      {role}
                      {' '}
                      <span>
                        @
                        {' '}
                        {company}
                      </span>
                    </h3>
                    <p>{dateFormatter(startDate, endDate)} ({monthsDiffText(startDate, endDate)})</p>
                  </div>
                  <div className="section-description">
                    <ul className="section-description-list">
                      {description.map((desc) => (
                        <li key={desc}>
                          <FontAwesomeIcon icon={faCaretRight} />
                          <p>{parse(desc)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
