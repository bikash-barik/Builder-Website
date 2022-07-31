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

        <div className="latest-launches-text">
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
      <img  className="latest-launches-image" src={image1} alt="Loading..." />
      </div>
      <div className=" latest-launches-image-container2 image-container">

      <img className="latest-launches-image" src={image2} alt="Loading..." />
      </div>
    </div>
  );
};

export default LatestLaunches;
