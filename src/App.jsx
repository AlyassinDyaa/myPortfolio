import React from 'react'
import HOME from "./Containers/Home/home"
import ABOUT from "./Containers/About/about"
import WORK from "./Containers/Work/work"
import SKILLS from "./Containers/Skills/skills"
import CONTACT from "./Containers/Contact/contact"
import FOOTER from "./Containers/Footer/footer"

import NAV from "./Components/FloatNav/Nav"
import NAVMENU from "./Components/NavMENU/Navbar"

const App = () => {
  return (
    <div>
      <NAVMENU/>
      <NAV/>
      <HOME/>
      <ABOUT/>
      <WORK/>
      <SKILLS/>
      <CONTACT/>
      <FOOTER/>
    </div>
  )
}

export default App
