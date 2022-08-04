import React , {useEffect} from "react";
import "./Main.css"
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
          <h6 style={{ color: "rgb(209, 205, 205)", fontSize: "1.6vw", marginTop: "5vw", height: "3.5vw" }}>  <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FIcons%2FArchid%20Pramod%20Icons%2Fexclusivity-icon.png?alt=media&token=0c6ddbb3-9de9-439a-8e9d-3b6b6176714b" />EXCLUSIVITY </h6>

          <p style={{ color: "rgb(209, 205, 205)", fontSize: "1.1vw", marginTop: "3vw" }}>Our consultants shared a vision to create an exceptional neighbourhood with an unwavering set of standards.From perfecting the finest details to tackling colossal challenges,they showcased values of superior craftsmanship and an enduring commitment to the project</p>
        </div>

        <div className="anim2 anim">
          <h6 style={{ color: "rgb(209, 205, 205)", fontSize: "1.6vw", marginTop: "5vw", height: "3.5vw" }}>   <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FIcons%2FArchid%20Pramod%20Icons%2Ftrust-icon.png?alt=media&token=f723a6ce-d64d-4ae7-a170-8131a29ec3a5" /> TRUST</h6>
          <p style={{ color: "rgb(209, 205, 205)", fontSize: "1.1vw", marginTop: "3vw" }}>When it comes to Archid no one would get a second thought about it. Our clients has put years of faith to stay with us and made us a brand itself.</p>
        </div>
        <div className="anim3 anim">

          <h6 style={{ color: "rgb(209, 205, 205)", fontSize: "1.6vw", marginTop: "5vw", height: "3.5vw" }}>  <img src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Pramod%20Retreat%2CPatrapada%2FIcons%2FArchid%20Pramod%20Icons%2Fconnectivity-icon.png?alt=media&token=e49d999d-e02f-4d03-bfff-96e24ec68541" />CONNECTIVITY</h6>

          <p style={{ color: "rgb(209, 205, 205)", fontSize: "1.1vw", marginTop: "3vw" }}>All our Projects are Well connected to provide all the convenience for living a luxury lifestyle.</p>
        </div>
      </div>
      <div className="archid">
        <h6><span>ARCHID BUILDERS HIGHLIGHTS</span></h6>
        <div className="archimg">
          <div className="small"><div className="archid_no">22+</div> <div>PROJECTS</div></div>
          <div className="small"><div className="archid_no">500+</div> <div>PROJECTS SOLD</div></div>
          <div className="small"><div className="archid_no">800+</div> <div>CLIENTS</div></div>
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
            autoplayTimeout={5000}
            animateIn='fadeIn'
            autoplayHoverPause={false}
          >
            {(CarouselData).map((data) => {
              return <>
                <Card img={data.image} name={data.name} title={data.title} description={data.description} id={data.id}>one</Card>
              </>
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}


