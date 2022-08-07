import React from "react";
import heroImg from "../../images/events/Screenshot (129).png";
import noUpcomingImg from "../../images/events/noUp.png";
import "./Event.css";

export default function UpcomingEvents() {
  return (
    <div className="bgimage">
      <div className="hero-img" styles={{ margin: "0px", padding: "0px" }}>
        <img src={heroImg} alt="" style={{ maxWidth: "100%" }} />
      </div>
      <div className="d-flex my-5">
        <h3
          style={{
            fontSize: "33px",
            fontFamily: "Lato",
            fontWeight: "600",
            marginLeft: "30px",
            lineHeight: "40px",
          }}
        >
          UPCOMING EVENTS
        </h3>
        <hr
          style={{
            width: "150px",
            backgroundColor: "white",
            fontWeight: "",
            height: "1.3px",
            marginLeft: "5px",
            marginTop: "19px",
            opacity: "0.8",
          }}
        />
      </div>
      <div className="row no-upcoming">
        <div className="col-md-7 col-sm-6 m-auto">
          <h1
            className="text-center"
            style={{
              fontSize: "49px",
              fontWeight: "800",

              left: "139px",
              width: "auto",
              marginLeft: "2px",
            }}
          >
            NO UPCOMING EVENTS
          </h1>
        </div>
        <div className="col-md-5 col-sm-6">
          <img src={noUpcomingImg} alt=" " className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
