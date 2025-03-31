import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Ankit_cat.png';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Testimonials from './Testimonials';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              Hello! I'm Ankit, a{' '}
              <b className='purple'>machine learning engineer</b> who translates
              complex data patterns into actionable intelligence.
              <br />
              <br />
              My professional journey began at Accenture where I engineered{' '}
              <b className='purple'>
                hybrid financial forecasting systems
              </b>{' '}
              that combined <b className='purple'>LSTM</b>,{' '}
              <b className='purple'>XGBoost</b>, and{' '}
              <b className='purple'>SARIMA models</b> to deliver{' '}
              <b className='purple'>explainable predictions</b> for
              institutional clients.
              <br />
              <br />
              Currently completing my Master's in Computer Science at GMU with a{' '}
              <b className='purple'>3.93 GPA</b>, I've focused on developing
              novel approaches to <b className='purple'>few-shot learning</b>{' '}
              and <b className='purple'>cross-lingual NLP</b>.
              <br />
              <br />
              I'm certified as an{' '}
              <b className='purple'>AWS Developer Associate</b> and{' '}
              <b className='purple'>AWS Machine Learning Engineer Associate</b>,
              validating my expertise in cloud-based ML implementations.
              <br />
              <br />I find satisfaction in architecting{' '}
              <b className='purple'>end-to-end ML systems</b>—from my{' '}
              <b className='purple'>AWS-powered RAG implementation</b> in
              UniConnect to optimizing{' '}
              <b className='purple'>distributed recommendation engines</b> with{' '}
              <b className='purple'>PySpark</b>.
              <br />
              <br />
              When I'm not fine-tuning models or engineering{' '}
              <b className='purple'>data pipelines</b>, you'll find me
              organizing workshops for GMU's{' '}
              <b className='purple'>Google Developer Group</b>, helping build
              our campus <b className='purple'>AI community</b> from the ground
              up.
              <br />
              <br />
              Let's connect and explore how machine learning can solve
              meaningful problems!
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1 style={{ fontSize: '2em', paddingTop: '70px', color: 'white' }}>
              MY <span className='purple'>REPUTATION</span> AT WORK
            </h1>
            <Testimonials />
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
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
      </Container>
    </Container>
  );
}
export default Home2;
