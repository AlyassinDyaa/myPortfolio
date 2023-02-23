import React from 'react'
import "./sections.css"

const sections = () => {
  return (
    <div className='container__section'>
         <h1 >Lets Explore</h1>


        <main class="page-content">

          <div class="card">
            <div class="content">
              <h2 class="title">WORK</h2>
              <p class="copy">Here are some of my recent projects and experiences in the technology industry.</p>
              <button class="btn">Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">EDUCATION</h2>
              <p class="copy">Discover my academic background and qualifications.</p>
              <button class="btn">Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">SKILLS</h2>
              <p class="copy">Unveil my skillset in the skills section of my portfolio website.</p>
              <button class="btn">Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">HOBBIES</h2>
              <p class="copy">Peek into my interests and hobbies in the hobbies section of my portfolio website..</p>
              <button class="btn">Lets Go</button>
            </div>
          </div>

    
      </main>
    </div>
  )
}

export default sections
