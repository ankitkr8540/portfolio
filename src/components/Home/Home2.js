import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/Ankit_cat.png'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm Ankit, a passionate programmer with a love for creating websites incorporating Machine Learning
              concepts and working on innovative projects.
              <br />
              <br />
              My journey began with full-stack development at Accenture, and I've since expanded my expertise to include
              Machine Learning and Data Mining.
              <br />
              <br />
              My focus is on delivering clean and efficient solutions, and I thrive on simplicity and effectiveness in
              my work.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple"> projects incorporting Machine Learning with the Web Technologies </b> and also
                whenever possible I try to keep myself updated with the Web Technologies and also try to explore
                different hackathons related to <b className="purple">Machine Learning and AI</b>
              </i>
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ankitkr8540"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Ankitku78096055"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/027kumarankit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  text="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/ankitkr854_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
