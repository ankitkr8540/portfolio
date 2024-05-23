import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeVideo from "../../Assets/home_bg.mp4";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <video autoPlay muted loop className='video' id="myVideo" src={homeVideo} type="video/mp4" />
        {/* <source src={homeVideo} type="video/mp4" /> */}
        {/* </video> */}
        <Particle />
        <div className="home-content">
          <Row>
            <Col md={2} className="moon-positioning">
              <div className="moon"></div>
            </Col>
            <Col md={10} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANKIT KUMAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </div>
        <div className='cat-box'>
          <Row>
            <Col md={12} className="d-flex move" style={{ width: 'fit-content' }}>
              <img src="https://media.tenor.com/p7RN1ieWP48AAAAi/thumbs-up-cat.gif" style={{ height: '200px', transform: 'scaleX(-1)' }} alt="Thumbs Up Cat Sticker - Thumbs Up Cat Stickers" />
            </Col>
          </Row>
        </div>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
