import { useState } from "react";
import gps from "../images/gps.svg";
import mail from "../images/mail.svg";
import phone from "../images/phone.svg";
import locationIcon from "../images/locationIcon.svg";
import Modal from "react-modal";
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import "./index.css";

const Location = () => {
  const [modal, setModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      height: "500px",
      zIndex: "200",
    },
  };
  return (
    <div className="location">
      <div className="address">
        <img src={gps} alt="Loading..." />
        <div className="address-text">
          Archid Builders Pvt. Ltd. <br />
          Plot No:315, “Archid Central” Fourth Floor, Behind BPCL Petrol Pump
          District Center, Chandrashekherpur Bhubaneswar-751016 Odisha
        </div>

      </div>
      <div className="footericontwo">
      <div className="footer-icons ">
        <a href="https://www.instagram.com/archidbuilders_homesforlife/?igshid=8vhwlhruxu5e" target="_blank" ><img className="footer-icon-image" src={instagram} alt="Loading..." /></a>
        <a href="https://twitter.com/ArchidLtd" target="_blank" ><img className="footer-icon-image" src={twitter} alt="Loading..." /></a>
        <a href="https://www.facebook.com/archidbuildershomesforlife/" target="_blank" ><img className="footer-icon-image" src={facebook} alt="Loading..." /></a>
        </div>
      </div>
      <div className="map-button"  onClick={() => {
        modal === true ? setModal(false) : setModal(true);
      }}>
        <img src={locationIcon} alt="Loading..." />
        <div>
          Map
        </div>
      </div>
      <div className="contact-mail">
        <img src={mail} alt="Loading..." />
        <div className="contact-mail-id">archidhomes@gmail.com</div>
      </div>
      <div className="contact-number">
        <div className="phone">
          <img src={phone} alt="Loading..." />
          <div>+91 7537 000 001</div>
        </div>
        <div className="phone">
          <img src={phone} alt="Loading..." />
          <div>+91 7381 040 001</div>
        </div>
      </div>
      <Modal
       

        isOpen={modal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="">
          <div className="d-flex justify-content-between">
            <h3 className="black-text">Location</h3>
            <i
              class="fa-solid fa-xmark"
              style={{ marginLeft: "14rem", fontSize: "30px" }}
              onClick={() => setModal(false)}
            ></i>
          </div>
          <iframe
              width="100%"
              height="400"
              target="_blank"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Archid%20Builders%20Pvt.%20Ltd.%20Plot%20No:315,%20%E2%80%9CArchid%20Central%E2%80%9D%20Fourth%20Floor,%20Behind%20BPCL%20Petrol%20Pump%20District%20Center,%20Chandrashekherpur%20Bhubaneswar-751016%20Odisha&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
        </form>
      </Modal>
    </div>

  );
};

export default Location;
