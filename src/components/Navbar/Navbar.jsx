import React from "react";
import './Navbar.css'
import skinstric from '../../assets/Skinstric.svg'

function Navbar() {
  return (
    <div className="navbar-content">
      <div className="logo-section">
        <img className="logo-img" src={skinstric} alt="Skinstric Logo" />
        <span className="intro-badge">[ INTRO ]</span>
      </div>
    </div>
  );
}

export default Navbar;