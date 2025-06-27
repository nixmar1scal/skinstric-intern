import React from "react";
import "./Landing.css";
import Header from "../../components/Header/Header";
import leftbutton from "../../assets/buttin-icon-shrunk.png";
import rightbutton from "../../assets/buttin-icon-shrunk.svg";

function Landing() {
  return (
    <div className="landing-container">
      <Header />
      <div className="side-button side-button-left">
        <div className="button-content">
          <img className="button-icon" src={leftbutton} alt="Discover A.I. button" />
          <span className="button-text">DISCOVER A.I</span>
        </div>
      </div>

      <div className="side-button side-button-right">
        <div className="button-content">
          <span className="button-text">TAKE TEST</span>
          <img className="button-icon" src={rightbutton} alt="Take Test" />
        </div>
      </div>

      <div className="title-container">
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
