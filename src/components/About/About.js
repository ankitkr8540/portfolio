import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import Toolstack from './Toolstack'
import AIToolstack from './AIToolstack'
import Certification from './Certification'
import food1 from '../../Assets/Food_1.jpeg'
import food2 from '../../Assets/Food_2.jpeg'
import food3 from '../../Assets/Food_3.jpeg'
import food4 from '../../Assets/Food_4.jpeg'
import nature1 from '../../Assets/Nature_1.jpeg'
import nature2 from '../../Assets/Nature_2.jpeg'

const photos = [
  { src: food1, alt: 'cooking', className: 'life-grid-img life-grid-tall' },
  { src: nature1, alt: 'hiking', className: 'life-grid-img' },
  { src: food2, alt: 'cooking', className: 'life-grid-img' },
  { src: nature2, alt: 'hiking', className: 'life-grid-img life-grid-wide' },
  { src: food3, alt: 'cooking', className: 'life-grid-img' },
  { src: food4, alt: 'cooking', className: 'life-grid-img' },
]

function About() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((prev) => prev !== null ? (prev + 1) % photos.length : null)
      if (e.key === 'ArrowLeft') setLightbox((prev) => prev !== null ? (prev - 1 + photos.length) % photos.length : null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: '80px', paddingBottom: '50px' }} className="about-img">
            <div className="life-grid">
              {photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo.src}
                  alt={photo.alt}
                  className={photo.className + ' life-grid-clickable'}
                  onClick={() => setLightbox(i)}
                />
              ))}
            </div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">AI Tools</strong> & Automation
        </h1>
        <AIToolstack />

        <h1 className="project-heading">
          <strong className="purple">Certifications</strong>
        </h1>
        <Certification />
      </Container>

      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&#x2715;</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}
          >&#8249;</button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}
          >&#8250;</button>
          <span className="lightbox-counter">{lightbox + 1} / {photos.length}</span>
        </div>
      )}
    </Container>
  )
}

export default About
