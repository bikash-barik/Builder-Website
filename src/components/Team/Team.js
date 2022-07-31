import React from 'react'
import heroImg from "../../images/team/ourTeam.png"
import './Team.css'
import TeamData from '../data/team' 
export default function Team() {
  return (
    <div>
            <div  className='hero-img'>
                 <img src={heroImg}/>
            </div>
                <div className='row m-4'>

                    {
                        TeamData.map((data)=>(
                    <>
                    
                    <div className='col-lg-3 col-md-3 col-sm-6' style={{padding:"30px"}}>
                        <div className='team-img text-center'>
                            <img src={data.image} className='img-fluid'/>
                            <h2 className='white-text'>{data.name}</h2>
                            <h5>[{data.designation}]</h5>
                         </div>   
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-6' style={{padding:"20px"}}>
                        <div className='team-details p-auto'>
                            <p className=' p-auto'> 
                           {data.details}
                             </p>   
                        </div>
                    </div>
                    </>
                        ))
                    }
                </div>
       
    </div>
  )
}
