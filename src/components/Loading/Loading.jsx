import React from 'react'
import "./Loading.css"
import loadingFrame from "../../assets.loading.svg"

function Loading() {
  return (
    <div className='loading-container'>
        <img src={loadingFrame} alt="Loading Frame" className="loading-frame" />
        <p className="loading-text">PREPARING YOUR ANALYSIS ...</p>
    </div>
  )
}

export default Loading