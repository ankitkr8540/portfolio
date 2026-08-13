import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Machine Learning Engineer',
          'GenAI & Agentic Systems Engineer',
          'RAG Systems Engineer',
          'Physics-Informed ML Engineer',
          'Production ML Engineer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
