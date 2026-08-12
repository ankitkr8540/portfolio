import React from 'react';
import {
  FaAws,
  FaChartLine,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaGithub,
  FaServer,
} from 'react-icons/fa';
import CapabilityGrid from './CapabilityGrid';

const platforms = [
  {
    icon: <FaAws />,
    title: 'SageMaker · Lambda · S3',
    detail: 'Inference · Compute · Storage',
    eyebrow: 'AWS model platform',
    summary:
      'These services form the deployment and storage foundation for my event-driven ML and retrieval systems.',
    sections: [
      {
        title: 'How I use them',
        items: [
          'SageMaker-hosted retrieval and reranking endpoints',
          'Lambda workers for scheduled and event-driven processing',
          'S3 storage for raw data, Parquet, models, and artifacts',
        ],
      },
      {
        title: 'Engineering focus',
        items: [
          'Versioned model and dataset artifacts',
          'Bounded retries and failure isolation',
          'Cost-aware separation of batch and online workloads',
        ],
      },
    ],
    evidence:
      'Used together in Mitra to support data ingestion, corpus construction, and hosted retrieval services.',
  },
  {
    icon: <FaCloudUploadAlt />,
    title: 'SQS · Glue · Athena',
    detail: 'Queues · Catalog · Analytics',
    eyebrow: 'Event-driven data processing',
    summary:
      'I use decoupled queues, managed ETL, and serverless SQL to make large ingestion workflows observable and recoverable.',
    sections: [
      {
        title: 'Pipeline design',
        items: [
          'SQS buffering and back-pressure between crawl stages',
          'Glue jobs and catalog-backed Parquet datasets',
          'Athena validation queries and data-quality checks',
        ],
      },
      {
        title: 'Operational controls',
        items: [
          'Idempotent processing and retry queues',
          'Partition-aware incremental updates',
          'Stage-level failure monitoring and replay',
        ],
      },
    ],
    evidence:
      'Processed more than 8K webpages per Mitra crawl and maintained a 50K+ chunk corpus through incremental updates.',
  },
  {
    icon: <FaChartLine />,
    title: 'MLflow · LangSmith',
    detail: 'Experiments · Traces · Evaluation',
    eyebrow: 'Model and agent observability',
    summary:
      'I use MLflow for reproducible model experimentation and LangSmith for inspecting multi-step LLM and agent behavior.',
    sections: [
      {
        title: 'MLflow',
        items: [
          'Dataset, parameter, metric, and artifact tracking',
          'Model comparison and version history',
          'Reproducible experiment runs and checkpoint selection',
        ],
      },
      {
        title: 'LangSmith',
        items: [
          'Tool-call and routing traces',
          'Grounding, latency, and failure analysis',
          'Agent evaluation and regression investigation',
        ],
      },
    ],
    evidence:
      'MLflow reduced Milwaukee Tool experiment comparison time, while LangSmith exposed retrieval and tool-execution failures in Mitra.',
  },
  {
    icon: <FaServer />,
    title: 'CloudWatch · CI/CD',
    detail: 'Monitoring · Testing · Delivery',
    eyebrow: 'Production reliability',
    summary:
      'I use automated delivery and operational telemetry to make model releases observable, testable, and reversible.',
    sections: [
      {
        title: 'Monitoring',
        items: [
          'Structured logs, latency metrics, and alarms',
          'Pipeline and endpoint failure analysis',
          'Agent behavior and grounding telemetry',
        ],
      },
      {
        title: 'Delivery',
        items: [
          'Automated unit, integration, and regression tests',
          'Versioned artifacts and deployment checkpoints',
          'Rollback paths for failed releases',
        ],
      },
    ],
    evidence:
      'Supported controlled SageMaker deployments and CloudWatch-monitored evaluation of Mitra retrieval and agent behavior.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Pydantic · Automated Testing',
    detail: 'Schemas · Contracts · Regression',
    eyebrow: 'Correctness by construction',
    summary:
      'I turn assumptions into typed schemas and executable checks so failures are caught at system boundaries instead of surfacing as silent model errors.',
    sections: [
      {
        title: 'Validation',
        items: [
          'Pydantic models for LLM outputs and agent state',
          'Schema validation at ingestion and service boundaries',
          'Explicit accept, reject, retry, and abstain outcomes',
        ],
      },
      {
        title: 'Testing',
        items: [
          'Unit tests for deterministic transformations',
          'Integration tests across workflow stages',
          'Model and retrieval regression suites',
        ],
      },
    ],
    evidence:
      'Used Pydantic-validated state and structured routing throughout Mitra ingestion and agent execution.',
  },
  {
    icon: <FaGithub />,
    title: 'Git · GitHub',
    detail: 'Versioning · Review · Automation',
    eyebrow: 'Collaborative engineering',
    summary:
      'I use version control as the operating record for code, experiments, review decisions, and production changes.',
    sections: [
      {
        title: 'Development workflow',
        items: [
          'Feature branches and focused commits',
          'Peer review and traceable technical decisions',
          'Release tags and reproducible source states',
        ],
      },
      {
        title: 'Automation',
        items: [
          'Build and test checks before deployment',
          'Artifact packaging and release workflows',
          'Issue-driven iteration and documentation',
        ],
      },
    ],
    evidence:
      'Applied across research, cloud ML, and embedded-model delivery to keep changes reviewable and reproducible.',
  },
];

function Toolstack() {
  return <CapabilityGrid items={platforms} compact />;
}

export default Toolstack;
