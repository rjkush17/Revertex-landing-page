import React from 'react'

function TestimonialsCard({data}) {
  return (
    <>
    <div className="card3">
      <p>{data.testimoanials}</p>
     <div className="profile">
     <img src={data.profile} alt="" />
      <p className='name'>{data.name}</p>
      <p className='position'>{data.Position}</p>
     </div>
    </div>
    </>
  )
}

export default TestimonialsCard