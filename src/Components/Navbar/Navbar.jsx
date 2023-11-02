import React, { useState } from 'react'
import logo from './logotransperant.png'
import './Navbar.css'
import { GiHamburgerMenu} from 'react-icons/gi'
import {FiArrowUpRight} from 'react-icons/fi'

function navbar() {

  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
      setOpen(!open)
  }

  return (
   <>
    <nav className={`navbar ${open ? "isOpen" : ""}`}>
      <GiHamburgerMenu className='ham' onClick={handleNavbar}/>
        <div className="logo">
          
            <img src={logo} alt="" />
        </div>

        <ul>
            <li>Why US</li>
            <li>Case Studies</li>
            <li>testimonials</li>
            <li>FAQ</li>
        </ul>

        <button id='button'>let's Talk <FiArrowUpRight className='arrow'/> </button>
    </nav>
   </>
  )
}

export default navbar