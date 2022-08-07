import "./index.css";
const AboutLocation = ({ locationData }) => {
  return (
    <div className="single-property-location">
      <div className="single-property-location-heading">
        <div>location map</div>
        <div className="location-line" />
      </div>
      <div className="location-image-container" >
      {locationData?.map((el, idx) => {
          return (
              
              <img
              className="location-image"
              src={el.image}
              alt="Loading..."
              />
         
        );
    })}
    </div>
    </div>
  );
};

export default AboutLocation;
