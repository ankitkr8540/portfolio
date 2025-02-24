import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AWS_DEV from '../../Assets/AWS-Dev.png'

function Certification() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.credly.com/earner/earned/badge/577fa55b-11d4-4c3c-8472-44274b047421"
          title="aws_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AWS_DEV} alt="AWS Developer Certification" className="img-fluid" />
        </a>
      </Col>
    </Row>
  )
}

export default Certification
