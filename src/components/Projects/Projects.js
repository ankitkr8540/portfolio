import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import petStudy from '../../Assets/vscode.jpeg';
import bastaPreview from '../../Assets/Basta_preview.png';
import coverLetterPreview from '../../Assets/cover-letter-generator.jpeg';
import leetcodePreview from '../../Assets/leetcode-previewed.jpeg';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Selected <strong className='purple'>ML Systems </strong>
        </h1>
        <p className='project-intro'>
          Production-minded work spanning agentic RAG, physics-informed
          modeling, cross-lingual NLP, and financial forecasting.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={6} className='project-card'>
            <ProjectCard
              isBlog={false}
              visualLabel='AGENTIC RAG'
              kicker='FOUNDER & LEAD ML ENGINEER'
              title='Mitra — University Decision Support'
              description='Built an AWS ingestion and ETL platform for 8K+ webpages per crawl, then developed a bounded LangGraph workflow for intent classification, query decomposition, entity resolution, retrieval, clarification, retry, verification, and abstention.'
              impact='Improved relevant-context retrieval from 42% to 87% on a labeled evaluation set and reached 78% positive feedback across 200+ alpha users.'
              tags={[
                'LangGraph',
                'LangChain',
                'FAISS HNSW',
                'PySpark',
                'SageMaker',
              ]}
            />
          </Col>

          <Col md={6} className='project-card'>
            <ProjectCard
              isBlog={false}
              visualLabel='PHYSICS × ML'
              kicker='MILWAUKEE TOOL'
              title='Physics-Constrained Thermal Prediction'
              description='Owned the end-to-end development of a three-body thermal model for embedded inference, including data synchronization, physics-constrained training, firmware-aligned warning logic, and a software validation twin that reproduced device behavior.'
              impact='Achieved 1–2°C accuracy, delivered proactive warnings up to one minute earlier, and reduced the validation cycle from approximately 30 days to 3 days.'
              tags={[
                'PyTorch',
                'ODE Modeling',
                'Embedded C',
                'Digital Twin',
                'Validation',
              ]}
            />
          </Col>

          <Col md={6} className='project-card'>
            <ProjectCard
              isBlog={false}
              visualLabel='CROSS-LINGUAL NLP'
              kicker='RESEARCH PROJECT'
              title='PyLinguist — Intelligent Code Translation'
              description='Built a two-stage pipeline for translating Python across seven languages: deterministic keyword and structural transformation followed by temperature-zero LLM refinement using GPT-4, Claude, and DeepSeek.'
              impact='Scaled evaluation to 550K+ samples and achieved 98% semantic similarity through syntax checks, structural comparison, embeddings, and back-translation.'
              tags={[
                'Transformers',
                'Prompt Engineering',
                'Evaluation',
                'Python',
              ]}
              ghLink='https://github.com/ankitkr8540/pylinguist-paper'
            />
          </Col>

          <Col md={6} className='project-card'>
            <ProjectCard
              isBlog={false}
              visualLabel='FORECASTING'
              kicker='ACCENTURE'
              title='Enterprise Financial KPI Forecasting'
              description='Developed reusable analytics products by combining structured financial features with LSTM, XGBoost, and SARIMA forecasts plus FinBERT-derived market signals. Built the supporting PySpark and SQL workflows over partitioned Parquet data.'
              impact='Reached 92% directional accuracy in stable conditions and improved transition-period performance by 35% for analyst-facing KPI forecasts.'
              tags={[
                'PySpark',
                'SQL',
                'LSTM',
                'XGBoost',
                'FinBERT',
              ]}
            />
          </Col>
        </Row>

        <h2 className='project-subheading'>Additional Engineering Projects</h2>
        <p className='project-intro'>
          Earlier research, developer tooling, and product builds that show the
          range behind my production ML work.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              isBlog={false}
              imgPath={petStudy}
              kicker='ML RESEARCH'
              title='Few-Shot Learning Reproducibility Study'
              description='Reproduced and evaluated Pattern-Exploiting Training for few-shot text classification, with controlled experiments around prompt patterns, verbalizers, and limited-label performance.'
              tags={['Few-Shot Learning', 'NLP', 'PyTorch', 'Evaluation']}
              ghLink='https://github.com/StringAna/PET_Reproducibility_Study'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              isBlog={false}
              imgPath={bastaPreview}
              kicker='FULL-STACK PRODUCT'
              title='Basta E-commerce Shopping App'
              description='Built an end-to-end shopping experience with product discovery, cart workflows, and a deployed web interface—an early product-engineering project focused on usable, complete delivery.'
              tags={['React', 'Full Stack', 'Product UI', 'Deployment']}
              ghLink='https://github.com/ankitkr8540/EcommerceShoppingApp'
              demoLink='https://basta-bag-26da25a17a75.herokuapp.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              isBlog={false}
              imgPath={coverLetterPreview}
              kicker='GENAI APPLICATION'
              title='Better Cover Letter Generator'
              description='Created a Streamlit application that turns role and candidate context into a tailored cover-letter draft, demonstrating practical prompt design and human-in-the-loop generation.'
              tags={['Generative AI', 'Streamlit', 'Prompting', 'Python']}
              ghLink='https://github.com/lingyundai/snowflake-hackathon'
              demoLink='https://better-coverletter-generator.streamlit.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              isBlog={false}
              imgPath={leetcodePreview}
              kicker='PUBLISHED DEVELOPER TOOL'
              title='LeetCode Calendar'
              description='Published an npm package that turns LeetCode activity into a calendar-style contribution view for developer profiles and portfolio integrations.'
              tags={['JavaScript', 'npm', 'Developer Tool', 'API']}
              ghLink='https://github.com/ankitkr8540/leetcode-calendar'
              demoLink='https://www.npmjs.com/package/leetcode-calendar'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              isBlog={false}
              imgPath={petStudy}
              kicker='DEVELOPER PRODUCTIVITY'
              title='VS Code Workspace Archiver'
              description='Built and published a VS Code extension for archiving and restoring workspace state, reducing friction when developers switch between active projects.'
              tags={['VS Code API', 'JavaScript', 'Extension', 'Automation']}
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
