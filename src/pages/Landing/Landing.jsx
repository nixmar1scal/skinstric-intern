import React, { useState, useNavigate } from "react";
import "./Landing.css";
import Header from "../../components/Header/Header";
import leftbutton from "../../assets/buttin-icon-shrunk2.svg";
import rightbutton from "../../assets/buttin-icon-shrunk.svg";
import rectangleRight from "../../assets/Rectangle 2778.svg";
import rectangleLeft from "../../assets/Rectangle 2779.png";
import rombuses from "../../assets/rombuses.svg";

function Landing() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="landing-container">
      <Header />

      {!isHovered ? (
        <img
          src={rectangleRight}
          alt="Right Outline"
          className="rectangle right"
        />
      ) : (
        <img src={rombuses} alt="rombuses outline" className="rombus-outline" />
      )}

      {!isHovered && (
        <>
          <img
            src={rectangleLeft}
            alt="Left Outline"
            className="rectangle left"
          />
          <img
            src={rectangleLeft}
            alt="Left Outline"
            className="rectangle left"
          />
          <div className="side-button side-button-left">
            <div className="button-content">
              <img
                className="button-icon"
                src={leftbutton}
                alt="Discover A.I. button"
              />
              <span className="button-text">DISCOVER A.I</span>
            </div>
          </div>
        </>
      )}

      <div className="side-button side-button-right">
        <div className="button-content">
          <span className="button-text">TAKE TEST</span>
          <div
            onClick={() => navigate("/intro")}
            className="button-icon-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={rightbutton}
              alt="rombus icon"
              className="button-icon rombus"
            />
          </div>
        </div>
      </div>

      <div className={`title-container ${isHovered ? "shift-left" : ""}`}>
        <h1 className="title-main">Sophisticated</h1>
        <h2 className="title-sub">Skincare</h2>
      </div>

      <div className="landing-description">
        <p>SKINSTRIC DEVELOPED AN A.I. THAT CREATES</p>
        <p>A HIGHLY-PERSONALISED ROUTINE TAILORED TO</p>
        <p>WHAT YOUR SKIN NEEDS.</p>
      </div>
    </div>
  );
}

export default Landing;
