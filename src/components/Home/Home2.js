import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Ankit_cat.png';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Testimonials from './Testimonials';
import ExperienceModal from '../Projects/ExperienceModal';
import { EXPERIENCES } from '../Projects/Projects';

const highlights = [
  {
    kicker: 'Milwaukee Electric Tool · MLE',
    headline: 'Physics-informed thermal warning system',
    context:
      'End-to-end ownership: PyTorch model → Azure ETL → embedded C → production firmware.',
    metric: '30 days → 3 days validation · $100K projected savings',
    experience: EXPERIENCES[1],
  },
  {
    kicker: 'Mitra · Founder & Lead ML Engineer',
    headline: 'Bounded agentic RAG platform',
    context:
      'LangGraph agent with hybrid retrieval, cross-encoder reranking, and a DistilBERT feedback loop.',
    metric: '42% → 86% retrieval hit rate · 78% positive ratings · 200+ students',
    experience: EXPERIENCES[0],
  },
  {
    kicker: 'PyLinguist · Research · ACL BEA',
    headline: 'Cross-lingual Python translation & LLM evaluation',
    context:
      'Two-stage translation pipeline with back-translation evaluation scaled across 7 languages and 550K+ samples.',
    metric: 'Submitted to ACL BEA · 7 languages · 550K+ samples',
    experience: EXPERIENCES[3],
  },
];

const skills = [
  // Languages & Data
  'Python',
  'SQL',
  'C',
  'Pandas',
  'NumPy',
  'PySpark',
  'ETL Pipelines',
  'Parquet',
  // GenAI & Agents
  'RAG',
  'LangGraph',
  'LangChain',
  'Pydantic',
  'Prompt Engineering',
  'Evidence-Gated Generation',
  'LLM Evaluation',
  'Agentic Systems',
  // Retrieval & NLP
  'Hugging Face Transformers',
  'SentenceTransformers',
  'FAISS HNSW',
  'Hybrid Search',
  'Weighted RRF',
  'Cross-Encoder Reranking',
  'FinBERT',
  'DistilBERT',
  // ML & Deep Learning
  'PyTorch',
  'scikit-learn',
  'XGBoost',
  'LSTM',
  'SARIMA',
  'Model Fine-Tuning',
  'Time-Series Forecasting',
  // Physics & Numerical Modeling
  'PINNs',
  'PyTorch ODEs',
  'Monte Carlo Simulation',
  'Ablation & Counterfactual Testing',
  // Cloud & MLOps
  'AWS SageMaker',
  'AWS Lambda',
  'AWS Glue',
  'CloudWatch',
  'MLflow',
  'LangSmith',
  'Azure',
  // Software & Deployment
  'FastAPI',
  'Docker',
  'Pytest',
  'GitHub Actions',
  'CI/CD',
  'Amazon ECS Fargate',
  'Streamlit',
];

function Home2() {
  const [modal, setModal] = useState({ show: false, experience: null });

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
              I BUILD <span className='purple'>ML SYSTEMS</span> THAT WORK
            </h1>
            <p className='home-about-intro'>
              I'm a <b className='purple'>GenAI and ML engineer</b> who
              specializes in{' '}
              <b className='purple'>agentic AI, RAG pipelines, and production ML</b>.
              A lot of my best work started as a vague ask. Someone knew
              something was off but couldn't say exactly what. I ask the
              uncomfortable questions early,{' '}
              <b className='purple'>push back when the numbers don't add up</b>,
              and don't walk away until I've seen it run in production. That's
              been true whether I'm working on embedded C for a power tool or a
              cloud-hosted agent with 200 users.
              <br />
              <br />
              I've written firmware specs, caught release-blocking bugs before
              they hit the field, founded a startup, and{' '}
              <b className='purple'>published NLP research</b>, sometimes in
              the same year. I do my best work when the problem is{' '}
              <b className='purple'>still being figured out</b> and the stakes
              are real.
            </p>
          </Col>
        </Row>

        <Row className='highlight-grid'>
          {highlights.map((h, i) => (
            <Col md={4} key={i} className='highlight-card-col'>
              <div
                className='highlight-card'
                onClick={() => setModal({ show: true, experience: h.experience })}
                style={{ cursor: 'pointer' }}
              >
                <span className='highlight-kicker'>{h.kicker}</span>
                <h3 className='highlight-headline'>{h.headline}</h3>
                <p className='highlight-context'>{h.context}</p>
                <div className='highlight-metric'>{h.metric}</div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className='skills-strip-row'>
          <Col>
            <div className='skills-strip'>
              {[...skills, ...skills].map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
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
      <ExperienceModal
        show={modal.show}
        onHide={() => setModal({ show: false, experience: null })}
        experience={modal.experience}
      />
    </Container>
  );
}

export default Home2;
