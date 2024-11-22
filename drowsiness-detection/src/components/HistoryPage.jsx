import React, { useState, useEffect } from "react"
import "../Styles/HistoryPage/HistoryPage.css"

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([])
  
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/log/showLog", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key: 'value',
        }),
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error("Failed to fetch logs");
      }

      const data = await response.json()
      console.log("Full response data:", data);

      console.log(data);
      setHistoryData(data?.data?.logs || [])
    
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(historyData)

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
            {historyData.map((log, index) => {
              console.log("Hello ", log)
              
              return (<tr key={index}>
              <td>{log.date}</td>
              <td>{log.type}</td>
              <td>{log.time}</td>
            </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HistoryPage
