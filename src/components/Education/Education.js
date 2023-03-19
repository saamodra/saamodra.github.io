import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import educations from '../../data/educations';
import './Education.scss';

function Education({ componentRef }) {
  const [tab, setTab] = useState(0);

  function tabChange(tabParam) {
    setTab(tabParam);
  }

  return (
    <section className="section-education" ref={componentRef}>
      <div className="section-title">
        <h2>
          <span className="text-primary">03. </span>
          Education
        </h2>
      </div>

      <div className="section-content-education">
        <aside className="education-navigator">
          {educations.map((data, index) => (
            <button
              key={`Button-${data.level}`}
              type="button"
              className={`education-tab ${tab === index ? 'active' : ''}`}
              onClick={() => tabChange(index)}
            >
              {data.level}
            </button>
          ))}
        </aside>

        <div className="overflow-hidden">
          <div className="education-content-container" style={{ transform: `translateX(-${tab * 100}%)` }}>
            {educations.map((data) => (
              <div className="education-content" key={`Education-${data.level}`}>
                <div className="section-image">
                  <picture>
                    <source media="(min-width:1200px)" type="image/png" srcSet={`${data.image}/${data.image}-large.png`} />
                    <source media="(min-width:768px)" type="image/png" srcSet={`${data.image}/${data.image}-medium.png`} />
                    <img
                      src={`${data.image}/${data.image}-small.png`}
                      alt={data.school}
                      height="100"
                      loading="lazy"
                    />
                  </picture>
                  <h3>{data.school}</h3>
                  <p>{data.major}</p>
                  <p>{data.duration}</p>
                </div>
                <div className="section-description">
                  <ul className="section-description-list">
                    {data.description.map((description) => (
                      <li key={description}>
                        <FontAwesomeIcon icon={faCaretRight} />
                        <p>{description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
