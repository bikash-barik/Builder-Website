import React from "react";
import heroImg from "../../images/team/ourTeam.png";
import "./Team.css";
import TeamData from "../data/team";
export default function Team() {
  return (
    <div className="Team_background">
      <div className="hero-img">
        <img src={heroImg} />
      </div>
      <div className="row m-4 Team_page">
        {TeamData.map((data) => (
          <>
            <div
              className="col-lg-3 col-md-3 col-sm-6"
              style={{ padding: "30px" }}
            >
              <div className="team-img text-center">
                <img src={data.image} className="img-fluid" />
                <h3
                  className="white-text mt-4"
                >
                  {data.name}
                </h3>
                <h4>
                  [{data.designation}]
                </h4>
              </div>
            </div>
            <div
              className="col-lg-9 col-md-9 col-sm-6"
              style={{ padding: "20px",marginTop:"10px" }}
            >
              <div className="team-details"> {/* p-auto */}
                <p
                //   className=" p-auto"
                >
                  {data.details}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
            <div  className='hero-img'>
                 <img src={heroImg} className="img-fluid" />
            </div>
                <div className='row m-4 Team_page'>

                    {
                        TeamData.map((data,i)=>(
                    <>
                    
                    <div className='col-lg-3 col-md-12 col-sm-12' style={{padding:"30px"}}>
                        <div className='team-img text-center'>
                            <img src={data.image} className='img-fluid'/>
                            <h5 className='white-text mt-4' style={{ fontWeight:"500"}}>{data.name}</h5>
                            <p style={{fontSize:"14px",letterSpacing:"0.1vw", fontWeight:"300"}}>[{data.designation}]</p>
                         </div>   
                    </div>
                    <div className='col-lg-9 col-md-12 col-sm-12' style={{padding:"20px"}}>
                        <div className='team-details p-auto' style={i===1 || i===5 || i===6 ? {padding:"8% 6%"}:{}}>
                            <p className=' p-auto' style={{fontSize:"",letterSpacing:"0.1vw", fontWeight:"400"}}> 
                           {data.details}
                             </p>   
                        </div>
                    </div>
                    </>
                        ))
                    }
                </div>
    </div>
  );
}
