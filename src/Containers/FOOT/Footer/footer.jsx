import React from 'react'
import "./footer.css"
import TWITTER from "../../../Assets/twitter.png"
import {ImTwitter} from "react-icons/im"

const footer = () => {
  return (
    <div class="footer-basic">
    <footer>
        <div class="social">
          <a href="#"><i class="icon ion-social-instagram"></i></a>
          <a href="#"><i class="icon ion-social-snapchat"></i></a>
          <a href="#"><i class="icon ion-social-twitter"></i></a>
          <a href="#"><i class="icon ion-social-facebook"></i></a>
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
