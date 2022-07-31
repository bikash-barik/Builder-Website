import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className='card_main'>
      <img className='card_img' src={props.img} />
      <div className='card_container'>
          <p className='desc'>{props.description}</p>
          <p className='name'>{props.name}</p>
          <p className='title'>{props.title}</p>
      </div>
    
    </div>
    
  )
}
