import React from 'react'
import './Header.css'
import skinstric from '../../assets/Skinstric.svg'

function Header() {
  return (
    <header className='header'>
        <div className="header-content">
            <div className="logo-section">
                <img className='logo-img' src={skinstric} alt="Skinstric Logo" />
                <span className="intro-badge">[ INTRO ]</span>
            </div>
            <div className="nav-section">
                <button className='code-btn'>ENTER CODE</button>
            </div>
        </div>
    </header>
  )
}

export default Header