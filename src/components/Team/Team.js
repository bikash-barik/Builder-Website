import React from 'react'
import heroImg from "../../images/team/ourTeam.png"
import './Team.css'

export default function Team() {
  return (
    <div>
            <div  className='hero-img'>
                 <img src={heroImg}/>
            </div>
                <div className='row m-4'>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <div className='team-img'>
                            <img src={heroImg} className='img-fluid'/>
                         </div>   
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-6'>
                        <div className='team-details'>
                            <p> 
                                Ipsum voluptua dolor takimata accusam invidunt vero diam et. Accusam gubergren sed et labore sed stet et, diam ipsum at ipsum erat ipsum stet magna et. Diam at invidunt sed aliquyam duo et est, stet takimata gubergren elitr ipsum sadipscing.
                             </p>   
                        </div>
                    </div>
                </div>
       
    </div>
  )
}
