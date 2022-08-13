import React,{useState,useEffect} from "react";
import Footer from "./footer1/Footer1";
// import offerImg from "./offer_picture.jpg";
// import offerImg from "../offer_picture.jpg";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import "./Offers.css";
const Offers = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if(oldProgress === 100){
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
        <h2 className="offer-heading">OFFERS</h2>
        <div className="grid-two-column">
          <h2 className="coming-heading">COMING</h2>
          <h2 className="soon-heading">SOON</h2>
        </div>
        {/* <img src={offerImg} style={{width:"100vw", height:"90vh"}} className="img-fluid" ></img> */}
        <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress}/>
    </Box>
      </div>

    </>
  );
};

export default Offers;
