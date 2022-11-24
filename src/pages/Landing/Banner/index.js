import "./index.css";
import SearchFilter from "./minicomponent/SearchFilter";

import { Carousel } from "react-bootstrap";

const BannerMapper = [
  {
    image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_A_001.jpg?alt=media&token=5d54fe5a-2426-472e-a5a0-46290c13d90f",
    // text: "coming soon",  1
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_B_002.jpg?alt=media&token=aa6f5f7b-c747-479e-ae71-751eed3689f7 ",
    // text: "Archid Shreekunj, Ranasinghpur", 2
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_C_003.jpg?alt=media&token=aea914ce-3c62-4da0-a048-a7ee6b36107a ",
    // text: "Archid Pramod Retreat, Patrapada", 3
  },
  {
    image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_D_004.jpg?alt=media&token=5f467e43-bbef-42ac-9995-39e5b8246ef8",
    // text: "Archid Sailabala, Old Town", 4
  },

  {
    image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_E_005.jpg?alt=media&token=3a8ce9cb-19fc-4d39-90ac-2b81993a8965",
    // text: "coming soon", 5
  },

  {
    image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_F_006.jpg?alt=media&token=7e0750ce-371f-421e-9e27-0bb4da416cb1 ",
    // text: "coming soon", 6
  },

  {
    image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_G_007.jpg?alt=media&token=5e28dd39-7b09-46bc-8544-f2e73902584e",
    // text: "coming soon", 7
  },

  {
    image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_H_008.jpg?alt=media&token=46c859fe-7800-47d8-b841-a736d232a271 ",
    // text: "coming soon", 8
  },

  {
    image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_N_011.jpg?alt=media&token=532cdf24-ad15-4536-8740-fd0397edc08f",
    // text: "coming soon", 9
  },

  {
    image: "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_SS_009.jpg?alt=media&token=1e8b0bce-10ed-4284-9cd7-59d80a39402f ",
    // text: "coming soon", 10
  },

  {
    image: " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/home%2Fslider%2Ffinal_Top_View_010.jpg?alt=media&token=57f1cf56-613e-4b54-b34b-def8a83e1cb3",
    // text: "coming soon", 11
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
                  {/* <div className="coming-soon">
                    <div className="coming-soon-text">COMING SOON</div>
                    <div className="coming-place-name-cover">
                      <div className="coming-place-name">Patia in 2022</div>
                      <div className="coming-place-name">Atala in 2022</div>
                    </div>
                  </div>  */}

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
                  {/* <div className="place-name">{el?.text}</div> */}
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
