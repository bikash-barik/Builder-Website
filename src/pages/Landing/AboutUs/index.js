import "./index.css";
import house from "../images/aboutUs/image3.svg"

const AboutUs = () => {
  return (
    <div className="  about-us-container">
      <div className="about-us">
        <div>
          <div>
            <div className="about-us-heading">ABOUT US</div>
            <div className="about-us-line"></div>
          </div>
          <div className="about-us-intro"  data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      data-aos-offset="400">
            UNPARALLELED SERVICE AND EXPERT ADVICE AT EVERY
            <br /> STEP OF THE REAL ESTATE TRANSACTION.
          </div>
          <div className="about-us-text"  data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      data-aos-offset="400">
            With over 13 years of experience developing “HOMES FOR LIFE” and
            Focusing <br/> on real estate markets, ARCHID BUILDERS rank in the top 5
            Companies in all <br/> over Odisha. Our team has an exceptional knowledge
            about our community and <br/> neighborhoods.
          </div>
        </div>
        <img className="about-us-image"    data-aos="fade-down-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      data-aos-offset="100" src={house} alt="...Loading" />
      </div>
    </div>
  );
};
export default AboutUs;
