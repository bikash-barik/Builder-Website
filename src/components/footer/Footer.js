import React from "react";
import "./Footer.css";
const Footer = () => {
  const styleObj = {
    paddingLeft: 142,
    paddingTop: 41,
    width: 600,
    height: 95,
  };
  return (
    <div>
      <div className="back-img">
        <div className="logo-img"></div>
        <div onClick={""} className="facebook-component"></div>
        <div onClick={""} className="twitter-component"></div>
        <div onClick={""} className="instagram-component"></div>
        <div className="container">
          <div className="gps-symbol"></div>
          <div>
            <p style={styleObj}>
              Archid Builders Pvt. Ltd. Plot No:315, “Archid Central” <br />
              Fourth Floor, Behind BPCL Petrol Pump District Center,
              Chandrashekherpur Bhubaneswar-751016 Odisha
            </p>
          </div>
        </div>
        <div className="map-component">
          <p className="map-text">Map</p>
          <div className="map-outer-vector-component"></div>
          <div className="map-vector-component" />
        </div>
        <div className="container2">
          <div className="mail-symbol"></div>
          <div>
            <p className="mail-txt">archidhomes@gmail.com</p>
          </div>
        </div>
        <div className="container-3">
          <div className="call-symbol"></div>
          <div>
            <p className="call-txt">+91 7537 000 001</p>
          </div>
        </div>
        <div className="container-4">
          <div className="call-symbol-2"></div>
          <div>
            <p className="call-txt-2">+91 7381 040 001</p>
          </div>
        </div>
        <div className="form1-component"></div>
        <div className>
          <p className="form-txt">GET IN TOUCH</p>
          <form className="form-input-component">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
              />
              <br />
              <label for="exampleFormControlInput2" class="form-label">
                Contact No.
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="876*******"
              />
              <br />
              <label for="exampleFormControlInput3" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput3"
                placeholder="name@example.com"
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="form2-component"></div>
        <div className="scroll-to-top"></div>
      </div>
      <div className="end-component"></div>
      <div>
        <p className="end-component-txt">
          Copyright © 2021 by Archid Homes. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
