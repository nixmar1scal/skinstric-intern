import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnalysisOverview.css"
import Navbar from "../../components/Navbar/Navbar";
import leftArrow from "../../assets/buttin-icon-shrunk2.svg";
import rightArrow from "../../assets/buttin-icon-shrunk.svg";

function AnalysisOverview() {
  const navigate = useNavigate();

  return (
    <div className="analysis-overview-container">
        <Navbar />
  <div className="top-left">
    <div className="analysis-heading">A. I. ANALYSIS</div>
    <p className="description">
      A.I. has estimated the following. <br />
      Fix estimated information if needed.
    </p>
  </div>

  <div className="diamond-ring"></div>

  <div className="diamond-navigation">
    <div className="diamond-item highlight" onClick={() => navigate("/demographics")}>
      <div className="diamond-item-content">Demographics</div>
    </div>
    <div className="diamond-item">
      <div className="diamond-item-content">Cosmetic<br />Concerns</div>
    </div>
    <div className="diamond-item">
      <div className="diamond-item-content">Skin Type<br />Details</div>
    </div>
    <div className="diamond-item">
      <div className="diamond-item-content">Weather</div>
    </div>
  </div>

  <div className="nav-left" onClick={() => navigate("/scan-options")}>
    <img src={leftArrow} alt="Back" />
    <span>Back</span>
  </div>

  <div className="nav-right" onClick={() => navigate("/summary")}>
    <img src={rightArrow} alt="Next" />
    <span>Get Summary</span>
  </div>
</div>

  );
}

export default AnalysisOverview;