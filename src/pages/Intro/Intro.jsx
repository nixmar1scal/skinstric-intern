import React from 'react'
import { useNavigate } from 'react-router-dom'
import rombuses2 from '../../assets/rombuses2.svg'

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className='intro-container'>
        <Header />
        <div className="to-start">
            <h3 className='analysis'>to start analysis</h3>
        </div>

        <div className="intro-main">
            <img src="" alt="" />
            <div className="intro-text">
                <p className="click-to-type">CLICK TO TYPE</p>
                <h1 className="intro-title">Introduce Yourself</h1>
            </div>
        </div>

        <div className="intro-back" onClick={() => navigate("/")}>
            <img src={rombuses2} alt="" className="back-icon" />
            <span className="back-text">BACK</span>
        </div>
    </div>
  )
}

export default Intro