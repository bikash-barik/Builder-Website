import React from "react";
import "./Ongoing.css"
import { HashLink } from 'react-router-hash-link';
import OngoingData from "../../data/ongoing";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function Ongoing(props) {
  return (
    <div className="Communities" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <div className="container-fluid" >
        <section className="upcoming">

          <div className="textline">

            <h4 className="white-text" style={{ fontSize: "15px" }}>{props.head} </h4>


            <hr className="upcominghr" style={{ width: "150px", backgroundColor: "white", fontWeight: "", height: "1.3px", marginLeft: "5px", opacity: "0.8" }} />
          </div>
          
          <div className="row align-items-center justify-content-Spaceber  ongoing-container">
          <OwlCarousel mouseDrag={false}
          className='owl-theme owl-text-select-on'
            loop={true}
            // width={100}
            touchDrag={false}
            lazyLoad={true}
            items={3}
            slideBy={1}
            dots={true}
            autoplay={true}
            autoplayTimeout={2000}
            animateIn='fadeIn'
            autoplayHoverPause={false}
            // autoWidth
            >
            {
              OngoingData.map((project, i) => {
                return (<Card>
                  <div className="col-lg-3 ongoing-box-container">
                    <div className="ongoing-box text-center align-items-center justify-content-center"
                      data-aos={i === 0 ? ("fade-right") : (i % 2 === 0 ? "fade-left" : "fade-up")} data-aos-duration="2000">
                      <HashLink smooth to={`/Communities/${project.id}#top`}>
                        <div className={i == 2 ? "img2" : ""}>
                          <img src={project.image} className="img-responsive" style={{ height: "400px", }}></img>
                        </div>
                      </HashLink>
                      <p className=" " style={{ fontSize: "21px", fontWeight: "400", lineHeight: "29px", }}>{project.title}</p>
                      <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ongoing%2FLine%2084.png?alt=media&token=d799dd00-e8fe-426c-9e4e-2c59c4f1723c" className="line_img" style={{ height: "4px", width: "180px" }}></img>
                      <h5 className="my-3 com_heading" style={{ fontSize: "15px", fontWeight: "400", width: "280px", margin: "auto" }}>{project.tagLine}</h5>
                      <p className="my-3 com_discription" style={{ fontSize: "15px", fontWeight: "400" }}>{project.description}</p>
                    </div> 
                  </div>
                </Card>)
              })
            }
          </OwlCarousel>
          </div>
        </section>


        <section className="">

        </section>
      </div>
    </div>
  );
}
