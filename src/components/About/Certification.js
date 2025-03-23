import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AWS_DEV from '../../Assets/AWS-Dev.png';
import AWS_MLE from '../../Assets/aws-MLE-associate.png';

function Certification() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <a
          href='https://cp.certmetrics.com/amazon/en/public/verify/credential/2ad757ecafda46949d3df7d1d1c920db'
          title='aws_dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={AWS_DEV}
            alt='AWS Developer Certification'
            className='img-fluid'
          />
        </a>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <a
          href='https://cp.certmetrics.com/amazon/en/public/verify/credential/a780eb1a5232418bb6a9d3aa70464579'
          title='aws_dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={AWS_MLE}
            alt='AWS Developer Certification'
            className='img-fluid'
          />
        </a>
      </Col>
    </Row>
  );
}

export default Certification;
