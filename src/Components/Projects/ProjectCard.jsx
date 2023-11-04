import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

function ProjectCard({img}) {
  return (
    <>
    <div className="card2">
      <img src={img} alt="" />
      <p className='hover-text'>See Project <AiOutlineArrowRight/></p>
    </div>
    </>
  )
}

export default ProjectCard