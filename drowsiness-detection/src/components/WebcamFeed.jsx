// // src/components/WebcamFeed.jsx
// import React, { useEffect, useRef } from 'react';

// function WebcamFeed({ onAlert }) {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const startWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: false,
//         });
//         videoRef.current.srcObject = stream;
//       } catch (err) {
//         console.error("Error accessing webcam: ", err);
//       }
//     };

//     startWebcam();

//     intervalRef.current = setInterval(() => {
//       captureFrame();
//     }, 3000); // Capture every 3 seconds

//     return () => {
//       clearInterval(intervalRef.current);
//       if (videoRef.current.srcObject) {
//         const tracks = videoRef.current.srcObject.getTracks();
//         tracks.forEach(track => track.stop());
//       }
//     };
//   }, []);

//   const captureFrame = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;

//     if (canvas && video) {
//       const context = canvas.getContext('2d');
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);
//       sendFrame(canvas.toDataURL('image/png')); // Send frame as base64
//     }
//   };

//   const sendFrame = async (imageData) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/upload', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ image: imageData }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("Frame sent successfully:", result);
//       } else {
//         console.error("Error sending frame:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   return (
//     <div className="webcam-feed">
//       <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />
//       <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
//       <p>Webcam feed will display here.</p>
//     </div>
//   );
// }

// export default WebcamFeed;
// src/components/WebcamFeed.jsx

import React, { useEffect, useRef } from 'react';

function WebcamFeed() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    startWebcam();

    intervalRef.current = setInterval(() => {
      captureFrame();
    }, 100); // Capture every 0.1 seconds

    return () => {
      clearInterval(intervalRef.current);
      if (videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const captureFrame = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      sendFrame(canvas.toDataURL('image/png')); // Send frame as base64
    }
  };

  const sendFrame = async (imageData) => {
    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.alert) {
          alert(result.alert); // Show alert based on backend response
        }
      } else {
        console.error("Error sending frame:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="webcam-feed">
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
      <p>Webcam feed will display here.</p>
    </div>
  );
}

export default WebcamFeed;
