import "./index.css";
const Details = ({ detail }) => {
  return (
    <div className="single-property-details-container">
      {detail?.map((el, idx) => {
        if (idx % 2 === 0) {
          return (
            <div className="single-property-details">
              <div className="single-property-details-content">
                <div className="single-property-details-heading">
                  <div>{el?.heading}</div>
                  <div className="single-property-details-line" />
                </div>
                <div
                  className="single-property-details-description capitalize"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  {el?.description}

                  <br></br>
                  {el?.desc}
                  
                  <br></br>
                  <br></br>
                  {el?.descriptions}
                </div>
              </div>
              <img
                className="single-property-details-image"
                src={el?.image}
                alt="Loading..."
                data-aos="zoom-in-left"
                data-aos-easing="linear"
                  data-aos-duration="1000"
              />
            </div>
          );
        } else {
          return (
            <div className="single-property-details">
            <div className="single-property-details-content">
              <div className="single-property-details-heading">
                <div>{el?.heading}</div>
                <div className="single-property-details-line" />
              </div>
              <div
                className="single-property-details-description capitalize"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {el?.description}
                <br></br>
                <br></br>
                {el?.descriptions}
              </div>
            </div>
            <img
              className="single-property-details-image"
              src={el?.image}
              alt="Loading..."
              data-aos="zoom-in-left"
              data-aos-easing="linear"
                data-aos-duration="1000"
            />
          </div>
          );
        }
      })}
    </div>
  );
};

export default Details;
