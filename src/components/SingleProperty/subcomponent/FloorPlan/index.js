import "./index.css";

import { ToggleButton } from "react-bootstrap";
import { useState } from "react";
import Grid from '@mui/material/Grid';

const FloorPlan = ({floorPlanData}) => {
    const [filterData,setFilterData] = useState(floorPlanData)
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
              <img className="floor-plan-image" src={el?.image} alt="Loading" />;
              </Grid>
              )
          }
        })}
      </Grid>
    </div>
  );
};

export default FloorPlan;
