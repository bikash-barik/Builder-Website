import React, { useState } from "react";
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../images/ongoing/slide1.png"
import slide2 from "../../images/ongoing/slide2.png"
import slide3 from "../../images/ongoing/slide3.png"
import slide4 from "../../images/ongoing/slide4.png"

function UncontrolledExample() {
    return (
        <div className="main">
            <Carousel interval={null} className="main2">
                <Carousel.Item className="imag">
                <img src={slide1} className='card' />
                </Carousel.Item>
                <Carousel.Item className="imag">
                    <img src={slide2} className='card' />
                </Carousel.Item>
                <Carousel.Item className="imag">
                    <img src={slide3}className='card' />
                </Carousel.Item>
                <Carousel.Item className="imag">
                <img src={slide4} className='card' />
                </Carousel.Item>
                <Carousel.Item className="imag">
                    <img src={slide1} className='card' />
                </Carousel.Item>
                <Carousel.Item className="imag">
                    <img src={slide2}className='card' />
                </Carousel.Item>
                <Carousel.Item className="imag">
                <img src={slide4} className='card' />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
export default UncontrolledExample;