import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "./Offers.css";




const Offers = () => {
  const [progress, setProgress] = useState(0);
  const style = 
    {height:"24px",backgroundColor: "#433F3F",borderRadius: "26px",maxWidth:"550px",marginTop:"76px",marginLeft:"auto",marginRight:"auto"}
  

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

   
     
      <div className="offer-background-container">
      <div className="offer-heading">
      <div>
      OFFERS

      </div>
      <div className="offer-line"/>
      </div>
      <div className="offer-text">
      <div>COMING</div>
      <div>SOON</div>
      </div>
      <Box sx={{ width: "100%" }}>
  
 
      <LinearProgress
      sx={style}
      classes={{
        barColorPrimary: "linear-bar-color-pr"
      }}
      variant="determinate"
      value={progress}
      />

      </Box>
      </div>
   
   
  );
};

export default Offers;
