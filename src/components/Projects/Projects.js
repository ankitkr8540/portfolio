import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Basta from "../../Assets/Basta_preview.png"
import clg from "../../Assets/cover-letter-generator.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Basta}
              isBlog={false}
              title="Basta"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ankitkr8540/EcommerceShoppingApp"
              demoLink="https://basta-bag-26da25a17a75.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clg}
              isBlog={false}
              title="Better-cover-letter-Generator"
              description="It generates a better cover letter based on the provided job description. It uses NLP to analyze the job description and generate a cover letter that matches the job description. It is built using Streamlit and Snowflakes."
              ghLink="https://github.com/lingyundai/snowflake-hackathon"
              demoLink="https://better-coverletter-generator.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
