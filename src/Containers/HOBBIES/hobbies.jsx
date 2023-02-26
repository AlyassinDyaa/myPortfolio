import React from 'react'
import HEADER from "./head/head"
import NAVMenu from "../../Components/NavMENU/Navbar"

import WORK from "../Experience/exp"
import Foot from "../FOOT/foot"
import COMICS from "./Comics/comics"



const hobbies = () => {
  return (
    <div id='hobbies'>
      <NAVMenu/>
      <HEADER/>
      <COMICS/>
      
      <Foot/>
    </div>
  )
}

export default hobbies