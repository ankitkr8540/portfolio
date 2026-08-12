import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Ankit_cat.png';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
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
              I BUILD <span className='purple'> AI SYSTEMS </span> THAT SHIP
            </h1>
            <p className='home-about-body'>
              I'm a <b className='purple'>machine learning and GenAI engineer</b>{' '}
              with 4+ years of experience taking systems from ambiguous
              requirements through data, modeling, evaluation, deployment, and
              validation. My foundation spans{' '}
              <b className='purple'>probability and statistics</b>, classical
              machine learning, deep learning, time-series forecasting, NLP,
              retrieval, and agentic AI.
              <br />
              <br />
              At <b className='purple'>Milwaukee Tool</b>, I owned the end-to-end
              development and validation of a{' '}
              <b className='purple'>
                physics-constrained thermal prediction system
              </b>
              , working across product, reliability, and firmware teams to move
              the model from research through embedded implementation. The
              system achieved a 2.2°C maximum RMSE across 30 held-out profiles,
              reduced validation from 30 days to 3 days, and supported $100K in
              projected hardware savings.
              <br />
              <br />
              I also founded <b className='purple'>Mitra</b>, an AI-powered
              university decision-support platform. I built its AWS ingestion
              and ETL pipeline, bounded <b className='purple'>agentic RAG</b>{' '}
              workflow, hybrid retrieval, reranking, evidence-gated generation,
              evaluation, deployment, and observability for more than 200 alpha
              users.
              <br />
              <br />
              Earlier at <b className='purple'>Accenture</b>, I developed
              financial KPI forecasting and analytics products using PySpark,
              SQL, LSTM, XGBoost, SARIMA, and FinBERT-derived market signals.
              That work combined statistical forecasting, structured financial
              data, and NLP signals in analyst-facing products.
              <br />
              <br />I hold an <b className='purple'>M.S. in Computer Science</b>{' '}
              from George Mason University with a <b className='purple'>machine learning</b>
              concentration and a <b className='purple'>3.90/4.0 GPA</b>. I am also <b className='purple'>AWS certified </b> in
              machine learning and cloud development.
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
