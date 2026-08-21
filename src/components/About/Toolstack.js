import React from 'react';
import {
  FaAws,
  FaChartLine,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaDocker,
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
    title: 'CloudWatch · CI/CD · ECR · ECS',
    detail: 'Monitoring · GitHub Actions · Delivery · Container Registry',
    eyebrow: 'Production reliability',
    summary:
      'I use automated delivery, container-based deployment, and operational telemetry to make model releases observable, testable, and reversible.',
    sections: [
      {
        title: 'Monitoring',
        items: [
          'Structured logs, latency metrics, and CloudWatch alarms',
          'Pipeline and endpoint failure analysis',
          'Agent behavior and grounding telemetry',
        ],
      },
      {
        title: 'Delivery',
        items: [
          'GitHub Actions CI/CD with Pytest regression gates',
          'Versioned ECR images and S3 artifact checkpoints',
          'ECS Fargate deployments with rollback paths',
        ],
      },
    ],
    evidence:
      'Deployed Mitra as a Dockerized FastAPI service on ECS Fargate with GitHub Actions CI/CD, versioned ECR artifacts, and CloudWatch monitoring.',
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
    icon: <FaDocker />,
    title: 'FastAPI · Docker · Streamlit',
    detail: 'REST APIs · Containers · ML Applications',
    eyebrow: 'Serving and interfaces',
    summary:
      'I build production-grade REST services and containerized ML applications, from cloud-hosted inference endpoints to interactive telemetry tools.',
    sections: [
      {
        title: 'API & containerization',
        items: [
          'FastAPI services for ML inference and agent endpoints',
          'Docker containerization and image versioning',
          'REST API design with typed request/response schemas',
        ],
      },
      {
        title: 'ML applications',
        items: [
          'Streamlit dashboards for telemetry replay and model inspection',
          'Interactive tooling for firmware and field-data validation',
          'Internal interfaces for experiment comparison and review',
        ],
      },
    ],
    evidence:
      'Built a Dockerized FastAPI service for Mitra and a Streamlit telemetry replay tool at Milwaukee Tool to catch release-blocking firmware defects.',
  },
];

function Toolstack() {
  return <CapabilityGrid items={platforms} compact />;
}

export default Toolstack;
