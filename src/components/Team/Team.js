import React from 'react'
import heroImg from "../../images/team/ourTeam.png"
import './Team.css'
import TeamData from '../data/team' 
export default function Team() {
  return (
    <div className="Team_background">
            <div  className='hero-img'>
                 <img src={heroImg}/>
            </div>
                <div className='row m-4 Team_page'>

                    {
                        TeamData.map((data)=>(
                    <>
                    
                    <div className='col-lg-3 col-md-3 col-sm-6' style={{padding:"30px"}}>
                        <div className='team-img text-center'>
                            <img src={data.image} className='img-fluid'/>
                            <h2 className='white-text' style={{fontSize:"24px", fontWeight:"500"}}>{data.name}</h2>
                            <h5 style={{fontSize:"24px", fontWeight:"300"}}>[{data.designation}]</h5>
                         </div>   
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-6' style={{padding:"20px"}}>
                        <div className='team-details p-auto'>
                            <p className=' p-auto' style={{fontSize:"24px", fontWeight:"400"}}> 
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
