import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {BiInfinite} from "react-icons/bi"
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>DA</h2> 
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/">Home</a></li>
        <li className="p__opensans"><a href="/Work">Work</a></li>
        <li className="p__opensans"><a href="/edu">Education</a></li>
        <li className="p__opensans"><a href="/skills">Skills</a></li>
        <li className="p__opensans"><a href="/hobbies">Hobbies</a></li>
       
      </ul>
     
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <BiInfinite fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/work" onClick={() => setToggleMenu(false)}>Work</a></li>
              <li><a href="/edu" onClick={() => setToggleMenu(false)}>Education</a></li>
              <li><a href="/skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
              <li><a href="#/obbies" onClick={() => setToggleMenu(false)}>Hobbies</a></li>
          
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
