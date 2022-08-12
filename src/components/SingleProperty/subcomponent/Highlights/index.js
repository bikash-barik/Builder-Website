import "./index.css";

import { Grid } from "@mui/material";
const HighLights = ({highlightImages}) => {
  return (
    <div className="single-property-highlights">
      <div className="single-property-highlights-heading">
        <div>PROJECT HIGHLIGHTS</div>
        <div className="single-property-highlights-line" />
      </div>

      <Grid container spacing={5} className="single-property-highlights-image-container" >
        {highlightImages?.map((img, i) => {
          return (
            <Grid item xs={2.3} sm={2.3} md={2.3}>
              <img
                src={img.image}
                className="single-property-highlights-image"
                data-aos={i <= 4 ? "fade-right" : "fade-left"}
                data-aos-easing="linear"
                data-aos-duration="1000"
                alt="Loading..."
                
               
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default HighLights;

