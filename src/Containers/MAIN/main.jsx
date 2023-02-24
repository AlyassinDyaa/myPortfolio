import React from 'react'
import HOME from "../../Containers/MAIN/Home/home"
import ABOUT from "../../Containers/MAIN/About/about"
import SECTION from "../../Containers/MAIN/Sections/sections"
import NAV from "../../Components/FloatNav/Nav"
import NAVMENU from "../../Components/NavMENU/Navbar"

import FOOT from "../FOOT/foot"


const main = () => {
  return (
    <div>
        <NAVMENU/>
        <NAV/>
        <HOME/>
        <ABOUT/>
        <SECTION/>
        <FOOT/>
    </div>
  )
}

export default main
