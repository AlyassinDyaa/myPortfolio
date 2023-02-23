import React from 'react'
import "./about.css"
import IMG from "../../../Assets/ab.jpg"

const about = () => {
  return (
    <div className="container" id='about'>
      <div className="image-container">
        <img src={IMG} alt="Profile" />
      </div>

      <div className="content-container">
        <h1 className="title" style={{fontSize: 60, opacity: 80}}>About Me</h1>
        <h2 className="title">Motivation</h2>
        <p className="description">
        " Dynamic and motivated individual 
        that builds and manages projects from concept
         to designing all the way to completion.
        I utilize my experience to always increase my 
        knowledge whilst offering value. I am seeking a role of a software developer. "
        </p>
      </div>

  </div>
  )
}

export default about
