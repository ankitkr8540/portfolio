import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OpenToWork() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auto = setTimeout(() => dismiss(), 10000);
    return () => clearTimeout(auto);
  }, []);

  const dismiss = () => {
    setExiting(true);
    setTimeout(() => setVisible(false), 350);
  };

  if (!visible) return null;

  return (
    <div className={`otw-banner${exiting ? ' otw-banner-exit' : ''}`}>
      <span className="otw-dot" />
      <span className="otw-banner-text">
        Open to new roles &mdash; ML / GenAI Engineer · Seattle, WA
      </span>
      <button
        className="otw-link"
        onClick={() => { dismiss(); navigate('/contact'); }}
      >
        Let's connect →
      </button>
      <button className="otw-close" onClick={dismiss} aria-label="Dismiss">
        ✕
      </button>
    </div>
  );
}

export default OpenToWork;
