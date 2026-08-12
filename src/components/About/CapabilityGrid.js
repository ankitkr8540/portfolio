import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

function CapabilityGrid({ items, compact = false }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Row className='capability-grid'>
        {items.map((item) => (
          <Col
            as='button'
            type='button'
            xs={10}
            md={5}
            lg={3}
            className={`tech-icons capability-card interactive-card ${
              compact ? 'tool-card' : ''
            }`}
            aria-label={`View ${item.title} details`}
            aria-haspopup='dialog'
            onClick={() => setSelected(item)}
            key={item.title}
          >
            <span className='card-cue' aria-hidden='true'>
              <FaChevronRight />
            </span>
            <span className='capability-icon' aria-hidden='true'>
              {item.icon}
            </span>
            <span className='tech-name'>{item.title}</span>
            {item.detail && <span className='tech-detail'>{item.detail}</span>}
          </Col>
        ))}
      </Row>

      <Modal
        show={Boolean(selected)}
        onHide={() => setSelected(null)}
        centered
        size='lg'
        contentClassName='capability-modal'
        aria-labelledby='capability-modal-title'
      >
        {selected && (
          <>
            <Modal.Header closeButton closeVariant='white'>
              <div className='modal-title-wrap'>
                <span className='modal-icon' aria-hidden='true'>
                  {selected.icon}
                </span>
                <div>
                  <div className='modal-eyebrow'>{selected.eyebrow}</div>
                  <Modal.Title id='capability-modal-title'>
                    {selected.title}
                  </Modal.Title>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body>
              <p className='modal-summary'>{selected.summary}</p>
              <Row>
                {selected.sections.map((section) => (
                  <Col md={6} className='modal-section' key={section.title}>
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((entry) => (
                        <li key={entry}>{entry}</li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
              {selected.evidence && (
                <div className='modal-evidence'>
                  <span>Applied in practice</span>
                  <p>{selected.evidence}</p>
                </div>
              )}
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}

export default CapabilityGrid;
