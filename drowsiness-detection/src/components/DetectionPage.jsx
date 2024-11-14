import React, { useState } from "react";
import WebcamFeed from "./WebcamFeed";
import DrowsinessIndicator from "./DrowsinessIndicator";
import Alerts from "./Alerts";
import "../Styles/DetectionPage/DetectionPage.css";

function DetectionPage() {
  const [alert, setAlert] = useState("");

  const handleAlert = (message) => {
    setAlert(message);
  };

  return (
    <div className="detection-page">
      <h2>Driver Drowsiness Detection</h2>
      <p className="description">
        Monitor your alertness in real-time for safer driving.
      </p>

      <div className="card webcam-feed">
        <h3>Webcam Feed</h3>
        <WebcamFeed onAlert={handleAlert} />
      </div>

      <div className="card drowsiness-indicator">
        <h3>Drowsiness Indicator</h3>
        <DrowsinessIndicator alert={alert} />
      </div>
    </div>
  );
}

export default DetectionPage;
