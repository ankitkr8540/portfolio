import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            I grew up in a remote village in{' '}
            <span className='purple'>Bihar, India</span>, spending my first 15
            years without reliable electricity. That experience shaped how I
            approach technology: focus on what is useful, build for real
            constraints, and never take access or opportunity for granted.
            <br />
            <br />
            My work now spans <span className='purple'>production GenAI</span>,
            retrieval and NLP systems, time-series forecasting, and
            physics-informed modeling. I enjoy the full engineering path—from
            clarifying an ambiguous problem and building the data foundation to
            evaluating, deploying, and monitoring the final system.
            <br />
            <br />
            I work best where software, models, and domain knowledge meet. At
            Milwaukee Tool, that meant partnering with product, reliability,
            and firmware engineers on embedded thermal prediction. With Mitra,
            it meant turning thousands of noisy university webpages into an
            evidence-grounded <span className='purple'>agentic RAG system</span>.
            <br />
            <br />
            My operating principles are straightforward:{' '}
            <span className='purple'>own the outcome</span>, explain complex
            ideas clearly, validate assumptions with evidence, and keep
            improving the system after the first version works.
            <br />
            <br />
            Outside engineering, I enjoy cooking, museums, travel, and learning
            how different people solve familiar problems. I am currently based
            in <span className='purple'>Seattle, Washington</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
