import React from "react";
import "./index.css";
import FooterImageSection from "./footerImagesection";
import Location from "./location";
import ContactUsForm from "./contactUsForm";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <FooterImageSection />
        <Location />
        <ContactUsForm />
      </div>
      <div className="copyright">
        Copyright © 2021 by Archid Homes. All Rights Reserved.
      </div>
    </div>

  );
};

export default Footer;
