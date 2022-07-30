import React from 'react'
import "./Card.css"
import heroImg from "../../images/team/ourTeam.png"

export default function Card(props) {
  return (
    <div className='imm'>
      <img className='cir' src={props.img} />
      <div className='card'>
          <p className='desc'>{props.description}</p>
          <p className='name'>{props.name}</p>
          <p className='title'>{props.title}</p>
      </div>
    
    </div>
    
  )
}
