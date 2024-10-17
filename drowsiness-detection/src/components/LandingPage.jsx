// import React from 'react';
// import { Link } from 'react-router-dom';

// function LandingPage() {
//   return (
//     <div className="landing">
//       <h2>Welcome to Driver Drowsiness Detection</h2>
//       <p>Click below to start monitoring your alertness while driving.</p>
//       <Link to="/detect">
//         <button>Start Detection</button>
//       </Link>
//     </div>
//   );
// }

// export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main className="landing-page-container">
        <h1 className="landing-page-title">Driver Drowsiness Detection System</h1>
        <div className="feature-grid">
          <div className="feature-card">
            <h2>About the System</h2>
            <p>
              Our Driver Drowsiness Detection System uses advanced technology to monitor driver alertness and prevent accidents caused by fatigue.
            </p>
            <Link to="/detection" className="try-now-button">
              Try It Now
            </Link>
          </div>
          <div className="feature-card">
            <h2>Key Features</h2>
            <ul>
              <li>Real-time drowsiness detection</li>
              <li>Audio alerts for drowsy drivers</li>
              <li>Webcam integration for monitoring</li>
              <li>User profile management</li>
              <li>Detection history tracking</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;