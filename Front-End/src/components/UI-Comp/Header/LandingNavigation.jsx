import React from 'react'
import './Navigation.css'
const LandingNavigation = () => {
  return (

<nav>   
        <ul>
            <li>
                <a href="/home">
                <img src='logo.png' alt="Logo"></img>
            </a>
            </li>
            <li>
                <a href="/">
                <img src="/switch.png">

                </img>
                    </a>
            </li>
            <li>
                <a href="/cart">
                <img src="/trolley.png">

                </img>
                    </a>
            </li>
            <li>
                <a href="#footer">Contact Us</a>
            </li>
            <li>
              <a href="/Content">Content</a>
            </li>
            <li className="right">
              <a href="/home">Home</a>
            </li>
            </ul>
         </nav>


  )
}

export default LandingNavigation