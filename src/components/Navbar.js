import React from 'react';
//css
import "./style.css"
import "tachyons"
//images
//import logo from "../images/logo.svg"
import logo192 from "../images/logo192.png";

export default function Navbar() {
    return (
      <div>
        <nav className="nav_bar tc shadow-2">
            <img className="nav--icon grow" alt="" src={logo192} />
            <h3 className='nav--title'>ReactFacts</h3>
            <h4 className='nav--title--desc'>React Course - Project1</h4>
        </nav>
      </div>
    );
  }
  
 