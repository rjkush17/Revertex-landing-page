 import React from 'react'
 import './Footer.css'
 import logo from './logotransperant.png'
 import {FaFacebook} from 'react-icons/fa'
 import {FaXTwitter} from 'react-icons/fa6'
 import {BsLinkedin} from 'react-icons/bs'
 import {AiFillInstagram} from 'react-icons/ai'
 
 function Footer() {
   return (
     <>
     <footer id='footer'>
            <div className="f-logo">
                <img src={logo} alt="" />
            </div>
            <div className="f-address">
                <h5>Let's Connect</h5>
                <p>4517 Washington Ave. Manchester, Kenlucky 39495</p>
                <p>micthal@example.com</p>
                <p>(603) 555-0123</p>
            </div>
           <div className="links">
            <h5>Links</h5>
            <p>Testimonials</p>
            <p>Pricing</p>
            <p>Why us</p>
           </div>
           <div className="follow">
           <h5>Follow Us</h5>
            <div className="social-logo">
                <FaFacebook className='social-icon'/>
                <FaXTwitter className='social-icon'/>
                <BsLinkedin className='social-icon'/>
                <AiFillInstagram className='social-icon'/>
            </div>
           </div>
     </footer>
     </>
   )
 }
 
 export default Footer