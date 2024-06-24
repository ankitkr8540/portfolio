import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiVisualstudiocode, SiPostman, SiSlack, SiHeroku, SiMacos } from 'react-icons/si'
import { VscNotebook } from 'react-icons/vsc'
import { FaGithub } from 'react-icons/fa'

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons" title="macOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="visual Studio">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python Notebook">
        <VscNotebook />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Heroku">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <FaGithub />
      </Col>
    </Row>
  )
}

export default Toolstack
