import React, { useState, useEffect } from 'react';
import '../Styles/HistoryPage/HistoryPage.css';

const HistoryPage = () => {
  // Dummy data for now
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API or database
    const dummyLogs = [
      { id: 1, date: '2024-10-01', event: 'Drowsiness Detected', time: '14:30' },
      { id: 2, date: '2024-10-02', event: 'Yawn Detected', time: '09:15' },
      { id: 3, date: '2024-10-03', event: 'Eyes Closed', time: '17:00' },
      { id: 4, date: '2024-10-04', event: 'Drowsiness Detected', time: '22:10' },
      { id: 5, date: '2024-10-05', event: 'Yawn Detected', time: '11:45' },
      { id: 6, date: '2024-10-06', event: 'Eyes Closed', time: '16:30' },
      { id: 7, date: '2024-10-07', event: 'Drowsiness Detected', time: '08:20' },
      { id: 8, date: '2024-10-08', event: 'Yawn Detected', time: '12:00' },
      { id: 9, date: '2024-10-09', event: 'Eyes Closed', time: '14:50' },
      { id: 10, date: '2024-10-10', event: 'Drowsiness Detected', time: '20:15' },
      { id: 11, date: '2024-10-11', event: 'Yawn Detected', time: '09:30' },
      { id: 12, date: '2024-10-12', event: 'Eyes Closed', time: '18:05' },
      { id: 13, date: '2024-10-13', event: 'Drowsiness Detected', time: '07:40' },
      { id: 14, date: '2024-10-14', event: 'Yawn Detected', time: '15:25' },
      { id: 15, date: '2024-10-15', event: 'Eyes Closed', time: '10:55' },
      { id: 16, date: '2024-10-16', event: 'Drowsiness Detected', time: '21:30' },
      { id: 17, date: '2024-10-17', event: 'Yawn Detected', time: '09:00' },
      { id: 18, date: '2024-10-18', event: 'Eyes Closed', time: '13:10' },
      { id: 19, date: '2024-10-19', event: 'Drowsiness Detected', time: '08:50' },
      { id: 20, date: '2024-10-20', event: 'Yawn Detected', time: '16:20' },
      { id: 21, date: '2024-10-21', event: 'Eyes Closed', time: '11:15' },
      { id: 22, date: '2024-10-22', event: 'Drowsiness Detected', time: '20:40' },
      { id: 23, date: '2024-10-23', event: 'Yawn Detected', time: '09:05' },
      { id: 24, date: '2024-10-24', event: 'Eyes Closed', time: '14:45' },
      { id: 25, date: '2024-10-25', event: 'Drowsiness Detected', time: '19:30' },
      { id: 26, date: '2024-10-26', event: 'Yawn Detected', time: '10:25' },
      { id: 27, date: '2024-10-27', event: 'Eyes Closed', time: '17:05' },
      { id: 28, date: '2024-10-28', event: 'Drowsiness Detected', time: '12:15' },
      { id: 29, date: '2024-10-29', event: 'Yawn Detected', time: '09:50' },
      { id: 30, date: '2024-10-30', event: 'Eyes Closed', time: '16:40' },
      { id: 31, date: '2024-10-31', event: 'Drowsiness Detected', time: '20:05' },
      { id: 32, date: '2024-11-01', event: 'Yawn Detected', time: '11:25' },
      { id: 33, date: '2024-11-02', event: 'Eyes Closed', time: '18:55' },
      { id: 34, date: '2024-11-03', event: 'Drowsiness Detected', time: '08:15' },
      { id: 35, date: '2024-11-04', event: 'Yawn Detected', time: '15:35' },
      { id: 36, date: '2024-11-05', event: 'Eyes Closed', time: '10:05' },
      { id: 37, date: '2024-11-06', event: 'Drowsiness Detected', time: '21:20' },
      { id: 38, date: '2024-11-07', event: 'Yawn Detected', time: '09:25' },
      { id: 39, date: '2024-11-08', event: 'Eyes Closed', time: '13:45' },
      { id: 40, date: '2024-11-09', event: 'Drowsiness Detected', time: '19:10' }
    ];

    setHistoryData(dummyLogs);
  }, []);

  return (
    <div className="history-page">
      <h2>Alerts History</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((log) => (
              <tr key={log.id}>
                <td>{log.date}</td>
                <td>{log.event}</td>
                <td>{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;