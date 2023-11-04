import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'


function PortfolioCard({name, des, img}) {
  return (
    <div className="card">
        <img src={img} alt="img" />
        <h3>{name}</h3>
        <p>{des}</p>
        <div className="arrow">
            <AiOutlineArrowRight/>
        </div>
    </div>
  )
}

export default PortfolioCard