import React from 'react';
import { FaCogs, FaComments, FaLanguage, FaRobot } from 'react-icons/fa';
import CapabilityGrid from './CapabilityGrid';

const aiTools = [
  {
    icon: <FaComments />,
    title: 'OpenAI · ChatGPT',
    detail: 'Research · Prototyping · Structured Outputs',
    eyebrow: 'LLM-assisted engineering',
    summary:
      'I use OpenAI models to accelerate structured research, prototype prompts and workflows, generate test cases, and automate repeatable classification and synthesis tasks.',
    sections: [
      {
        title: 'Daily workflow',
        items: [
          'Technical research and alternative-solution exploration',
          'Prompt and schema prototyping',
          'Test-case generation and failure-mode brainstorming',
          'Documentation and stakeholder-ready explanations',
        ],
      },
      {
        title: 'Production use',
        items: [
          'GPT-3.5-turbo content-quality classification',
          'Few-shot structured output generation',
          'GPT-4o cross-lingual code refinement',
          'Human-reviewed evaluation and deterministic safeguards',
        ],
      },
    ],
    evidence:
      'Used GPT-3.5-turbo in Mitra content filtering and GPT-4o in PyLinguist model refinement and evaluation.',
  },
  {
    icon: <FaRobot />,
    title: 'Claude',
    detail: 'Long Context · Review · Model Comparison',
    eyebrow: 'Independent model perspective',
    summary:
      'I use Claude as an alternate reasoning and review model to compare outputs, inspect long technical contexts, and test whether a workflow is robust across providers.',
    sections: [
      {
        title: 'Engineering workflow',
        items: [
          'Long-context technical and code review',
          'Alternative architecture and failure analysis',
          'Cross-model output comparison',
          'Clear synthesis of complex source material',
        ],
      },
      {
        title: 'Evaluation discipline',
        items: [
          'Temperature-controlled comparisons',
          'Few-shot sensitivity testing',
          'Syntax and structural-preservation checks',
          'Provider-specific error analysis',
        ],
      },
    ],
    evidence:
      'Claude 3.5 Haiku was evaluated alongside GPT-4o in PyLinguist, including analysis of how additional few-shot examples changed performance.',
  },
  {
    icon: <FaLanguage />,
    title: 'DeepSeek',
    detail: 'Benchmarking · Multilingual Refinement',
    eyebrow: 'Cross-provider experimentation',
    summary:
      'I use DeepSeek in controlled model comparisons to test generalization, multilingual behavior, and the reliability of prompt-and-evaluation pipelines.',
    sections: [
      {
        title: 'Use cases',
        items: [
          'Cross-lingual code refinement',
          'Provider-diverse model benchmarking',
          'Deterministic temperature-zero inference',
          'Semantic and structural output comparison',
        ],
      },
      {
        title: 'Evaluation',
        items: [
          'Back-translation and semantic similarity',
          'Syntax validity and token preservation',
          'Model-specific error categorization',
          'Human-reviewed comparison samples',
        ],
      },
    ],
    evidence:
      'Used as one of the refinement models in PyLinguist\'s seven-language translation and evaluation pipeline.',
  },
  {
    icon: <FaCogs />,
    title: 'Custom AI Automation',
    detail: 'Agents · Pipelines · Human Review',
    eyebrow: 'Automation with control',
    summary:
      'I automate repetitive research and engineering work by combining LLMs with deterministic code, typed contracts, tool limits, evaluation, and human checkpoints.',
    sections: [
      {
        title: 'What I automate',
        items: [
          'Content triage and quality classification',
          'Query analysis and retrieval orchestration',
          'Structured synthesis and evidence verification',
          'Evaluation, tracing, and failure categorization',
        ],
      },
      {
        title: 'How I keep it reliable',
        items: [
          'Deterministic filters before model calls',
          'Pydantic schemas and bounded action budgets',
          'Retries, abstention, and review paths',
          'Offline benchmarks and production monitoring',
        ],
      },
    ],
    evidence:
      'Mitra combined deterministic ingestion, LLM classification, bounded LangGraph tools, and trace-based evaluation into an end-to-end automated decision-support workflow.',
  },
];

function AIToolstack() {
  return <CapabilityGrid items={aiTools} compact />;
}

export default AIToolstack;
