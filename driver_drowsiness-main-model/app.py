from flask import Flask, request, jsonify
from imutils import face_utils
from scipy.spatial import distance as dist
import cv2
import dlib
import numpy as np
import base64
import io
from PIL import Image
from flask_cors import CORS  # Import CORS
import time  # Import for handling duration

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the face detector and shape predictor
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')

# Constants
EYE_AR_THRESH = 0.25
MOUTH_AR_THRESH = 0.7
CLOSED_EYE_DURATION_THRESH = 3  # Time (in seconds) to trigger alert after prolonged eye closure

blink_counter = 0
yawn_counter = 0
alarm_on = False
start_time = 0

def eye_aspect_ratio(eye):
    A = dist.euclidean(eye[1], eye[5])
    B = dist.euclidean(eye[2], eye[4])
    C = dist.euclidean(eye[0], eye[3])
    ear = (A + B) / (2.0 * C)
    return ear

def mouth_aspect_ratio(mouth):
    A = dist.euclidean(mouth[3], mouth[9])
    B = dist.euclidean(mouth[2], mouth[10])
    C = dist.euclidean(mouth[4], mouth[8])
    D = dist.euclidean(mouth[0], mouth[6])
    mar = (A + B + C) / (3.0 * D)
    return mar

@app.route('/api/upload', methods=['POST'])
def upload():
    global blink_counter, yawn_counter, alarm_on, start_time

    data = request.json
    image_data = data['image']

    # Convert base64 string to image
    image_data = image_data.split(',')[1]  # Remove the metadata
    image = Image.open(io.BytesIO(base64.b64decode(image_data)))
    frame = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    rects = detector(gray, 0)

    for rect in rects:
        shape = predictor(gray, rect)
        shape = face_utils.shape_to_np(shape)

        leftEye = shape[face_utils.FACIAL_LANDMARKS_IDXS["left_eye"][0]:face_utils.FACIAL_LANDMARKS_IDXS["left_eye"][1]]
        rightEye = shape[face_utils.FACIAL_LANDMARKS_IDXS["right_eye"][0]:face_utils.FACIAL_LANDMARKS_IDXS["right_eye"][1]]

        leftEAR = eye_aspect_ratio(leftEye)
        rightEAR = eye_aspect_ratio(rightEye)
        ear = (leftEAR + rightEAR) / 2.0

        mouth = shape[face_utils.FACIAL_LANDMARKS_IDXS["mouth"][0]:face_utils.FACIAL_LANDMARKS_IDXS["mouth"][1]]
        mar = mouth_aspect_ratio(mouth)

        # Eye closure detection with duration
        if ear < EYE_AR_THRESH:
            if blink_counter == 0:  # Start timer when eyes first close
                start_time = time.time()
            blink_counter += 1

            # If eyes are closed for more than the threshold duration
            # if time.time() - start_time >= CLOSED_EYE_DURATION_THRESH:
            if blink_counter >= 3:
                alarm_on = True
                return jsonify({"alert": "Eyes Closed!"})
        else:
            blink_counter = 0  # Reset blink counter when eyes open
            alarm_on = False

        # Yawning detection
        if mar > MOUTH_AR_THRESH:
            yawn_counter += 1
            if yawn_counter >= 3:  # Threshold for yawning alert
                return jsonify({"alert": "Yawning detected!"})

    # return jsonify({"alert": "All good!"})
    return ""

if __name__ == '__main__':
    app.run(debug=True)
