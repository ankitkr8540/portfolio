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

              <p className='home-tagline'>
                I own ML systems from ambiguous requirements to deployment—
                combining statistical reasoning, core machine learning,
                retrieval, agentic workflows, and production engineering.
              </p>

              <div className='hero-proof' aria-label='Selected delivery outcomes'>
                <div className='hero-proof-item'>
                  <strong>4+ years</strong>
                  <span>ML delivery</span>
                </div>
                {/* <div className='hero-proof-item'>
                  <strong>42% → 87%</strong>
                  <span>retrieval relevance</span>
                </div>
                <div className='hero-proof-item'>
                  <strong>30 → 3 days</strong>
                  <span>validation cycle</span>
                </div> */}
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
