import React from 'react';
import "./style.css"
//import logo from "../images/logo.svg"


export default function Main() {
    return (
      <div>
        <body>
          <div className="body-container">
           <h1 className="body--title">Fun facts about React</h1>
            <ul className="body--text">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

           </div> 
        </body>
      </div>
    );
  }
  