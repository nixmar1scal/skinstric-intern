import React from 'react'
import "./CameraLoading.css"
import rombusFrame from "../../assets/loading.svg"
import cameraIcon from "../../assets/camera.svg";

function CameraLoading() {
  return (
    <div className="camera-loading-container">
      <img src={rombusFrame} className="loading-diamond" alt="loading shape" />
      <img src={cameraIcon} className="loading-camera" alt="camera icon" />
      <p className="loading-text">SETTING UP CAMERA ...</p>
      <p className="loading-instructions">
        TO GET BETTER RESULTS MAKE SURE TO HAVE <br />
        ○ NEUTRAL EXPRESSION ○ FRONTAL POSE ○ ADEQUATE LIGHTING
      </p>
    </div>
  )
}

export default CameraLoading