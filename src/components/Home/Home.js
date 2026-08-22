import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import myImage from '../../Assets/Ankit image.jpg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home() {
  return (
    <section>
      <Particle />
      <Container fluid className='home-section z-1' id='home'>
        <div className='home-content'>
          <Row>
            <Col md={1}></Col>
            <Col md={1}>
              <div className='moon'></div>
            </Col>
            <Col md={5} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> ANKIT KUMAR</strong>
              </h1>

              <p className='home-location'>📍 Seattle, WA</p>

              <p className='home-tagline'>
                I build ML systems that actually ship. From the first messy
                requirement to production monitoring, I own the whole thing.
              </p>

              <div className='aws-certs'>
                <a
                  href='https://cp.certmetrics.com/amazon/en/public/verify/credential/a780eb1a5232418bb6a9d3aa70464579'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='aws-cert-badge'
                >
                  <span className='aws-cert-icon'>&#9733;</span>
                  AWS ML Engineer Associate
                </a>
                <a
                  href='https://cp.certmetrics.com/amazon/en/public/verify/credential/2ad757ecafda46949d3df7d1d1c920db'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='aws-cert-badge'
                >
                  <span className='aws-cert-icon'>&#9733;</span>
                  AWS Developer Associate
                </a>
              </div>

              <div className='home-typewriter'>
                <Type />
              </div>
            </Col>

            <Col md={3} style={{ paddingBottom: 20 }}>
              <Row className='justify-content-center mb-4'>
                <img
                  src={myImage}
                  alt='home pic'
                  className='img-fluid'
                  style={{
                    maxHeight: '450px',
                    borderRadius: '50%',
                    mixBlendMode: 'multiply',
                    width: 'fit-content',
                  }}
                />
              </Row>
              <Row className='justify-content-center'>
                <Button
                  variant='primary'
                  type='submit'
                  className='submit-btn mt-lg-4'
                  style={{
                    backgroundColor: '#4B0082',
                    fontSize: '20px',
                    border: 'none',
                    padding: '12px 30px',
                    width: '50%',
                    justifySelf: 'center',
                  }}
                  onClick={() => (window.location.href = '#/contact')}
                >
                  Let's Connect
                </Button>
              </Row>
              <Row className='justify-content-center'>
                <Col md={12} className='home-about-social'>
                  <ul className='home-about-social-links'>
                    <li className='social-icons'>
                      <a
                        href='https://www.linkedin.com/in/027kumarankit/'
                        target='_blank'
                        rel='noreferrer'
                        className='icon-colour  home-social-icons'
                        text='LinkedIn'
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className='social-icons'>
                      <a
                        href='https://github.com/ankitkr8540'
                        target='_blank'
                        rel='noreferrer'
                        className='icon-colour  home-social-icons'
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
