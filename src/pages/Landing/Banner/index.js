import "./index.css";
import SearchFilter from "./minicomponent/SearchFilter";
import banner1 from "../images/banner/1.svg";
import banner2 from "../images/banner/2.svg";
import banner3 from "../images/banner/3.svg";
import banner4 from "../images/banner/4.svg";
import { Carousel } from "react-bootstrap";

const BannerMapper = [
  {
    image: banner1,
    text: "coming soon",
  },
  {
    image: banner2,
    text: "Archid Shreekunj, Ranasinghpur",
  },
  {
    image: banner3,
    text: "Archid Pramod Retreat, Patrapada",
  },
  {
    image: banner4,
    text: "Archid Sailabala, Old Town",
  },
];
const Banner = () => {
  return (
      <div>
      <Carousel indicators={false} fade interval={3000} controls={false}>
      {BannerMapper.map((el, idx) => {
        if (el.text === "coming soon") {
          return (
              <Carousel.Item key={idx} interval={5000}>
                <div className="banner-background"   style={{
                  backgroundImage: `url(${el.image})`,
                }} >
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
              <Carousel.Item key={idx} interval={5000} >
              <div className="banner-background"   style={{
                backgroundImage: `url(${el.image})`,
              }}>
              <div
              
              className="place-name"
              >
              {el.text}
              </div>
              </div>
              </Carousel.Item>
              );
            }
          })}
          </Carousel>
          <SearchFilter/>
          </div>
    
   
  );
};

export default Banner;
