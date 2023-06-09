import React from "react";
import heroImg from "../../images/events/Screenshot (129).png";
import noUpcomingImg from "../../images/events/noUp.png";
import "./Event.css";
import { Typography } from "@material-ui/core";

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
          ONGOING EVENTS
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
          src={"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/event%2FGroup%206470.png?alt=media&token=3413b7d6-11c4-4b88-b2b0-2e99c188a6d1"}
          alt=" "
        ></img>
        <center>

        {/* <Typography style={{fontSize:80}}>
          NO UPCOMING EVENT
        </Typography> */}
        </center>
        
      </div>
    </div>
    </div>
  );
}
