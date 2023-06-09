import React, { useState } from "react";
import "./Upcoming.css"
import UpcomingData from "../../data/upcoming";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Upcoming() {


  const [category, setCategory] = useState("RESIDENTIAL PROJECT")

  return (
    <div className="Communities" style={{paddingLeft:"10px",paddingRight:"10px"}}>
      <div className="container-fluid">
        <section className="upcoming my-5">

          <div className="upcoming-heading-container" style={{marginBottom:"15px"}}>
            <div >
              <div className="upcoming-heading" style={{marginTop:"10px"}}>

                <h4 className="white-text" style={{fontSize:"17px"}}>UPCOMING PROJECTS </h4>
                <div className="line linee" style={{ width: "150px", borderTop:"2px solid white", marginLeft: "5px", opacity: "0.8" }} />
              </div>
            </div>
            <div >
              <div style={{ float: "right" }}>
                <DropdownButton id="dropdown-basic-button" className="drop_buttons" style={{marginRight:"30px"}} title={category}>
                  {
                    category === "COMMERCIAL PROJECT" ? <Dropdown.Item className="dropdown_btn"
                      onClick={() => {
                        setCategory("RESIDENTIAL PROJECT")
                      }}>RESIDENTIAL PROJECT</Dropdown.Item> : <Dropdown.Item
                        onClick={() => {
                          setCategory("COMMERCIAL PROJECT")
                        }}>COMMERCIAL PROJECT</Dropdown.Item>

                  }
                </DropdownButton>
              </div>
            </div>
          </div>
          <div className="row  align-items-center justify-content-center">

            {
              UpcomingData.filter(p => p.category === category).map((project) => {
                return (<>
                  <div className="col-lg-6">
                    <div className="ongoing-box text-center align-items-center justify-content-center my-2">
                      <img src={project.image} className="img-responsive" style={{height:"400px"}}></img>
                    
                      <h4 className="my-3" style={{ fontSize: "20px", fontWeight: "400" }}>{project.title}</h4>
                      <img  src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ongoing%2FLine%2084.png?alt=media&token=d799dd00-e8fe-426c-9e4e-2c59c4f1723c" className="line_img" style={{height:"4px",width:"180px"}}></img>
                      <h5 className="my-3 com_heading " style={{ fontSize: "17px", fontWeight: "400" }}>{project.tagLine}</h5>
                      <p className="my-3 com_discription" style={{ fontSize: "17px", fontWeight: "400" }}>{project.description}</p>
                    </div>
                  </div>

                </>)
              })
            }
          </div>
        </section>


      </div>
    </div>
  );
}
