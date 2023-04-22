import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {BiInfinite} from "react-icons/bi"
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import { Navigate } from "react-router-dom";


const Navbar = () => {


  const [goToWork, setGoToWork] = React.useState(false);
  const [goToEDU, setGoToEDU] = React.useState(false);
  const [goToSkills, setGoToSkills] = React.useState(false);
  const [goToHobbies, setGoToHobbies] = React.useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  if (goToWork) {
    return <Navigate to="/work" />;
  }
  if (goToEDU) {
    return <Navigate to="/edu" />;
  }
  if (goToSkills) {
    return <Navigate to="/skills" />;
  }
  if (goToHobbies) {
    return <Navigate to="/hobbies" />;
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2 style={{color: "wheat"}}>DA</h2> 
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/">Home</a></li>
        <li className="p__opensans"><a href="/Work" >Work</a></li>
        <li className="p__opensans"><a href="/edu">Education</a></li>
        <li className="p__opensans"><a href="/skills">Skills</a></li>
        <li className="p__opensans"><a href="/hobbies">Hobbies</a></li>
      </ul>
     
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="wheat" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <BiInfinite fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/Work" onClick={() => setToggleMenu(false)}>Work</a></li>
              <li><a href="/edu" onClick={() => setToggleMenu(false)}>Education</a></li>
              <li><a href="/skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li><a href="/hobbies" onClick={() => setToggleMenu(false)}>Hobbies</a></li>
          
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
