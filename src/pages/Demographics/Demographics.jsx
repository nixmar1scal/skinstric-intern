import React, { useEffect, useState } from "react";
import "./Demographics.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import leftbuttom from "../../assets/buttin-icon-shrunk2.svg";

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
      <Navbar />
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
        <div className="confidece-circle">
          <div className="percentage">
            {(selectedConfidence * 100).toFixed(0)}%
          </div>
        </div>
        <p className="disclaimer">
          If A.I. estimate is wrong, select the correct one.
        </p>
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
        <div className="buttons">
          <button className="reset-btn" onClick={handleReset}>
            RESET
          </button>
          <button className="confirm-btn">CONFIRM</button>
        </div>
      </div>

      <div className="back-button" onClick={() => navigate("/")}>
        <img src={leftbuttom} alt="back button" />
        <span className="back-text">BACK</span>
      </div>
    </div>
  );
}

export default Demographics;