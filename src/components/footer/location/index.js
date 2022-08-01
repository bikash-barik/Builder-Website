import gps from "../images/gps.svg";
import mail from "../images/mail.svg";
import phone from "../images/phone.svg";
import locationIcon from "../images/locationIcon.svg";
import "./index.css";
const Location = () => {
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
      <div className="map-button">
        <img src={locationIcon} alt="Loading..." />
        <div>Map</div>
      </div>
      <div className="contact-mail">
        <img src={mail} alt="Loading..." />
        <div className="contact-mail-id">archidhomes@gmail.com</div>
      </div>
      <div className="contact-number">
        <div className="phone" >
          <img src={phone} alt="Loading..." />
          <div>+91 7537 000 001</div>
        </div>
        <div className="phone">
          <img src={phone} alt="Loading..." />
          <div>+91 7381 040 001</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
