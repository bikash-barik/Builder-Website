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

export default function PastEvents() {
  return (
    <div>
      <div className="d-flex my-5 bgimage">
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
          src={image1}
          alt=" "
        ></img>
        <br />
        <br />
        <br />
        <br />
        <img
          src={image2}
          alt=" "
          style={{
            width: "100%",
            height: "auto",
          }}
        ></img>
        <br />
        <br />
        <br />
        <br />
        <img
          src={image3}
          alt=" "
          style={{
            width: "100%",
            height: "auto",
          }}
        ></img>
        <br />
        <br />
        <br />
        <br />
        <img
          src={image4}
          alt=" "
          style={{
            width: "100%",
            height: "auto",
          }}
        ></img>
        <br />
        <br />
        <br />
        <br />
        <img
          src={image5}
          alt=" "
          style={{
            width: "100%",
            height: "auto",

            marginBottom: "190px",
          }}
        ></img>
      </div>
    </div>
  );
}
