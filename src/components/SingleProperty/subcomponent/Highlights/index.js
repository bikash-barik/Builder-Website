import "./index.css";
import { Grid } from "@mui/material";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef, useState } from "react";

const HighLights = ({ highlightImages }) => {
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const openLink = (link) => {
    if (link === "not found") {
      handleClick();
    } else {
      window.open(link, "_blank");
    }
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
            <Grid item xs={2.3} sm={2.3} md={2.3}>
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

      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          sx={{ width: "100%", fontSize: "13px" }}
        >
          Video does not exist
        </Alert>
      </Snackbar>
    </div>
  );
};

export default HighLights;
