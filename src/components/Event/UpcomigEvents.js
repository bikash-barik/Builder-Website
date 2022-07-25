import React from 'react'
import heroImg from "../../images/events/Screenshot (129).png"
import noUpcomingImg from "../../images/events/noUp.jpg"
import './Event.css'

export default function UpcomingEvents() {
  return (
    <div>
        <div  className='hero-img'>
            <img src={heroImg}/>
        </div>
        <div className="d-flex my-5">

<h3>Upcoming Projects</h3>
<hr style={{width:"150px", backgroundColor:"white", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
</div>
<div className='row no-upcoming'>
    <div className='col-md-7 col-sm-6 m-auto'>
        <h1 className='text-center'>
            NO UPCOMING EVENTS
        </h1>
    </div>
    <div className='col-md-5 col-sm-6'>
        <img src={noUpcomingImg} className="img-fluid"/>
    </div>
</div>
    </div>
  )
}
