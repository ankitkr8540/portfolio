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

              <div style={{ padding: 50, textAlign: 'left' }}>
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
                    width: '30%',
                    justifySelf: 'center',
                  }}
                  onClick={() => (window.location.href = '#/contact')}
                >
                  Contact Me
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
