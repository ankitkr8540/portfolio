import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

function ExperienceModal({ show, onHide, experience }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (show) {
      setActiveIdx(0);
    }
  }, [show]);

  if (!experience) return null;

  const section = experience.sections[activeIdx];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='xl'
      centered
      dialogClassName='exp-modal'
    >
      <Modal.Header closeButton className='exp-modal-header'>
        <Modal.Title className='exp-modal-title'>
          <span className='exp-modal-kicker'>{experience.kicker}</span>
          {experience.title}
          <span className='exp-modal-period'>{experience.period}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='exp-modal-body'>
          {/* Left sidebar nav */}
          <nav className='exp-modal-nav'>
            {experience.sections.map((sec, i) => (
              <button
                key={i}
                className={`exp-nav-btn${activeIdx === i ? ' active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          {/* Right content area */}
          <div className='exp-modal-content'>
            {section.heading && (
              <h3 className='exp-content-heading'>{section.heading}</h3>
            )}

            {section.paragraphs &&
              section.paragraphs.map((para, i) => (
                <p key={i} className='exp-content-para'>
                  {para}
                </p>
              ))}

            {section.subsections &&
              section.subsections.map((sub, i) => (
                <div key={i} className='exp-subsection'>
                  <div className='exp-subsection-title'>{sub.title}</div>
                  <ul className='exp-subsection-list'>
                    {sub.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

            {section.metrics && (
              <div className='exp-metrics-grid'>
                {section.metrics.map((m, i) => (
                  <div key={i} className='exp-metric-card'>
                    <div className='exp-metric-value'>{m.value}</div>
                    <div className='exp-metric-label'>{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {section.tags && (
              <div className='exp-tech-tags'>
                {section.tags.map((tag, i) => (
                  <span key={i} className='exp-tag'>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ExperienceModal;
