import "./index.css";
import image1 from "../images/latestLaunches/latestLaunches1.svg"
import image2 from "../images/latestLaunches/latestLaunches2.svg"
const LatestLaunches = () => {
  return (
    <div className="latest-launches-container">
      <div>
        <div>
          <div className="latest-launches-heading">LATEST LAUNCHES</div>
          <div className="latest-launches-line"></div>
        </div>

        <div className="latest-launches-text"     data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      data-aos-offset="400">
          ARCHID BUILDERS stands for excellence and luxury in residential<br/> and
          commercial properties. It was incorporated in 2008 with it's <br/> focus on
          quality Construction and developing a better Future.<br/><br/> Our properties
          each have their own unique design aesthetic,<br/> providing an aspirational
          lifestyle within a thriving community,<br/> supported by Archid Builders 
          community management team.
        </div>
        <div className="view-all-button">VIEW ALL PROPERTIES</div>
      </div>
      <div className=" latest-launches-image-container1 image-container">
      <img  className="latest-launches-image"     data-aos="fade-down-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      data-aos-offset="400" src={image1} alt="Loading..." />
      </div>
      <div className=" latest-launches-image-container2 image-container">

      <img className="latest-launches-image"     data-aos="fade-down-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      data-aos-offset="400" src={image2} alt="Loading..." />
      </div>
    </div>
  );
};

export default LatestLaunches;
