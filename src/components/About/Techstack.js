import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiIonic } from 'react-icons/di'
import {
  SiAngularjs,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiSnowflake,
  SiStreamlit,
} from 'react-icons/si'
import { FaCss3 } from 'react-icons/fa'

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Numpy">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Angular js">
        <SiAngularjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ionic Framework">
        <DiIonic />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="streamlit">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Snowflake">
        <SiSnowflake />
      </Col>
    </Row>
  )
}

export default Techstack
