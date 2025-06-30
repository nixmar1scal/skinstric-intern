import React from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import rombuses2 from "../../assets/rombuses2.svg";
import leftbuttom from "../../assets/buttin-icon-shrunk2.svg";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";

const Intro = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    

  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <div className="to-start">
        <h3 className="analysis">to start analysis</h3>
      </div>

      <div className="intro-main">
        <img src={rombuses2} alt="diamond" className="diamond-img" />

        <div className="intro-text">
          <p className="click-to-type">CLICK TO TYPE</p>
          <input
            type="text"
            placeholder="Introduce Yourself"
            className="intro-input"
          />
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
