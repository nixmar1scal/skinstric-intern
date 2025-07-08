import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Assets
import rombusFrame from "../../assets/rombuses2.svg";
import cameraIcon from "../../assets/camera.svg";
import galleryIcon from "../../assets/gallery.svg";
import leftbuttom from "../../assets/buttin-icon-shrunk2.svg";
import titleAI from "../../assets/title.svg";
import titleAI2 from "../../assets/title2.svg";
// Components
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
// Styles
import "./ScanOptions.css";

// Constants
const API_URL = "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo";
const MAX_FILE_SIZE = 2 * 1024 * 1024;

function ScanOptions() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File too large. Maximum size allowed is 2MB.");
      return;
    }

    setIsLoading(true);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result;

      try {
        const response = await axios.post(
          API_URL,
          { image: base64String },
          { headers: { "Content-Type": "application/json" } }
        );

        localStorage.setItem("demographicsData", JSON.stringify(response.data.data));
        setTimeout(() => navigate("/demographics"), 1000);
      } catch (error) {
        console.error("Upload failed:", error.response?.data || error.message);
        alert("Image upload failed. Please try again.");
        setIsLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="scan-options-container">
      <Navbar />

      <div className="to-start">
        <h3 className="analysis">to start analysis</h3>
      </div>

      <div className="options-wrapper">
        {/* Camera Option (Not implemented yet) */}
        <div className="option-block">
          <img src={rombusFrame} alt="rombus frame" className="rombus-frame" />
          <div className="icon-content">
            <img src={cameraIcon} alt="camera icon" className="option-icon" />
          </div>
          <img src={titleAI} alt="AI title" className="scan-access" />
        </div>

        {/* Gallery Upload Option */}
        <div className="option-block" onClick={handleGalleryClick}>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <img src={rombusFrame} alt="rombus frame" className="rombus-frame" />
          <div className="icon-content">
            <img src={galleryIcon} alt="gallery icon" className="option-icon" />
          </div>
          <img src={titleAI2} alt="Gallery AI title" className="gallery-access" />
        </div>
      </div>

      <div className="intro-back" onClick={() => navigate("/")}>
        <img src={leftbuttom} alt="back button" className="back-icon" />
        <span className="back-text">BACK</span>
      </div>
    </div>
  );
}

export default ScanOptions;
