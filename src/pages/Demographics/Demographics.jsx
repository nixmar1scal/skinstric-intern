import React, { useEffect, useState } from "react";
import "./Demographics.css";
import { useNavigate } from "react-router-dom";
import leftbuttom from "../../assets/buttin-icon-shrunk2.svg";
import skinstric from "../../assets/Skinstric.svg";

function Demographics() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("race");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedConfidence, setSelectedConfidence] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("demographicsData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setData(parsed);
      const topEntry = getTopEntry(parsed[selectedCategory]);
      setSelectedValue(topEntry.label);
      setSelectedConfidence(topEntry.value);
    } else {
      console.warn("No data found in localStorage");
    }
  }, [selectedCategory]);

  const getTopEntry = (categoryObj) => {
    const entries = Object.entries(categoryObj || {});
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const [label, value] = sorted[0] || ["", 0];
    return { label, value };
  };

  const handleSelect = (label, value) => {
    setSelectedValue(label);
    setSelectedConfidence(value);
  };

  const handleReset = () => {
    const topEntry = getTopEntry(data[selectedCategory]);
    setSelectedValue(topEntry.label);
    setSelectedConfidence(topEntry.value);
  };

  if (!data) return <div>Loading...</div>;

  const sortedEntries = Object.entries(data[selectedCategory]).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="demographics-container">
      <div className="navbar-content">
        <div className="logo-section">
          <img className="logo-img" src={skinstric} alt="Skinstric Logo" />
          <span className="intro-badge">[ ANALYSIS ]</span>
        </div>
      </div>
      
      <div className="title-content">
        <div className="analys">A.I. ANALYSIS</div>
        <div className="title">DEMOGRAPHICS</div>
        <div className="sub-title">PREDICTED RACE & AGE</div>
      </div>

      <div className="main-content">
        <div className="content-columns">
          <div className="sidebar">
            <div className="main-label">{selectedValue.toUpperCase()}</div>
            <div
              className={`category-tab ${
                selectedCategory === "race" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("race")}
            >
              RACE
            </div>
            <div
              className={`category-tab ${
                selectedCategory === "age" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("age")}
            >
              AGE
            </div>
            <div
              className={`category-tab ${
                selectedCategory === "gender" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("gender")}
            >
              GENDER
            </div>
          </div>

          <div className="center-panel">
            <div className="selected-text">{selectedValue}</div>
            <div className="confidence-circle">
              <div className="percentage">
                {(selectedConfidence * 100).toFixed(0)}%
              </div>
            </div>
          </div>

          <div className="confidence-list">
            <div className="list-header">
              <span>{selectedCategory.toUpperCase()}</span>
              <span>A.I. CONFIDENCE</span>
            </div>
            {sortedEntries.map(([label, value]) => (
              <div
                key={label}
                className={`confidence-item ${
                  label === selectedValue ? "selected" : ""
                }`}
                onClick={() => handleSelect(label, value)}
              >
                <span>
                  {label
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
                <span>{(value * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-content">
          <div
            className="back-button"
            onClick={() => navigate("/scan-options")}
          >
            <img src={leftbuttom} alt="back button" />
            <span className="back-text">BACK</span>
          </div>

          <p className="disclaimer">
            If A.I. estimate is wrong, select the correct one.
          </p>

          <div className="buttons">
            <button className="reset-btn" onClick={handleReset}>
              RESET
            </button>
            <button className="confirm-btn">CONFIRM</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demographics;
