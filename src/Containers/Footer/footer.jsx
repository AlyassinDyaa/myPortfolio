import React from 'react'
import "./footer.css"
import TWITTER from "../../Assets/twitter.png"
import {ImTwitter} from "react-icons/im"

const footer = () => {
  return (
    <div className='container__footer'>
      
        <div class="title-card">
           <h2 class="title-card__title">Join Our Newsletter</h2>
           <p class="title-card__subtitle">Stay updated with the latest trends in web design.</p>
        </div>
        <div class="card">
          <span class="card__title">Subscribe</span>
          <p class="card__content">Get fresh web design resources delivered straight to your inbox every week.
          </p>
          <div class="card__form">
              <input placeholder="Your Email" type="text"/>
              <button class="sign-up"> Sign up</button>
          </div>
        </div>


    </div>
  )
}

export default footer
