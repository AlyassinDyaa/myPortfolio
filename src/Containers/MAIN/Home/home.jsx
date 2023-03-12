import React from 'react'
import "./home.css"
import CTA from "../../../Components/callToAction"
import ME from "../../../Assets/dyaa.png"
import { motion } from "framer-motion"
 
const home = () => {
  return (
    <div className='container__home gradient' id='work'>
      <div className='home_build'>
        
        <motion.div 
          className='heading'
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}>
            <h1>D'Yaa Alyassin</h1>
            <h2>  Welcome to my Portfolio</h2>
            <CTA/>
          
        </motion.div>

        <motion.div 
          className='imgD'
          initial={{  y:1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
      >
          <img src= {ME} className='imgDyaa' placeholder='dyaa' alt='img'/>
        </motion.div>

      </div>
    </div>
  )
}

export default home
