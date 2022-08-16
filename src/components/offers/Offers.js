import React, { useState, useEffect } from "react";

// import offerImg from "./offer_picture.jpg";
// import offerImg from "../offer_picture.jpg";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "./Offers.css";
const Offers = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="offers-background-img ">
        {/* <h2 className="offer-heading">OFFERS</h2>
        <hr className="offer-line" /> */}
        <div style={{display:"flex"}}>
        <h2 className="offer-heading">OFFERS</h2>
        <hr className="offer-line" />
          </div>
        <div className="grid-two-column">
          <h2 className="coming-heading">COMING</h2>
          <h2 className="soon-heading">SOON</h2>
        </div>
        {/* <img src={offerImg} style={{width:"100vw", height:"90vh"}} className="img-fluid" ></img> */}
        <br />
        <br />
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            className="offer-loader"
            variant="determinate"
            value={progress}
          />
        </Box>
      </div>
    </>
  );
};

export default Offers;
