import "./index.css";
import { Grid } from "@mui/material";




const HighLights = ({ highlightImages }) => {


  const openLink = (link) => {
  

      window.open(link, "_blank");

    
  };
  return (
    <div className="single-property-highlights">
      <div className="single-property-highlights-heading">
        <div>PROJECT HIGHLIGHTS</div>
        <div className="single-property-highlights-line" />
      </div>

      <Grid
        container
        spacing={5}
        className="single-property-highlights-image-container"
      >
        {highlightImages?.map((el, i) => {
          return (
            <Grid item xs={2.3} sm={2.3} md={2.3} >
              <img
                src={el.image}
                className={
                  el.link
                    ? "single-property-highlights-image image-clickable"
                    : "single-property-highlights-image"
                }
                data-aos={i <= 4 ? "fade-right" : "fade-left"}
                data-aos-easing="linear"
                data-aos-duration="1000"
                alt="Loading..."
                onClick={() => {
                  if (el.link) {
                    openLink(el.link);
                  }
                }}
              />
            </Grid>
          );
        })}
      </Grid>
 
      

    
    </div>
  );
};

export default HighLights;
