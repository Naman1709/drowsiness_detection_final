import React, { useState, useEffect } from "react"
import "../Styles/HistoryPage/HistoryPage.css"

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/log/showLog")

        if (!response.ok) {
          return
        }

        const data = await response.json()

        setHistoryData(data?.log)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

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
  )
}

export default HistoryPage
