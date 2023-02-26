import React from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom"



import NAV from "./Components/FloatNav/Nav"
import NAVMENU from "./Components/NavMENU/Navbar"

import WORK from "./Containers/Experience/exp"
import EDUCATION from "./Containers/Education/e"
import SKILLS from "./Containers/Skills/skills"
import HOBBIES from "./Containers/HOBBIES/hobbies"
import MAIN from "./Containers/MAIN/main"

import COMICS from "./Containers/HOBBIES/Comics/comics"
import FOOT from "./Containers/FOOT/foot"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MAIN />} />
          <Route path="/work" element={<WORK />} />
          <Route path="/edu" element={<EDUCATION />} />
          <Route path="/skills" element={<SKILLS />} />
          <Route path="/hobbies" element={<HOBBIES />} />
        </Routes>
      </Router>
      
      
      
        
    </div>
  )
}

export default App
