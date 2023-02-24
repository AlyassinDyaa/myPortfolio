import React from 'react'
import "./home.css"
import CTA from "../../../Components/callToAction"
import ME from "../../../Assets/dyaa.png"

const home = () => {
  return (
    <div className='container__home' id='work'>
      <div className='home_build'>

        <div className='heading'>
            <h1>D'Yaa Alyassin</h1>
            <h2>  Welcome to my Portfolio</h2>
            <CTA/>
          
        </div>

        <div className='imgD'>
          <img src= {ME} className='imgDyaa' placeholder='dyaa' alt='img'/>
        </div>

      </div>
    </div>
  )
}

export default home
