import "./index.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const LatestLaunches = () => {
  const navigate = useNavigate()
  return (
    <div className="latest-launches-container" >
      <div style={{paddingLeft:20}}>
        <div>
          <div className="latest-launches-heading">LATEST LAUNCHES</div>
          <div className="latest-launches-line"></div>
        </div>

        <div className="latest-launches-text capitalize"   >
          ARCHID BUILDERS stands for Excellence and Luxury in Residential and
          Commercial properties. It was incorporated in 2008 with it's focus on
          quality Construction and developing a better Future.<br/><br/> 
          Each of our properties have their own unique design aesthetic, providing an aspirational
          lifestyle within a thriving community, supported by Archid Builders 
          community management team.
        </div>
        <HashLink className="view-all-button"
         
         smooth
        // onClick={()=>{
        //   navigate("/communities#top")
        // }} 
        to="/communities#top"
        
        >VIEW ALL PROPERTIES</HashLink>
      </div>
      <div className=" latest-launches-image-container1 image-container">
      <img  className="latest-launches-image"  src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2FLatest%20Launches%2FlatestLaunches1.svg?alt=media&token=19740e92-4fce-4802-86aa-b3a9635ddbcc" alt="Loading..." />
      </div>
      <div className=" latest-launches-image-container2 image-container">

      <img className="latest-launches-image"  src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2FLatest%20Launches%2FlatestLaunches2.svg?alt=media&token=12fef73a-0356-4ace-8c02-3939afded538" alt="Loading..." />
      </div>
    </div>
  );
};

export default LatestLaunches;
