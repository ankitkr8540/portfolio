import React from 'react'
import { Container } from 'react-bootstrap'
import Particle from '../Particle'

function blog() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Blogs coming soon ! </strong>
        </h1>
      </Container>
    </Container>
  )
}

export default blog
