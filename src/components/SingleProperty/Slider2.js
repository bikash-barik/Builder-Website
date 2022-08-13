import React from "react";
import "./Slider.css";
import { useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

const Gallery = ({ OngoingData }) => {
  const { id } = useParams();
  return (
    <div className="main">
      {OngoingData?.map((data) => {
        if (id !== data.id) {
            return null
        }
          
          return (
              <Carousel interval={null} className="main2">
              {data?.gallery?.map((el, idx) => {
                  return (
                      <Carousel.Item>
                      <img src={el.image} alt="Loading..." className="card" />
                      </Carousel.Item>
                      );
                    })}
                    </Carousel>
                    );
                
      })}
    </div>
  );
};
export default Gallery;
