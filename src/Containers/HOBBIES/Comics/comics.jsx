import React from 'react'
import "./comics.css"

import orephic from "../../../Assets/infinites/orephic.png"
import orephicB from "../../../Assets/infinites/o2.png"

import unison from "../../../Assets/infinites/Unison.png"
import unisonB from "../../../Assets/infinites/unisonB.png"

const comics = () => {
  return (
    <div className='container__comics'>
          <a href="http://dyaaalyassin.com" alt="Mythrill" target="_blank">

              <div class="cardC">
                <div class="wrapper">
                  <img src={unisonB} class="cover-image" />
                </div>
                {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
                <h1>Unison</h1>
                <img src={unison} class="character" />
              </div>
          </a>


          <a href="http://dyaaalyassin.com" alt="Mythrill" target="_blank">

            <div class="cardC">
              <div class="wrapper">
                <img src={orephicB} class="cover-image" />
              </div>
              {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
              <h1>Orephic</h1>
              <img src={orephic} class="character" />
            </div>
            
          </a>
          
    </div>




  )
}

export default comics
