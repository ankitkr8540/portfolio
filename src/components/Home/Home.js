import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import homeVideo from '../../Assets/home_bg.mp4';
import myImage from '../../Assets/Ankit image.jpg';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        {/* <video autoPlay muted loop className='video' id="myVideo" src={homeVideo} type="video/mp4" /> */}
        {/* <source src={homeVideo} type="video/mp4" /> */}
        {/* </video> */}
        <Particle />
        <div className='home-content'>
          <Row>
            <Col md={2} className='moon-positioning'>
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

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImage}
                alt='home pic'
                className='img-fluid'
                style={{
                  maxHeight: '450px',
                  borderRadius: '50%',
                  mixBlendMode: 'multiply',
                }}
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
