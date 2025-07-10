import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CameraCapture.css";
import rombusIcon from "../../assets/buttin-icon-shrunk2.svg";
import cameraBtn from "../../assets/camera.svg";

function CameraCapture() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        alert("Camera access denied.");
        navigate("/scan-options");
      }
    }

    enableCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [navigate]);

  const handleTakePicture = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageBase64 = canvas.toDataURL("image/png");
    localStorage.setItem("capturedImage", imageBase64);

    navigate("/demographics");
  };

  return (
    <div className="camera-shot-container">
      <video ref={videoRef} autoPlay playsInline className="camera-video" />

      <div className="branding">SKINSTRIC</div>

      <button className="take-pic-btn" onClick={handleTakePicture}>
        <img src={cameraBtn} alt="Take Picture" />
        <span>TAKE PICTURE</span>
      </button>

      <div className="diamond-back" onClick={() => navigate("/scan-options")}>
        <img src={rombusIcon} alt="Back" />
      </div>

      <div className="instructions">
        TO GET BETTER RESULTS MAKE SURE TO HAVE<br />
        ◇ NEUTRAL EXPRESSION ◇ FRONTAL POSE ◇ ADEQUATE LIGHTING
      </div>
    </div>
  );
}

export default CameraCapture;