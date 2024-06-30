import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiIonic } from 'react-icons/di'
import {
  SiAngularjs,
  SiChartdotjs,
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
        <div className="tech-name">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
        <div className="tech-name">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Numpy">
        <SiNumpy />
        <div className="tech-name">Numpy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
        <div className="tech-name">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Angular js">
        <SiAngularjs />
        <div className="tech-name">Angular js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React js">
        <DiReact />
        <div className="tech-name">React js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ionic Framework">
        <DiIonic />
        <div className="tech-name">Ionic Framework</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next js">
        <SiChartdotjs />
        <div className="tech-name">Chart js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <FaCss3 />
        <div className="tech-name">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
        <div className="tech-name">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node js">
        <DiNodejs />
        <div className="tech-name">Node js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
        <div className="tech-name">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
        <div className="tech-name">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="streamlit">
        <SiStreamlit />
        <div className="tech-name">streamlit</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Snowflake">
        <SiSnowflake />
        <div className="tech-name">Snowflake</div>
      </Col>
    </Row>
  )
}

export default Techstack
