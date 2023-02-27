import React from 'react'

import NAVMenu from "../../Components/NavMENU/Navbar"
import HEADER from "./headerWork/headerwork"
import WORK from "./Work/work"
import Foot from "../FOOT/foot"

const exp = () => {
  return (
    <div id='work'>
     <NAVMenu/>
     <HEADER/>
     <WORK/>
     <Foot/>
    </div>
  )
}

export default exp
