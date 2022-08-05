import React, { useState } from "react";
import "./Upcoming.css"
import UpcomingData from "../../data/upcoming";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Upcoming() {


  const [category, setCategory] = useState("RESIDENTIAL PROJECT")

  return (
    <div className="Communities">
      <div className="container-fluid">
        <section className="upcoming my-5">

          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="d-flex">

                <h4 className="white-text">Upcoming Projects </h4>
                <hr style={{ width: "150px", backgroundColor: "white", fontWeight: "", height: "1.3px", marginLeft: "5px", opacity: "0.8" }} />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div style={{ float: "right" }}>
                <DropdownButton id="dropdown-basic-button" title={category}>
                  {
                    category === "COMMERCIAL PROJECT" ? <Dropdown.Item
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
          <div className="row text-center align-items-center justify-content-center">

            {
              UpcomingData.filter(p => p.category === category).map((project) => {
                return (<>
                  <div className="col-lg-6">
                    <div className="ongoing-box text-center align-items-center justify-content-center my-2">
                      <img src={project.image} className="img-responsive"></img>
                      {/* <img src={image}></img> */}
                      <h4 className="my-3" style={{ fontSize: "24px", fontWeight: "400" }}>{project.title}</h4>
                      <hr />
                      <h5 className="my-3" style={{ fontSize: "17px", fontWeight: "400" }}>{project.tagLine}</h5>
                      <p className="my-3" style={{ fontSize: "17px", fontWeight: "400" }}>{project.description}</p>
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
