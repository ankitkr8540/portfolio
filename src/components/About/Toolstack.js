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
        <div className="tech-name">macOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="visual Studio">
        <SiVisualstudiocode />
        <div className="tech-name">Visual Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python Notebook">
        <VscNotebook />
        <div className="tech-name">Python Notebook</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
        <div className="tech-name">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Heroku">
        <SiHeroku />
        <div className="tech-name">Heroku</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <FaGithub />
        <div className="tech-name">Github</div>
      </Col>
    </Row>
  )
}

export default Toolstack
