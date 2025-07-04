import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import rombusFrame from "../../assets/rombuses2.svg";
import cameraIcon from "../../assets/camera.svg";
import galleryIcon from "../../assets/gallery.svg";
import leftbuttom from "../../assets/buttin-icon-shrunk2.svg";
import Navbar from "../../components/Navbar/Navbar";
import titleAI from "../../assets/title.svg";
import titleAI2 from "../../assets/title2.svg";
import axios from "axios";
import "./ScanOptions.css";

function ScanOptions() {
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const handleGalleryClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    navigate("/loading");

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result.split(",")[1];

      try {
        const response = await axios.post(
          "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
          { Image: base64String }
        );
        localStorage.setItem(
          "demographicsData",
          JSON.stringify(response.data.data)
        );
        navigate("/demographics");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="scan-optiions-container">
      <Navbar />
      <div className="to-start">
        <h3 className="analysis">to start analysis</h3>
      </div>

      <div className="options-wrapper">
        <div className="option-block">
          <img src={rombusFrame} alt="" className="rombus-frame" />
          <div className="icon-content">
            <img src={cameraIcon} alt="" className="option-icon" />
          </div>
          <img src={titleAI} alt="" className="scan-access" />
        </div>

        <div className="option-block" onClick={handleGalleryClick}>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <img src={rombusFrame} alt="" className="rombus-frame" />
          <div className="icon-content">
            <img src={galleryIcon} alt="" className="option-icon" />
          </div>
          <img src={titleAI2} alt="" className="gallery-access" />
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
