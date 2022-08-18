import "./index.css";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <div className="about-us-text-container" >
          <div>
            <div className="about-us-heading">ABOUT US</div>
            <div className="about-us-line"></div>
          </div>
          <div className="about-us-intro">
            UNPARALLELED SERVICE AND EXPERT ADVICE AT EVERY STEP OF THE REAL ESTATE TRANSACTION.
          </div>
          <div className="about-us-text">
            With over 13 years of experience developing “HOMES FOR LIFE” and
            Focusing on real estate markets, ARCHID BUILDERS rank in the top 5
            Companies in all over Odisha. Our team has an exceptional knowledge
            about our community and neighbourhoods.
          </div>
        </div>
        <img className="about-us-image" src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2FAbout%20us%2Fimage3.svg?alt=media&token=940d14b9-4ca6-4ca6-a707-d98e65ee0577"   alt="...Loading" data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-offset="200"   />
      </div>
    </div>
  );
};
export default AboutUs;
