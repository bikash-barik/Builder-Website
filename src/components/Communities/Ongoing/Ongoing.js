import React from "react";
import "./Ongoing.css"

import OngoingData from "../../data/ongoing";
import { Link } from "react-router-dom";

export default function Ongoing(props) {
  return (
    <div className="Communities" style={{paddingLeft:"10px",paddingRight:"10px"}}>
      <div className="container-fluid" >
        <section className="upcoming">

          <div className="textline">
          
            <h4 className="white-text" style={{fontSize:"15px"}}>{props.head} </h4>


            <hr style={{ width: "150px", backgroundColor: "white", fontWeight: "", height: "1.3px", marginLeft: "5px", opacity: "0.8" }} />
          </div>
          <div className="row text-center align-items-center justify-content-center">

            {
              OngoingData.map((project, i) => {
                return (<>
                  <div className="col-lg-4">
                    <div className="ongoing-box text-center align-items-center justify-content-center"
                      data-aos={i % 2 === 0 ? "fade-left" : "fade-up"} data-aos-duration="2000">
                      <Link to={`/Communities/${project.id}`}>
                      <div>
                      <img  src={project.image} className="img-responsive" style={{height:"400px"}}></img>
                      </div>
                      </Link>
                      {/* <img src={image}></img> */}
                      <p className="my-3" style={{ fontSize: "18px", fontWeight: "400", lineHeight: "29px" }}>{project.title}</p>
                      <img  src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ongoing%2FLine%2084.png?alt=media&token=d799dd00-e8fe-426c-9e4e-2c59c4f1723c" style={{height:"4px",width:"180px"}}></img>
                      <h5 className="my-3" style={{ fontSize: "15px", fontWeight: "400" }}>{project.tagLine}</h5>
                      <p className="my-3" style={{ fontSize: "15px", fontWeight: "400" }}>{project.description}</p>
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
