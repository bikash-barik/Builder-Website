import "./index.css";
import { images } from "./config";
import { Grid } from "@mui/material";
const HighLights = () => {
  return (
    <div className="highlights">
      <div className="highlights-heading">
        <div>PROJECT HIGHLIGHTS</div>
        <div className="highlights-line" />
      </div>

      <Grid container spacing={10} justifyContent="center"
      alignItems="center">
        {images.map((img, i) => {
          return (
            <Grid item xs={6} md={2.2}>
              <img
                src={img}
                className="highlights-image"
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
{
  // <div className="d-flex">
  // <h5>Project highlights </h5>
  // <hr
  //   style={{
  //     width: "150px",
  //     backgroundColor: "white",
  //     fontWeight: "",
  //     height: "1.3px",
  //     marginLeft: "5px",
  //     opacity: "0.8",
  //   }}
  // />
  // </div>
  // <div className="row my-2 justify-content-center">
  // {data.highlight.map((img, i) => (
  //   <div className="col-lg-3 col-md-3 col-sm-4 my-2">
  //     <img
  //       src={img.detail}
  //       className="detail-img"
  //       data-aos={i <= 4 ? "fade-right" : "fade-left"}
  //       data-aos-easing="linear"
  //       data-aos-duration="1500"
  //     ></img>
  //   </div>
  // ))}
  // </div>
}
