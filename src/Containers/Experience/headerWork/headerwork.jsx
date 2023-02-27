import React from 'react'
import "./headerwork.css"
import { motion } from "framer-motion"


const Headerwork = () => {

 const [isActive, setIsActive] = React.useState(false);

const handleButtonClick = () => {
    setIsActive(!isActive);
  }
  return (
    <header>
        <div class='container__work-header'>
            <div class="overlay">
            <h1>Start Exploring</h1>
            <h3>Reasons for Choosing ME</h3>
            <p>Explore my portfolio to see examples of my work and learn more about my skills and expertise.
                From web design to branding and beyond, my portfolio showcases a range of projects that highlight my passion and creativity.
                Take a closer look at some of the projects I've worked on and see how I've helped clients achieve their goals through effective design and strategy.</p>
            
            <motion.div
             className="block"
             onClick={() => setIsActive(!isActive)}
             animate={{
               rotate: isActive ? 90 : 0
             }}>
                 <button>READ MORE</button>
            </motion.div>
            
            </div>
        </div>
    </header>
  )
}

export default Headerwork
