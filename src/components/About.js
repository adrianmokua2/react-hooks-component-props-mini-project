import React from 'react'

export default function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <div>
        About
        <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
      </aside>
    
    </div>
  )
}
