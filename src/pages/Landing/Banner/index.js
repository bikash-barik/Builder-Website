import "./index.css";
import SearchFilter from "./minicomponent/SearchFilter";

import { Carousel } from "react-bootstrap";
import Bgvedio from "../../../images/bgvedio.mp4"
// import Carousel from 'react-bootstrap/Carousel';


const BannerMapper = [
  // {
  //   image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%209.jpg?alt=media&token=10941fa1-2a27-43cc-b5ad-3c06645007bc",
  //   // text: "Gate",  1
  // },
  // {
  //   image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%201.jpg?alt=media&token=46fb827c-bda7-404d-931a-8b02634a76e3",
  //   // text: "coming soon",  1
  // },
  // {
  //   image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%202.jpg?alt=media&token=09183f0d-e351-4541-8f83-06479bb807e6",
  //   // text: "Archid Shreekunj, Ranasinghpur", 2
  // },
  // {
  //   image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%203.jpg?alt=media&token=d28b75a4-4ea5-4330-ae8e-7a7c0e979abc"
  //   // text: "Archid Pramod Retreat, Patrapada", 3
  // },
  // {
  //   image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%204.jpg?alt=media&token=2323f3fe-67aa-49ab-abbc-4300cfdc921e"
  //   // text: "Archid Sailabala, Old Town", 4
  // },

  // {
  //   image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%205.jpg?alt=media&token=c36ca7ce-dc4d-4077-8877-658cba544520"
  //   // text: "coming soon", 5
  // },

  // {
  //   image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%206.jpg?alt=media&token=ac57c838-b9ee-4cec-81b2-e9691dbf0b96"
  //   // text: "coming soon", 6
  // },

  // {
  //   image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%207.jpg?alt=media&token=f5e3891b-2357-4e49-96f6-369ea0d59bad"
  //   // text: "coming soon", 7
  // },

  // {
  //   image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Fweb%20banner%208.jpg?alt=media&token=a9f31be6-a34a-4555-b2bf-c42f2f545a99"
  //   // text: "coming soon", 8
  // },


  

];
const Banner = () => {
  return (
    <div>
      <video width="100%" autoPlay loop muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2FArchid%20Elite%20Teaser.mp4?alt=media&token=dc4990bf-30eb-4bbf-8444-acf803af8053" type="video/mp4" />
      </video>
      {/* <Carousel pause={true} indicators={true}>
        {BannerMapper?.map((el, idx) => {
          if (el.text === "coming soon") {
            return (
              <Carousel.Item key={idx} interval={3000}  >
                <div
                  className="banner-background"
                  style={{
                    backgroundImage: `url(${el?.image})`,
                  }}
                >
                  {/* <div className="coming-soon">
                    <div className="coming-soon-text">COMING SOON</div>
                    <div className="coming-place-name-cover">
                      <div className="coming-place-name">Patia in 2022</div>
                      <div className="coming-place-name">Atala in 2022</div>
                    </div>
                  </div>  

                </div>
              </Carousel.Item>
            );
          } else {
            return (
              <Carousel.Item key={idx} interval={3000} >
                <div
                  className="banner-background"
                  style={{
                    backgroundImage: `url(${el?.image})`,
                  }}
                >
                  {/* <div className="place-name">{el?.text}</div> 
                </div>
              </Carousel.Item>
            );
          }
        })}
      </Carousel> */}
      {/* <SearchFilter /> */}
    </div>
  );
};

export default Banner;
