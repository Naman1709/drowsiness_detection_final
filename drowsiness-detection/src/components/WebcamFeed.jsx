import React, { useEffect, useRef, useState } from "react"

function WebcamFeed() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const intervalRef = useRef(null)
  const alertSoundRef = useRef(null)
  const wasPlaying = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [blinkCounter, setBlinkCounter] = useState(0)
  const [currTime, setCurrTime] = useState(null)
  const [currStatus, setCurrStatus] = useState("")


  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        })
        videoRef.current.srcObject = stream
      } catch (err) {
        console.error("Error accessing webcam: ", err)
      }
    }

    startWebcam()

    intervalRef.current = setInterval(() => {
      captureFrame()
    }, 100) // Capture every 0.1 second

    return () => {
      clearInterval(intervalRef.current)
      if (videoRef?.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  const captureFrame = () => {
    const canvas = canvasRef.current
    const video = videoRef.current

    if (canvas && video) {
      const context = canvas.getContext("2d")
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      sendFrame(canvas.toDataURL("image/png")) // Send frame as base64
    }
  }

  const sendFrame = async (imageData) => {
    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageData }),
      })

      if (response.ok) {
        const result = await response.json()

        if (!alertSoundRef.current) {
          alertSoundRef.current = new Audio('/public/wake.wav');
        }

        if (result.alert === "All good!") {
          console.log("all good");
          if(wasPlaying.current){            
            createLog(currTime, currStatus)
            setCurrStatus("")
            setCurrTime(null)
          }
          if (isPlaying) {
            setIsPlaying(false)
            alertSoundRef.current.pause()
          }
          wasPlaying.current = false
        } else {
          if (!isPlaying) {
            setIsPlaying(true);
            setCurrTime(Date.now());
            setCurrStatus(result.alert);
            console.log("Alarm Started");
            alertSoundRef.current.play();
            wasPlaying.current = true
          }
            setBlinkCounter(result.blinks);
            console.log(result.blinks);
            if (result.blinks == 50) {
              console.log("alert");
              sendSmsAlert()
            }
        }
      } else {
        console.error("Error sending frame:", response.statusText)
      }
    } catch (error) {
      console.error("Fetch error:", error)
    }
  }

  const sendSmsAlert = () => {
    fetch("http://localhost:5001/api/v1/log/smsAlert", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: 'value',
      }),
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Error sending SMS alert")
        }
      })
      .then((result) => {
        console.log("SMS alert sent:", result)
      })
      .catch((error) => {
        console.error("Error sending SMS alert request:", error)
      })
  }
  const createLog = (time, status) => {
    const logData = {
      time: time,
      type: status,
      date: new Date(time).toISOString().split("T")[0],
      riskFactor: "low",
    }

    console.log("create log ", logData);
    
    fetch('http://localhost:5001/api/v1/log/createLog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData),
      credentials: 'include', // This ensures cookies are sent with the request
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }

  return (
    <div className="webcam-feed">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", height: "auto" }}
      />
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        width="640"
        height="480"
      />
      <p>Webcam feed will display here.</p>
    </div>
  )
}

export default WebcamFeed
