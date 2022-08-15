import "./index.css";
import { ToggleButton } from "react-bootstrap";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';




const FloorPlan = ({floorPlanData}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    
    
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = (source) => {
    setOpen(true)
    setsrcData(source)
  };
  const handleClose = () => setOpen(false);
    const [filterData,setFilterData] = useState(floorPlanData)
    const [srcData,setsrcData] = useState(null)
    const handleChange = (e)=>{
        if(e.target.value === "ALL" )
        {
            setFilterData(floorPlanData)
        }
        else{
            const newData = floorPlanData?.filter((el)=> el.text === e.target.value )
            setFilterData(newData)
        }


    }
  return (
    <div className="floor-plan">
      <div className="floor-plan-heading">
        <div>FLOOR PLANS</div>
        <div className="floor-plan-line"></div>
      </div>

      <div className="floor-plan-filter-options">
        {floorPlanData?.map((el, idx) => {
          return (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              name="radio"
              value={el.text}
              variant="secondary"
              as="div"
              className="filter-option"
              onChange={handleChange}
            >
              {el.text}
            </ToggleButton>
          );
        })}
      </div>
      <Grid container spacing={9} className="floor-plan-image-container">
        {filterData?.map((el) => {
          if (el.text !== "ALL") {
            return (
              <Grid item  md={6} lg={4} >
              <img className="floor-plan-image" src={el?.image} alt="Loading" onClick={()=>{handleOpen(el?.fullImage)}} />;
              </Grid>
              )
          }
        })}
      </Grid>
      <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <img className="floor-plan-full-image" src={srcData} alt="Loading..." />
        </Box>
      </Modal>
    </div>
    </div>
  );
};

export default FloorPlan;
