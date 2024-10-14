// src/components/HistoryPage.jsx
import React from 'react';

function HistoryPage() {
  // Sample data for demonstration
  const historyData = [
    { id: 1, date: '2024-01-01', alert: 'Drowsiness Detected!' },
    { id: 2, date: '2024-01-02', alert: 'All Clear' },
    { id: 3, date: '2024-01-03', alert: 'Drowsiness Detected!' },
  ];

  return (
    <div>
      <h2>History of Drowsiness Alerts</h2>
      <ul>
        {historyData.map(item => (
          <li key={item.id}>
            <strong>{item.date}:</strong> {item.alert}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;
