import React from 'react'
import "./footer.css"
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion"



const footer = () => {
  return (
    <div class="footer-basic">
    <footer>
        <div class="social">
            <div className="social-media-container">
              <motion.a href="https://www.facebook.com/dyaa.alyassin/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaFacebook className="social-media-icon-FACE" />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/d-yaa-a-1b56b9144/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaLinkedin className="social-media-icon-LINK" />
              </motion.a>
              <motion.a href="https://github.com/AlyassinDyaa" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaGithub className="social-media-icon-GIT" />
              </motion.a>
              <motion.a href="https://www.instagram.com/dyaa_alyassin/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
                <FaInstagram className="social-media-icon-INSTA" />
              </motion.a>
        </div>
        </div>
        
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#work">Work</a></li>
            <li class="list-inline-item"><a href="#education">Education</a></li>
            <li class="list-inline-item"><a href="#skills">Skills</a></li>
            <li class="list-inline-item"><a href="#hobbies">Hobbies</a></li>
        </ul>
        <p class="copyright">Delicate Solutions 2023 @D'Yaa Alyassin </p>
    </footer>
</div>
  )
}

export default footer
