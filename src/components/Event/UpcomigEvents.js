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
      <div className="d-flex my-5 upcoming_heading">
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
        <hr className="upcoming_hr"
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
      <div>
    
        
      <div
        style={{
          margin: "0px",
          padding: "0px",
          overflowX: "hidden",
        }}
      >
       
            <div className="images_gap"></div>
        <img
          style={{
            width: "100%",
            height: "auto",

            top: "1521px",
          }}
          src={"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/event%2FGroup%206470.png?alt=media&token=df9f4c3f-8b92-44ad-9e50-0cddf95281d4"}
          alt=" "
        ></img>
        
      </div>
    </div>
    </div>
  );
}
