// src/components/DrowsinessIndicator.jsx
import React from 'react';

function DrowsinessIndicator({ alert }) {
  return (
    <div className="indicator">
      <h3>Status: {alert ? "Drowsy" : "Alert"}</h3>
      <div style={{
        backgroundColor: alert ? 'red' : 'green',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
      }} />
    </div>
  );
}

export default DrowsinessIndicator;
