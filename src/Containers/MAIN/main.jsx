import React from 'react'
import HOME from "../../Containers/MAIN/Home/home"
import ABOUT from "../../Containers/MAIN/About/about"
import SECTION from "../../Containers/MAIN/Sections/sections"
import NAV from "../../Components/FloatNav/Nav"
import NAVMENU from "../../Components/NavMENU/Navbar"

import FOOT from "../FOOT/foot"
import "./main.css"


const main = () => {
  return (
    <div className='container__main'>
        <NAVMENU/>
        <NAV/>
        <HOME/>
        <ABOUT/>
        <SECTION/>
        
        <div className='container__foot'>
          <FOOT/>
        </div>
        
    </div>
  )
}

export default main
