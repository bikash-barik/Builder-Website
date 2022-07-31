import React from "react";
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <div className="main">
            <Carousel interval={null} className="main2">
                <Carousel.Item >
                <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%201.jpg?alt=media&token=a4f214ac-76ab-4880-ba06-87ae9077348c" className='card' />
                </Carousel.Item>
                <Carousel.Item >
                    <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%202.jpg?alt=media&token=81c49078-75e3-4334-8b09-5131a04a7984" className='card' />
                </Carousel.Item>
                <Carousel.Item >
                    <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%203.jpg?alt=media&token=32f51c96-a7d5-40d1-bb91-8a5c8a6a64d9" className='card' />
                </Carousel.Item>
                <Carousel.Item >
                <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%204.jpg?alt=media&token=596458f7-806e-4faf-9d27-f0c3ad653450" className='card' />
                </Carousel.Item>
                <Carousel.Item >
                    <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%206.jpg?alt=media&token=8ee27db5-0a0c-4001-88c1-10ace8ba4d15" className='card' />
                </Carousel.Item>
                <Carousel.Item >
                    <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%205.jpg?alt=media&token=015a8116-4876-477d-bebb-a4b292058732" className='card' />
                </Carousel.Item>
                <Carousel.Item >
                <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%201%207.jpg?alt=media&token=938e09e9-9821-4e92-962a-e9a62585f866" className='card' />
                </Carousel.Item>
                <Carousel.Item >
                <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FGallery%2FGALLERY%208.jpg?alt=media&token=76d7d98e-6c00-45c3-84fc-4370b4226548" className='card' />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
export default UncontrolledExample;