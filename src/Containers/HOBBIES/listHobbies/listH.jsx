import React from 'react'
import "./listH.css"
import IMG0  from "../../../Assets/hobbiesList/swimming.jpg"
import IMG1  from "../../../Assets/hobbiesList/tkd.jpg"
import IMG2  from "../../../Assets/hobbiesList/comics.jpg"
import IMG3  from "../../../Assets/hobbiesList/drawing.jpg"
import IMG4  from "../../../Assets/hobbiesList/writing.jpg"
import IMG5  from "../../../Assets/hobbiesList/running.jpg"




const listH = () => {
  return (
  <div className='hobbies'>
            <div className='container__hobbiesList'>
                <h1>HELLO</h1>
            </div>


    <div className="listHobbies__container">
           
            <div className="listHobbies__container-card">
                <img src={""} alt="swimming" placeholder="img" className="listHobbies_img" />
                <div className="listHobbies__container-card-text">
                    <div className="listHobbies__container-card-header">Swimming</div>
                    <div className="listHobbies__container-card-subheader">I love to swim!</div>
                </div>
            </div>

            <div className="listHobbies__container-card">
                <img src={""} alt="taekwondo" placeholder="img" className="listHobbies_img" />
                <div className="listHobbies__container-card-text">
                    <div className="listHobbies__container-card-header">Taekwondo</div>
                    <div className="listHobbies__container-card-subheader">I practice taekwondo.</div>
                </div>
            </div>

            <div className="listHobbies__container-card">
                <img src={""} alt="reading" placeholder="img" className="listHobbies_img" />
                <div className="listHobbies__container-card-text">
                    <div className="listHobbies__container-card-header">Reading</div>
                    <div className="listHobbies__container-card-subheader">I love to read books.</div>
                </div>
            </div>

            <div className="listHobbies__container-card">
                <img src={""} alt="reading" placeholder="img" className="listHobbies_img" />
                <div className="listHobbies__container-card-text">
                    <div className="listHobbies__container-card-header">Reading</div>
                    <div className="listHobbies__container-card-subheader">I love to read books.</div>
                </div>
            </div>

            <div className="listHobbies__container-card">
                <img src={""} alt="reading" placeholder="img" className="listHobbies_img" />
                <div className="listHobbies__container-card-text">
                    <div className="listHobbies__container-card-header">Reading</div>
                    <div className="listHobbies__container-card-subheader">I love to read books.</div>
                </div>
            </div>

            <div className="listHobbies__container-card">
                <img src={""} alt="running" placeholder="img" className="listHobbies_img" />
                <div className="listHobbies__container-card-text">
                    <div className="listHobbies__container-card-header">Running</div>
                    <div className="listHobbies__container-card-subheader">I love to read books.</div>
                </div>
            </div>
    </div>
  </div>
    
  )
}

export default listH
