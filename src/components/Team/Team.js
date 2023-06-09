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
              className="col-lg-3 col-md-3 col-sm-6 box2"
              style={{ padding: "30px" }}
            >
              <div className="team-img text-center team_image">
                <img src={data.image} className="img-fluid" />
                <h3
                  className="white-text mt-4 clr"
                >
                  {data.name}
                </h3>
                <h4 className="clr desig">
                  [{data.designation}]
                </h4>
              </div>
            </div>
            <div
              className="col-lg-9 col-md-9 col-sm-6 boxx"
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
         
    </div>
  );
}
