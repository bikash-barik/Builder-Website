import "./index.css";
import SearchFilter from "./minicomponent/SearchFilter";

import { Carousel } from "react-bootstrap";

const BannerMapper = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2F1.svg?alt=media&token=1769db77-4073-4add-a3b8-443aec6c34d3",
    text: "coming soon",
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2F2.svg?alt=media&token=33659b08-7517-42a2-abe8-9ca49127fb7f",
    text: "Archid Shreekunj, Ranasinghpur",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2F3.svg?alt=media&token=3180915f-facc-43ba-932f-7bd9f1df231c",
    text: "Archid Pramod Retreat, Patrapada",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2F4.svg?alt=media&token=a4c2d259-51a9-4f2d-95eb-7d3381ad6aff",
    text: "Archid Sailabala, Old Town",
  },
];
const Banner = () => {
  return (
    <div>
      <Carousel  indicators={false} fade controls={false}>
        {BannerMapper?.map((el, idx) => {
          if (el.text === "coming soon") {
            return (
              <Carousel.Item key={idx} interval={3000}>
                <div
                  className="banner-background"
                  style={{
                    backgroundImage: `url(${el?.image})`,
                  }}
                >
                  <div className="coming-soon">
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
              <Carousel.Item key={idx} interval={3000}>
                <div
                  className="banner-background"
                  style={{
                    backgroundImage: `url(${el?.image})`,
                  }}
                >
                  <div className="place-name">{el?.text}</div>
                </div>
              </Carousel.Item>
            );
          }
        })}
      </Carousel>
      <SearchFilter />
    </div>
  );
};

export default Banner;
