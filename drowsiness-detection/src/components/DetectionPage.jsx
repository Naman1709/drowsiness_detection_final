import React, { useState } from 'react';
import WebcamFeed from './WebcamFeed';
import DrowsinessIndicator from './DrowsinessIndicator';
import Alerts from './Alerts';
import '../Styles/DetectionPage/DetectionPage.css';

function DetectionPage() {
  return (
    <div className="detection">
      <h2>Driver Drowsiness Detection</h2>
      <WebcamFeed />
    </div>
  );
}

export default DetectionPage;
