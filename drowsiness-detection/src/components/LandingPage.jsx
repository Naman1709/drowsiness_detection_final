// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing">
      <h2>Welcome to Driver Drowsiness Detection</h2>
      <p>Click below to start monitoring your alertness while driving.</p>
      <Link to="/detect">
        <button>Start Detection</button>
      </Link>
    </div>
  );
}

export default LandingPage;
