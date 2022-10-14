import React from "react";
import heroImg from "../../images/events/Screenshot (129).png";
import noUpcomingImg from "../../images/events/noUp.png";
import "./Event.css";
import EventData from "../data/event";
import image1 from "./PastEventsImages/image1.png";
import image2 from "./PastEventsImages/image6.png";
import image3 from "./PastEventsImages/image3.png";
import image4 from "./PastEventsImages/image4.png";
import image5 from "./PastEventsImages/image5.png";
import image7 from "./PastEventsImages/image7.png";

export default function PastEvents() {
  return (
    <div>
      <div className="d-flex my-5 bgimage past_heading">
        <h3
          style={{
            fontSize: "33px",
            fontWeight: "600",
            marginLeft: "30px",
            fontFamily: "Lato",
            fontStyle: "normal",
          }}
        >
          PAST EVENTS
        </h3>
        <hr className="past_hr"
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
      <div
        style={{
          margin: "0px",
          padding: "0px",
          overflowX: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",

            top: "1521px",
          }}
          src={image7}
          alt=" "
        ></img>
        <div className="images_gap"></div>
        <img
          style={{
            width: "100%",
            height: "auto",

            top: "1521px",
          }}
          src={image2}
          alt=" "
        ></img>
        <div className="images_gap"></div>
        <img
          src={image3}
          alt=" "
          style={{
            width: "100%",
            height: "auto",
          }}
        ></img>
        <div className="images_gap"></div>
        <img
          src={image4}
          alt=" "
          style={{
            width: "100%",
            height: "auto",
          }}
        ></img>
        <div className="images_gap"></div>
        <img
          src={image1}
          alt=" "
          style={{
            width: "100%",
            height: "auto",
          }}
        ></img>
        <div className="images_gap"></div>
        <img
          src={image5}
          alt=" "
          style={{
            width: "100%",
            height: "auto",

            marginBottom: "45px",
          }}
        ></img>
      </div>
    </div>
  );
}
