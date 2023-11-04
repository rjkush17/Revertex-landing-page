import React from 'react'
import {HiMiniCheckBadge} from 'react-icons/hi2'
import { FiArrowUpRight } from "react-icons/fi";

function PricingCard({Data}) {
  return (
    <>
    <div className="pricingcard">
        <p>{Data.plan}</p>
        <h5>{Data.price}</h5>
        <p className="p-des">Fully Responsive {Data.pages} page Website <br></br> developed in webflower. Unlimited Sections</p>
        <ul className='classList'>
            <li><HiMiniCheckBadge className='list-tick'/>Functional Website</li>
            <li><HiMiniCheckBadge className='list-tick'/>Responsive Design</li>
            <li><HiMiniCheckBadge className='list-tick'/>Content Upload</li>
            <li><HiMiniCheckBadge className='list-tick'/>Free Domian</li>
            <li><HiMiniCheckBadge className='list-tick'/>Technologies - Js, React, node</li>
            <li><HiMiniCheckBadge className='list-tick'/>Functional Website</li>
        </ul>
        <button className='list-button'><strong>Get Started </strong><FiArrowUpRight/></button>
    </div>
    </>
  )
}

export default PricingCard