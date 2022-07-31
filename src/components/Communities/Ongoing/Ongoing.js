import React from "react";
import "./Ongoing.css"

import OngoingData from "../../data/ongoing";
import { Link } from "react-router-dom";

export default function Ongoing() {
  return (
    <div className="Communities">
      <div className="container">
        <section className="upcoming">

        <div className="d-flex">

        <h5 className="white-text">Ongoing Projects </h5>


        <hr style={{width:"150px", backgroundColor:"white", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
        </div>
        <div className="row text-center align-items-center justify-content-center">

{
  OngoingData.map((project,i)=>{
    return(<>
         <div className="col-lg-4">
            <div className="ongoing-box text-center align-items-center justify-content-center" 
            data-aos={i%2===0?"fade-right":"fade-left"} data-aos-duration="2000">
              <Link to={`/Communities/${project.id}`}>
              
              <img src={project.image} className="img-responsive"></img>
              </Link>
              {/* <img src={image}></img> */}
              <h4 className="my-3" style={{fontSize:"24px", fontWeight:"400", lineHeight:"29px"}}>{project.title}</h4>
              <hr/>
              <h5 className="my-3" style={{fontSize:"17px", fontWeight:"400"}}>{project.tagLine}</h5>
              <p className="my-3" style={{fontSize:"17px", fontWeight:"400"}}>{project.description}</p>
            </div>
          </div>
        
        </>)
    })
}



          
        </div>
    </section>


    <section className="">

    </section>
      </div>
    </div>
  );
}
