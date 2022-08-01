import React from "react";
import Footer from "./footer1/Footer1";
import offerImg from "./offers-bk-img.png"
import "./Offers.css";
const Offers = () => {
  return (
    <>
      <div className="">
        <img src={offerImg} style={{width:"100vw", height:"90vh"}} className="img-fluid" ></img>
      </div>

    </>
  );
};

export default Offers;
