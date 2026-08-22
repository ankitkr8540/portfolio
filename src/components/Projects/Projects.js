import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import ExperienceModal from './ExperienceModal';
import Particle from '../Particle';
import petStudy from '../../Assets/vscode.jpeg';
import bastaPreview from '../../Assets/Basta_preview.png';
import coverLetterPreview from '../../Assets/cover-letter-generator.jpeg';
import leetcodePreview from '../../Assets/leetcode-previewed.jpeg';

export const EXPERIENCES = [
  {
    visualLabel: 'AGENTIC RAG',
    kicker: 'FOUNDER & LEAD ML ENGINEER · MASON INNOVATION EXCHANGE, GMU',
    title: 'Mitra: University Decision Support',
    period: 'June 2024 – May 2025',
    tags: ['LangGraph', 'LangChain', 'FAISS HNSW', 'PySpark', 'SageMaker', 'ECS Fargate', 'Docker', 'FastAPI'],
    sections: [
      {
        label: 'Overview',
        heading: 'AI-powered university decision support platform',
        paragraphs: [
          'Founded and led end-to-end development of an AI-powered university decision-support platform selected as a university venture. The platform earned 78% positive ratings in professor-led classroom evaluations involving 200+ students.',
          'The core challenge was building a system that could reliably answer ambiguous, multi-intent questions about university resources — financial aid, course selection, advising — using only verified, source-traceable information rather than hallucinating plausible-sounding answers.',
        ],
        subsections: [
          {
            title: 'The problem',
            items: [
              'University students struggled to find accurate, synthesized answers across dozens of disconnected resource pages',
              'Existing chatbots hallucinated policy details, causing students to make decisions on wrong information',
              'No reliable way to trace a generated answer back to a specific verified source',
            ],
          },
          {
            title: 'My ownership',
            items: [
              'Defined product requirements, architecture, and evaluation framework from scratch',
              'Built the full ingestion pipeline, retrieval stack, agent workflow, and RLHF feedback loop',
              'Coordinated professor-led evaluations and iterated on results across two offline cycles',
            ],
          },
        ],
      },
      {
        label: 'Ingestion Pipeline',
        heading: 'Event-driven corpus construction at scale',
        paragraphs: [
          'Built an event-driven Scrapy, AWS, and PySpark pipeline that processed 8K+ webpages per crawl, filtered approximately 70% of low-value pages before embedding, and maintained a source-traceable corpus of 50K+ chunks through 30-minute Glue ETL runs.',
        ],
        subsections: [
          {
            title: 'Pipeline stages',
            items: [
              'Scrapy crawler with SQS-buffered event-driven scheduling',
              'PySpark content quality filtering — removed boilerplate, nav menus, and duplicate content',
              'MiniLM embedding generation with chunk-level source provenance preserved',
              'AWS Glue ETL for incremental corpus updates every 30 minutes',
              'Athena-based data quality validation and completeness checks',
            ],
          },
          {
            title: 'Data quality controls',
            items: [
              'Filtered ~70% of low-value pages before embedding to keep corpus signal-dense',
              'Preserved document-level source URLs on every chunk for answer traceability',
              'Deduplication and schema validation at ingestion boundary',
              'S3-partitioned Parquet for cost-efficient incremental updates',
            ],
          },
        ],
      },
      {
        label: 'RAG & Agent',
        heading: 'Bounded LangGraph agent with hybrid retrieval',
        paragraphs: [
          'Deployed a bounded LangGraph workflow as a Dockerized FastAPI service on ECS Fargate. The agent was capped at five actions and two LLM calls per request, with explicit routing to retrieval retry, clarification, or abstention when evidence was insufficient.',
        ],
        subsections: [
          {
            title: 'Retrieval stack',
            items: [
              'MiniLM SentenceTransformer embeddings for semantic search',
              'FAISS HNSW approximate-nearest-neighbor retrieval',
              'Lexical BM25 search combined via weighted Reciprocal Rank Fusion',
              'Cross-encoder reranking for final relevance scoring',
            ],
          },
          {
            title: 'Agent design',
            items: [
              'Stateful LangGraph workflow with intent classification and multi-intent decomposition',
              'Five-action budget with explicit retry, clarification, and abstention paths',
              'Evidence-gated generation — response blocked unless retrieval confidence threshold met',
              'LangSmith tracing for every tool call and routing decision',
              'CloudWatch monitoring for latency, error rates, and grounding failures',
            ],
          },
          {
            title: 'RLHF feedback loop',
            items: [
              'DistilBERT-based feedback quality filter to remove noisy signals',
              'Pairwise cross-encoder retrained on hard negatives from low-rated responses',
              'Precision@20 improved from 25% to 45% across two offline cycles',
              'GitHub Actions CI/CD with Pytest regression gates before every deployment',
            ],
          },
        ],
      },
      {
        label: 'Key Results',
        heading: 'Measured outcomes',
        metrics: [
          { value: '42% → 86%', label: 'Top-5 retrieval hit rate on 50-query labeled eval set' },
          { value: '25% → 45%', label: 'Precision@20 after two RLHF cycles' },
          { value: '78%', label: 'Positive ratings in professor-led evaluations' },
          { value: '200+', label: 'Students in classroom evaluations' },
          { value: '50K+', label: 'Source-traceable chunks in corpus' },
          { value: '8K+', label: 'Webpages processed per crawl' },
        ],
      },
      {
        label: 'Tech Stack',
        heading: 'Tools and frameworks',
        tags: [
          'LangGraph', 'LangChain', 'FastAPI', 'Docker', 'Amazon ECS Fargate',
          'Amazon SageMaker', 'AWS S3', 'AWS SQS', 'AWS Glue', 'AWS Athena', 'CloudWatch',
          'FAISS HNSW', 'SentenceTransformers', 'MiniLM', 'Cross-Encoder Reranking',
          'Weighted RRF', 'DistilBERT', 'PySpark', 'Scrapy', 'Pydantic',
          'LangSmith', 'Pytest', 'GitHub Actions', 'Amazon ECR',
        ],
      },
    ],
  },
  {
    visualLabel: 'PHYSICS × ML',
    kicker: 'MACHINE LEARNING ENGINEER · MILWAUKEE ELECTRIC TOOL',
    title: 'Physics-Constrained Thermal Prediction',
    period: 'July 2025 – July 2026',
    tags: ['PyTorch', 'ODE Modeling', 'Embedded C', 'Digital Twin', 'Azure', 'MLflow', 'Streamlit'],
    sections: [
      {
        label: 'Overview',
        heading: 'Thermal intelligence for 200K+ power tools',
        paragraphs: [
          'Led development of a collocation-based PyTorch PINN thermal-warning feature using a three-body ODE for a chainsaw platform planned for 200K+ units. Owned the system end to end — from ambiguous requirements through PyTorch modeling, Azure ETL, embedded C specification, and a Streamlit validation twin.',
          'The core challenge was predicting thermal behavior accurately enough to warn operators 60 seconds before hard shutoff, across operating conditions ranging from −20°C to 40°C, with results tight enough to justify removing a hardware sensor.',
        ],
        subsections: [
          {
            title: 'The problem',
            items: [
              'Hard shutoffs during operation create poor user experience and potential safety risk on 200K+ unit chainsaw platform',
              'Physical temperature sensor was adding ~$100K in projected hardware cost across the production run',
              'Lab validation cycle of 30 days was too slow for iterative model development',
            ],
          },
          {
            title: 'My ownership',
            items: [
              'Defined the modeling approach, ODE structure, and collocation training strategy',
              'Built the Azure ETL and MLflow training pipelines from scratch',
              'Partnered with principal firmware engineer to port model to embedded C',
              'Built the Streamlit telemetry replay twin for pre-field validation',
            ],
          },
        ],
      },
      {
        label: 'Architecture',
        heading: 'Three-body PINN with embedded C twin',
        paragraphs: [
          'The model uses a collocation-based Physics-Informed Neural Network trained on a three-body ODE that models heat exchange between the motor, battery, and housing. Physics constraints are enforced at collocation points during training rather than only on labeled data.',
        ],
        subsections: [
          {
            title: 'Modeling approach',
            items: [
              'Three-body ODE system: motor ↔ battery ↔ housing thermal exchange',
              'Collocation-based PINN training — physics residuals enforced at interior points',
              'Forward Euler and Trapezoidal (Tustin) integration for embedded compatibility',
              'Held maximum per-profile RMSE to 2.2°C across 30 held-out profiles',
              'Warning logic fires up to 60 seconds before hard shutoff threshold',
            ],
          },
          {
            title: 'Azure ETL & MLflow pipeline',
            items: [
              'Synchronized lab and field sensor data from Azure Blob Storage',
              'Automated preprocessing, feature alignment, and model execution in MLflow',
              'Versioned datasets, parameters, metrics, and model artifacts for reproducibility',
              'Cut experiment iteration time from two hours to 40 minutes',
            ],
          },
          {
            title: 'Embedded C & validation twin',
            items: [
              'Partnered with firmware engineer to port PyTorch model to embedded C specification',
              'Built a time-causal Python reference twin with Streamlit telemetry replay',
              'Twin reproduced device thermal behavior to validate firmware implementation',
              'Caught two release-blocking defects in OCV/DCIR handling and initialization before field validation',
            ],
          },
        ],
      },
      {
        label: 'Key Results',
        heading: 'Measured outcomes',
        metrics: [
          { value: '2.2°C', label: 'Max RMSE across 30 held-out test profiles' },
          { value: '60s', label: 'Warning lead time before hard shutoff' },
          { value: '30 → 3 days', label: 'Validation cycle reduction' },
          { value: '2 hrs → 40 min', label: 'Experiment iteration time' },
          { value: '$100K', label: 'Projected hardware savings from sensor removal' },
          { value: '2', label: 'Release-blocking defects caught before field validation' },
        ],
      },
      {
        label: 'Tech Stack',
        heading: 'Tools and frameworks',
        tags: [
          'PyTorch', 'PINNs', 'PyTorch ODEs', 'Collocation Training',
          'Forward Euler', 'Tustin Integration', 'Embedded C',
          'Azure Blob Storage', 'Azure ETL', 'MLflow',
          'Streamlit', 'Python', 'Ablation Testing', 'Counterfactual Testing',
        ],
      },
    ],
  },
  {
    visualLabel: 'FORECASTING',
    kicker: 'PACKAGED APP DEVELOPMENT ANALYST · ACCENTURE',
    title: 'Enterprise Financial KPI Forecasting',
    period: 'February 2021 – July 2023',
    tags: ['PySpark', 'SQL', 'LSTM', 'XGBoost', 'SARIMA', 'FinBERT', 'AWS S3'],
    sections: [
      {
        label: 'Overview',
        heading: 'Forecasting platform for institutional financial analysts',
        paragraphs: [
          "Built an enterprise financial-analytics and competitive-benchmarking platform used by institutional analysts to compare a company's projected growth and valuation against competitors. The system transformed public-company fundamentals into point-in-time-safe features and generated up-to-two-year forecasts for KPIs such as revenue CAGR and EV/EBITDA.",
          'Forecasts were refreshed on a quarterly cadence through a batch AWS architecture, with precomputed results served through an API to an AngularJS analyst dashboard — decoupling user latency from model runtime.',
        ],
        subsections: [
          {
            title: 'The problem',
            items: [
              "Institutional analysts needed to compare a company's growth trajectory against competitors across sectors",
              'Single ARIMA/SARIMA models could not consume peer-relative features or cross-sectional signals',
              'Point-in-time integrity was critical — historical training rows must never see future restatements',
              'Company histories ranged from newly public firms to decades of filings, requiring cold-start coverage',
            ],
          },
          {
            title: 'My ownership',
            items: [
              'Built the PySpark/S3 data pipeline and all point-in-time feature logic',
              'Selected and implemented the pooled LSTM/XGBoost + per-company SARIMA ensemble architecture',
              'Defined chronological walk-forward validation protocol and regime-stratified evaluation',
              'Translated model drivers into business language for quantitative analysts via SHAP-based reviews',
            ],
          },
        ],
      },
      {
        label: 'Data Pipeline',
        heading: 'Point-in-time-safe financial data at scale',
        paragraphs: [
          'Built PySpark and SQL pipelines on Amazon S3 to standardize point-in-time fundamentals for approximately 9,500 public companies into partitioned Parquet, reducing company and competitor-analysis preparation from five business days to 1.5 days.',
        ],
        subsections: [
          {
            title: 'Point-in-time integrity controls',
            items: [
              'Anchored every row on report_date (filing availability date), not fiscal_period_end',
              'Used as-filed values — later restatements assigned their own later date',
              'Peer-relative features computed only from companies with strictly earlier filing dates',
              'Scalers and ensemble weights fit only on training-period data, never on validation rows',
            ],
          },
          {
            title: 'Feature engineering',
            items: [
              'ROIC, gross margin, operating margin, R&D%, and capex% as cross-company fundamentals',
              'Revenue CAGR 3Y with structural-break adjustment (QoQ jumps >15% set to missing)',
              'Peer-relative growth vs. sector median (earlier-filed peers only, self-excluded)',
              'EV/EBITDA proxy guarded to NaN when EBIT ≤ 0',
              'Structural-break and EBIT-outlier flags exposed as model features, not hard filters',
            ],
          },
        ],
      },
      {
        label: 'Models & Ensemble',
        heading: 'Pooled LSTM/XGBoost + per-company SARIMA + FinBERT',
        paragraphs: [
          'The ensemble combined three deliberately different model types with complementary error modes: pooled LSTM and XGBoost learned cross-company patterns, while per-company SARIMA captured company-specific quarterly seasonality.',
        ],
        subsections: [
          {
            title: 'Why pooled LSTM + XGBoost',
            items: [
              'SARIMA alone cannot consume peer-relative features or cross-sectional signals',
              'Pooled models enable cold-start coverage for newly public companies',
              'XGBoost handles nonlinear interactions in tabular feature snapshots natively',
              'LSTM captures ordered multi-quarter dependencies and evolving growth trajectories',
            ],
          },
          {
            title: 'SARIMA per company',
            items: [
              'Captures company-specific autocorrelation and quarterly seasonality',
              'Reindexed to complete quarterly calendar — gaps preserved as NaN, not dropped',
              'Complementary to pooled models: strongest where company history is long and stable',
            ],
          },
          {
            title: 'FinBERT text signals',
            items: [
              'Fine-tuned FinBERT on ~75K timestamped earnings calls, news articles, and analyst reports',
              'Supervision signal: forward market-relative price movement labels',
              'Achieved 0.76 macro-F1 on a chronological holdout',
              'Document-level train/val split — all chunks from one document stayed on the same side',
              'Aggregated into interpretable quarterly text-impact features for ensemble input',
            ],
          },
        ],
      },
      {
        label: 'Key Results',
        heading: 'Measured outcomes',
        metrics: [
          { value: '64% → 78%', label: 'Stable-regime directional accuracy (vs. persistence baseline)' },
          { value: '52% → 61%', label: 'Transition-period directional accuracy' },
          { value: '0.76', label: 'FinBERT macro-F1 on chronological holdout' },
          { value: '5 → 1.5 days', label: 'Company analysis preparation time' },
          { value: '~9,500', label: 'Public companies standardized in pipeline' },
          { value: '70%', label: 'Pipeline preparation time reduction' },
        ],
      },
      {
        label: 'Tech Stack',
        heading: 'Tools and frameworks',
        tags: [
          'PySpark', 'SQL', 'AWS S3', 'Parquet',
          'PyTorch', 'LSTM', 'XGBoost', 'SARIMA',
          'FinBERT', 'Hugging Face Transformers',
          'scikit-learn', 'Pandas', 'NumPy',
          'Walk-Forward Validation', 'SHAP', 'AngularJS',
        ],
      },
    ],
  },
  {
    visualLabel: 'CROSS-LINGUAL NLP',
    kicker: 'RESEARCH PROJECT · SUBMITTED TO ACL BEA',
    title: 'PyLinguist: Cross-Lingual Python Translation',
    period: 'November 2024 – Present',
    tags: ['Transformers', 'Prompt Engineering', 'Evaluation', 'Python', 'GPT-4o', 'Claude 3.5 Haiku'],
    ghLink: 'https://github.com/ankitkr8540/pylinguist-paper',
    sections: [
      {
        label: 'Overview',
        heading: 'Cross-lingual Python translation and LLM evaluation',
        paragraphs: [
          'Built a two-stage Python translation system across seven languages using token-aware translation, a curated dictionary of 234 Python terms, and Google Translate followed by GPT-4o or Claude 3.5 Haiku refinement — while preserving code syntax and structure. Submitted to ACL BEA workshop.',
          'The research question: can a structured two-stage pipeline (deterministic keyword mapping → LLM refinement) outperform direct translation on code-specific quality metrics, across multiple languages and LLM providers?',
        ],
        subsections: [
          {
            title: 'Languages covered',
            items: [
              'Hindi, Spanish, French, German, Chinese (Simplified), Arabic, Portuguese',
              '70 held-out programs for evaluation per language',
              'Evaluation designed to be reproducible with deterministic temperature-zero inference',
            ],
          },
        ],
      },
      {
        label: 'Pipeline Design',
        heading: 'Two-stage translation architecture',
        paragraphs: [
          'The pipeline separates concerns: Stage 1 handles all Python-specific keywords and syntax deterministically, preventing LLM hallucination of code structure. Stage 2 handles natural language translation of identifiers, strings, and comments using LLM refinement.',
        ],
        subsections: [
          {
            title: 'Stage 1 — Deterministic keyword mapping',
            items: [
              'Token-aware AST traversal to identify Python keywords, builtins, and operators',
              'Curated bilingual dictionary of 234 Python-specific terms per target language',
              'Structure-preserving substitution — indentation, colons, and brackets untouched',
              'Google Translate for natural language identifiers and string content',
            ],
          },
          {
            title: 'Stage 2 — LLM refinement',
            items: [
              'GPT-4o and Claude 3.5 Haiku used as refinement models at temperature zero',
              'Prompt instructs model to correct translation artifacts while preserving syntax',
              'DeepSeek evaluated as an additional provider for cross-model comparison',
              'Output validated for syntax before being passed to evaluation pipeline',
            ],
          },
        ],
      },
      {
        label: 'Evaluation',
        heading: 'Multi-dimensional evaluation framework',
        paragraphs: [
          'Evaluated 70 held-out programs using five complementary metrics to avoid gaming any single score.',
        ],
        subsections: [
          {
            title: 'Evaluation metrics',
            items: [
              'BLEU — n-gram precision between translated and reference output',
              'Syntax validity — AST parse success rate on generated code',
              'Structural preservation — control flow, function signatures, and indentation integrity',
              'Semantic similarity — embedding-based similarity to reference implementation',
              'Bilingual human review — sampled manual assessment across languages',
            ],
          },
          {
            title: 'Cross-model comparison methodology',
            items: [
              'All models evaluated at temperature zero for deterministic reproducibility',
              'Same 70 held-out programs used for every model and language pair',
              'Few-shot sensitivity testing — measured performance change with additional examples',
              'Provider-specific error categorization for failure analysis',
            ],
          },
        ],
      },
      {
        label: 'Key Results',
        heading: 'Measured outcomes',
        metrics: [
          { value: '92.5%', label: 'GPT-4o composite evaluation score' },
          { value: '61.5%', label: 'Translation-only baseline composite score' },
          { value: '100%', label: 'Syntax validity with GPT-4o refinement' },
          { value: '7', label: 'Languages evaluated' },
          { value: '70', label: 'Held-out programs per language' },
          { value: '234', label: 'Python terms in curated translation dictionary' },
        ],
      },
      {
        label: 'Tech Stack',
        heading: 'Tools and frameworks',
        tags: [
          'Python', 'GPT-4o', 'Claude 3.5 Haiku', 'DeepSeek',
          'Google Translate API', 'Hugging Face Transformers',
          'SentenceTransformers', 'AST Parsing', 'BLEU',
          'Prompt Engineering', 'Temperature-Zero Inference',
        ],
      },
    ],
  },
];

function Projects() {
  const [modal, setModal] = useState({ show: false, experience: null });

  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Industry <strong className='purple'>Experience </strong>
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
              title='Mitra: University Decision Support'
              description='Built an AWS ingestion and ETL platform for 8K+ webpages per crawl, then developed a bounded LangGraph workflow for intent classification, query decomposition, entity resolution, retrieval, clarification, retry, verification, and abstention.'
              impact='Improved relevant-context retrieval from 42% to 87% on a labeled evaluation set and reached 78% positive feedback across 200+ alpha users.'
              tags={[
                'LangGraph',
                'LangChain',
                'FAISS HNSW',
                'PySpark',
                'SageMaker',
              ]}
              onClick={() => setModal({ show: true, experience: EXPERIENCES[0] })}
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
              onClick={() => setModal({ show: true, experience: EXPERIENCES[1] })}
            />
          </Col>

          <Col md={6} className='project-card'>
            <ProjectCard
              isBlog={false}
              visualLabel='CROSS-LINGUAL NLP'
              kicker='RESEARCH PROJECT'
              title='PyLinguist: Intelligent Code Translation'
              description='Built a two-stage pipeline for translating Python across seven languages: deterministic keyword and structural transformation followed by temperature-zero LLM refinement using GPT-4, Claude, and DeepSeek.'
              impact='Scaled evaluation to 550K+ samples and achieved 98% semantic similarity through syntax checks, structural comparison, embeddings, and back-translation.'
              tags={[
                'Transformers',
                'Prompt Engineering',
                'Evaluation',
                'Python',
              ]}
              onClick={() => setModal({ show: true, experience: EXPERIENCES[3] })}
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
              onClick={() => setModal({ show: true, experience: EXPERIENCES[2] })}
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

      <ExperienceModal
        show={modal.show}
        onHide={() => setModal({ show: false, experience: null })}
        experience={modal.experience}
      />
    </Container>
  );
}

export default Projects;
