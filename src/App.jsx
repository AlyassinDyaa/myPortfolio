import React from 'react'
import HOME from "./Containers/MAIN/Home/home"
import ABOUT from "./Containers/MAIN/About/about"
import WORK from "./Containers/Experience/Work/work"
import SKILLS from "./Containers/MAIN/Skills/skills"
import CONTACT from "./Containers/FOOT/Contact/contact"
import FOOTER from "./Containers/FOOT/Footer/footer"
import SECTION from "./Containers/MAIN/Sections/sections"

import NAV from "./Components/FloatNav/Nav"
import NAVMENU from "./Components/NavMENU/Navbar"

const App = () => {
  return (
    <div>
      <NAVMENU/>
      <NAV/>
      <HOME/>
      <ABOUT/>
      
      <SECTION/>

      <CONTACT/>
      <FOOTER/>
    </div>
  )
}

export default App
