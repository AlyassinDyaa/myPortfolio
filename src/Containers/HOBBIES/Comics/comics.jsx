import React from 'react'
import "./comics.css"
import orephic from "../../../Assets/infinites/orephic.png"
import orephicB from "../../../Assets/infinites/o.PNG"

const comics = () => {
  return (
    <div className='container__comics'>
          <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">

              <div class="cardC">
                <div class="wrapper">
                  <img src={orephicB} class="cover-image" />
                </div>
                {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
                <img src={orephic} class="character" />
              </div>
          </a>

    </div>




  )
}

export default comics
