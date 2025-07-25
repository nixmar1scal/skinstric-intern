import React, { useState } from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import rombuses2 from "../../assets/rombuses2.svg";
import leftbuttom from "../../assets/buttin-icon-shrunk2.svg";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import axios from "axios";

const Intro = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [nameInput, setNameInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const handleNext = async () => {
    if (step === 1 && nameInput.trim() !== "") {
      setStep(2);
    } else if (step === 2 && locationInput.trim() !== "") {
      const payload = { name: nameInput, location: locationInput };

      localStorage.setItem("userData", JSON.stringify(payload));

      try {
        await axios.post(
          `https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne`,
          payload
        );
        navigate("/scan-options");
        console.log("Submission successfully:", payload);
      } catch (error) {
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="to-start">
        <h3 className="analysis">to start analysis</h3>
      </div>

      <div className="intro-main">
        <img src={rombuses2} alt="diamond" className="diamond-img" />

        <div className="intro-text">
          <p className="click-to-type">CLICK TO TYPE</p>
          {step === 1 ? (
            <>
              <input
                type="text"
                placeholder="Introduce Yourself"
                className="intro-input"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Where are you from?"
                className="intro-input"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
              />
            </>
          )}
        </div>
      </div>

      <div className="intro-back" onClick={() => navigate("/")}>
        <img src={leftbuttom} alt="back button" className="back-icon" />
        <span className="back-text">BACK</span>
      </div>
    </motion.div>
  );
};

export default Intro;
