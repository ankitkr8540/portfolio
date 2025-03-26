import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Basta from '../../Assets/Basta_preview.png';
import clg from '../../Assets/cover-letter-generator.jpeg';
import leetcode from '../../Assets/leetcode-previewed.jpeg';
import vscode from '../../Assets/vscode.jpeg';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={vscode}
              isBlog={false}
              title='Few-Shot Learning: Reproducibility Study'
              description='Conducted comprehensive research on Pattern-Exploiting Training (PET) for few-shot text classification, implementing and validating the framework using RoBERTa. Enhanced the original implementation with novel pattern contextualization and domain-specific optimizations, while pioneering a thorough analysis of model robustness under various perturbation types. Research demonstrates improved training efficiency and provides insights into model behavior in low-resource scenarios.'
              ghLink='https://github.com/StringAna/PET_Reproducibility_Study'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={vscode}
              isBlog={false}
              title='PyLinguist: Intelligent Code Translation'
              description='Developed an innovative code translation framework that leverages multiple large language models and custom keyword mapping techniques. Built a sophisticated pipeline combining various AI models (GPT-4, Claude, DeepseekAI) with the Google Translate API for robust Python code translation. Implemented comprehensive evaluation mechanisms to ensure preservation of code functionality and semantic meaning across languages.'
              ghLink='https://github.com/ankitkr8540/pylinguist-paper'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={Basta}
              isBlog={false}
              title='Basta E-commerce Shopping App'
              description='I developed Basta Bag, a full-featured e-commerce platform, using the MERN stack. The frontend is built with React and Redux for state management, while the backend uses Node.js with Express to create a RESTful API. MongoDB stores all product, user, and order data. The application includes user authentication with JWT, product browsing with search functionality, shopping cart features, and a secure checkout process. For admin users, I implemented a dashboard to manage products and orders. The entire application is deployed on Heroku, making it accessible online with a responsive design for all devices.'
              ghLink='https://github.com/ankitkr8540/EcommerceShoppingApp'
              demoLink='https://basta-bag-26da25a17a75.herokuapp.com/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={clg}
              isBlog={false}
              title='Better-cover-letter-Generator'
              description='It generates a better cover letter based on the provided job description. It uses NLP to analyze the job description and generate a cover letter that matches the job description. It is built using Streamlit and Snowflakes.'
              ghLink='https://github.com/lingyundai/snowflake-hackathon'
              demoLink='https://better-coverletter-generator.streamlit.app/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leetcode}
              isBlog={false}
              title='Leetcode Calendar npm package'
              description="It is an npm package that generates a calendar of Leetcode problems based on the user's preferences. It is built using Node.js and is published on npm."
              ghLink='https://github.com/ankitkr8540/leetcode-calendar'
              demoLink='https://www.npmjs.com/package/leetcode-calendar'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={vscode}
              isBlog={false}
              title='VS Code Extension - Workspace Archiver'
              description='It is a VS Code extension that helps in archiving the workspace. It creates a copy of the whole project in a workspaceArchiver.txt and saves it in the project location. It is published on the VS Code marketplace.'
              ghLink='https://github.com/ankitkr8540/workspace-archiver'
              demoLink='https://marketplace.visualstudio.com/items?itemName=AnkitKumar.workspace-archiver'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
