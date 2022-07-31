import React from "react";
import "./Main.css"
import exclusivityIcon from "../../images/project-highlight/exclusivity-icon.png";
import trustIcon from "../../images/project-highlight/trust-icon.png";
import connectivityicon from "../../images/project-highlight/connectivity-icon.png";
import CarouselData from "../../components/data/carousel";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

import Card from "./Card";
export default function Main() {
  return (
    <>
      <div className="project">
        <div className="highlights">
          <h6><span>PROJECT HIGHLIGHTS</span></h6>
        </div>
        <div className="anim1 anim">
          <h6 style={{ color: "rgb(209, 205, 205)", fontSize: "2vw", marginTop: "5vw", height: "3.5vw" }}>  <img src={exclusivityIcon} />EXCLUSIVITY </h6>

          <p style={{ color: "rgb(209, 205, 205)", fontSize: "1.3vw", marginTop: "3vw" }}>Our consultants shared a vision to create an exceptional neighbourhood with an unwavering set of standards.From perfecting the finest details to tackling colossal challenges,they showcased values of superior craftsmanship and an enduring commitment to the project</p>
        </div>

        <div className="anim2 anim">
          <h6 style={{ color: "rgb(209, 205, 205)", fontSize: "2vw", marginTop: "5vw", height: "3.5vw" }}>   <img src={trustIcon} /> TRUST</h6>
          <p style={{ color: "rgb(209, 205, 205)", fontSize: "1.3vw", marginTop: "3vw" }}>When it comes to Archid no one would get a second thought about it. Our clients has put years of faith to stay with us and made us a brand itself.</p>
        </div>
        <div className="anim3 anim">

          <h6 style={{ color: "rgb(209, 205, 205)", fontSize: "2vw", marginTop: "5vw", height: "3.5vw" }}>  <img src={connectivityicon} />CONNECTIVITY</h6>

          <p style={{ color: "rgb(209, 205, 205)", fontSize: "1.3vw", marginTop: "3vw" }}>All our Projects are Well connected to provide all the convenience for living a luxury lifestyle.</p>
        </div>
      </div>
      <div className="archid">
        <h6><span>ARCHID BUILDERS HIGHLIGHTS</span></h6>
        <div className="archimg">
          <div className="small">22+ <div>PROJECTS</div></div>
          <div className="small">500+ <div>PROJECTS SOLD</div></div>
          <div className="small">800+ <div>CLIENTS</div></div>
        </div>
      </div>
      <div className="testimonial">
        <h6><span>TESTIMONIALS</span></h6>
        <div className="test">
          <OwlCarousel className='owl-theme owl-text-select-on'
            mouseDrag={false}
            loop={true}
            touchDrag={false}
            lazyLoad={true}
            items={1}
            slideBy={1}
            responsive={{
              992: {
                items: 4,
                slideBy:3
              },
              768: {
                items: 3,
                slideBy:2
              },
              540: {
                items: 2,
                slideBy:1
              },

            }}
            dots={true}
            autoplay={true}
            autoplayTimeout={2000}
            animateIn='fadeIn'
            
            autoplayHoverPause={false}
          >
            {(CarouselData).map((data) => {
              return <>
                <Card img={data.image} name={data.name} title={data.title} description={data.description} id={data.id}>one</Card>
              </>
            })}
          </OwlCarousel >
        </div>
      </div>
    </>
  );
}

