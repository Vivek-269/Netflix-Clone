import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [darknav, setdarkNav] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setdarkNav(true);
        } else {
          setdarkNav(false);
        }
      });

    return (
        <div className={`nav sticky-top ${darknav && 'darkNav'}`}>
            <img src="./Netflix_logo.png" alt="NetflixLogo" height='30px' />
            <img src="./blocklogo.png" alt="blocklogo" height='30px' />
        </div>
    )
}

export default Navbar
