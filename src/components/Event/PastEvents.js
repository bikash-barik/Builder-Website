import React from 'react'
import heroImg from "../../images/events/Screenshot (129).png"
import noUpcomingImg from "../../images/events/noUp.jpg"
import './Event.css';
import EventData from '../data/event';


export default function PastEvents() {
  return (
    <div>
      
        <div className="d-flex my-5">

<h3 style={{fontSize:"44px", fontWeight:"400", marginLeft:"30px"}}>Past Events</h3>
<hr style={{width:"150px", backgroundColor:"white", fontWeight:"", height:"1.3px",marginLeft:"5px",marginTop:"40px" , opacity:"0.8"}}/>
</div>


    {
        EventData.map((e)=>{
           
           return(<>
<div className='row no-upcoming mt-5'>
           
           
    <div className='col-md-7 col-sm-6 m-auto px-3'>
        <h2 className='text-center px-5' style={{fontSize:"49px", fontWeight:"400", marginLeft:"30px",lineHeight:"50px"}}>
         {e.title}
        </h2>
        <div className='year'>
            <h3 className='text-center'style={{fontSize:"44px", fontWeight:"400", marginLeft:"0px"}}>

            {e.year}
            </h3>
        </div>
    </div>
    <div className='col-md-5 col-sm-6 m-auto text-center'>

{
    e.images.map((img)=>{
        return(<>
        
        <img src={img.image} className="img-fluid m-3"/>
        
        </>);
    })
}

    </div>
           
    </div>
           </>);
        })
    }
    </div>
  )
}
