import React from 'react';
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaProjectDiagram,
  FaSearch,
} from 'react-icons/fa';
import CapabilityGrid from './CapabilityGrid';

const capabilities = [
  {
    icon: <FaProjectDiagram />,
    title: 'Agentic AI',
    detail: 'LangGraph · LangChain · Tool Orchestration',
    eyebrow: 'Controlled autonomy',
    summary:
      'I design bounded agents that can reason across multiple steps while remaining observable, testable, and constrained by explicit state and tool contracts.',
    sections: [
      {
        title: 'Workflow design',
        items: [
          'Stateful LangGraph workflows and conditional routing',
          'Intent classification and multi-intent decomposition',
          'Canonical entity and conversational-context resolution',
          'Typed tool interfaces and Pydantic-validated state',
        ],
      },
      {
        title: 'Reliability controls',
        items: [
          'Action budgets, timeouts, retries, and fallbacks',
          'Evidence-gated generation and source verification',
          'Clarification and explicit abstention paths',
          'Trace-based evaluation with LangSmith and CloudWatch',
        ],
      },
    ],
    evidence:
      'Mitra used a five-action bounded agent with fixed retrieval, reranking, and verification tools to answer ambiguous university-resource questions reliably.',
  },
  {
    icon: <FaSearch />,
    title: 'Retrieval Systems',
    detail: 'Hybrid Search · FAISS HNSW · Reranking',
    eyebrow: 'Evidence before generation',
    summary:
      'I build retrieval systems as measurable ranking pipelines, not a single vector-search call, and evaluate each stage against labeled relevance judgments.',
    sections: [
      {
        title: 'Retrieval stack',
        items: [
          'SentenceTransformer embeddings and semantic search',
          'FAISS HNSW approximate-nearest-neighbor retrieval',
          'Lexical retrieval and hybrid candidate generation',
          'Weighted Reciprocal Rank Fusion',
        ],
      },
      {
        title: 'Quality & evaluation',
        items: [
          'Cross-encoder reranking and relevance scoring',
          'Labeled-query evaluation and retrieval hit rate',
          'Source provenance and evidence coverage checks',
          'Embedding drift and content-gap analysis',
        ],
      },
    ],
    evidence:
      'The Mitra retrieval pipeline improved relevant-context retrieval from 42% to 87% on a manually labeled evaluation set.',
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning',
    detail: 'PINN · Statistics · PyTorch · XGBoost · Forecasting',
    eyebrow: 'Core ML foundations',
    summary:
      'My work combines probability, statistics, classical ML, deep learning, time-series methods, and first-principles modeling based on the structure of the problem.',
    sections: [
      {
        title: 'Modeling',
        items: [
          'Physics-informed modeling and first-principles constraints',
          'Probability, statistical inference, and uncertainty analysis',
          'Supervised learning, feature engineering, and validation',
          'PyTorch neural networks and Transformer models',
          'XGBoost, LSTM, SARIMA, and FinBERT',
        ],
      },
      {
        title: 'Scientific practice',
        items: [
          'Holdout design, ablation studies, and counterfactual tests',
          'Error analysis across operating regimes',
          'Physics-informed ODE and constrained optimization',
          'A/B testing, model comparison, and rollback criteria',
        ],
      },
    ],
    evidence:
      'Delivered embedded thermal prediction at Milwaukee Tool and two-year financial KPI forecasts at Accenture using physics-informed and statistical learning approaches.',
  },
  {
    icon: <FaDatabase />,
    title: 'Data Engineering',
    detail: 'PySpark · SQL · ETL · Parquet',
    eyebrow: 'Reliable data foundations',
    summary:
      'I build data pipelines that preserve lineage, validate schemas, handle incremental updates, and produce reproducible inputs for training and inference.',
    sections: [
      {
        title: 'Processing',
        items: [
          'PySpark and SQL transformations at scale',
          'Cleaning, deduplication, chunking, and enrichment',
          'Partitioned Parquet and incremental data updates',
          'Time-series synchronization and resampling',
        ],
      },
      {
        title: 'Data quality',
        items: [
          'Schema validation and typed data contracts',
          'Source provenance and versioned datasets',
          'Deterministic filtering and duplicate detection',
          'Automated preprocessing and regression checks',
        ],
      },
    ],
    evidence:
      "Built Mitra's 50K+ chunk corpus pipeline and Azure-based experimental ETL that cut Milwaukee Tool model iteration from two hours to 40 minutes.",
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & MLOps',
    detail: 'AWS · Azure · MLflow · Observability',
    eyebrow: 'Production ML operations',
    summary:
      'I treat deployment, observability, evaluation, and rollback as part of the model, not as work that starts after modeling is finished.',
    sections: [
      {
        title: 'Cloud architecture',
        items: [
          'SageMaker endpoints and managed inference',
          'Lambda, SQS, S3, Glue, Athena, and CloudWatch',
          'Azure-based ETL and internal ML applications',
          'Event-driven and serverless workflows',
        ],
      },
      {
        title: 'ML operations',
        items: [
          'MLflow experiment and artifact tracking',
          'LangSmith traces and agent evaluation',
          'Automated testing, CI/CD, and versioned releases',
          'Monitoring, failure analysis, and checkpoint rollback',
        ],
      },
    ],
    evidence:
      'Deployed SageMaker-hosted retrieval and reranking services with automated tests, tracing, versioned artifacts, and rollback paths.',
  },
  {
    icon: <FaCode />,
    title: 'Languages & Systems',
    detail: 'Python · SQL · C/C++ · Distributed Systems',
    eyebrow: 'From model to running system',
    summary:
      'I work across modeling, data, cloud, and embedded boundaries, choosing the language and architecture that fit the operational constraints.',
    sections: [
      {
        title: 'Languages',
        items: [
          'Python for ML, data engineering, and services',
          'SQL for analytics and transformation',
          'C and C++ for performance and embedded inference',
          'JavaScript and React for ML-facing applications',
        ],
      },
      {
        title: 'Systems thinking',
        items: [
          'Event-driven and serverless architectures',
          'Distributed data processing with PySpark',
          'API and schema contracts across components',
          'Embedded reference twins and firmware alignment',
        ],
      },
    ],
    evidence:
      'Translated a PyTorch thermal model into an embedded-C specification and built a time-causal Python twin to verify firmware behavior.',
  },
];

function Techstack() {
  return <CapabilityGrid items={capabilities} />;
}

export default Techstack;
