import React from "react";
import "./Home.css"
import image from "../../images/ongoing/poster1.png";
import Ongoing from "../../components/Ongoing/Ongoing.js";
import Upcoming from "../../components/Upcoming/Upcoming.js";
import Particles, { ISourceOptions } from "react-tsparticles";
import Completed from "../../components/Completed/Completed";

export default function Home() {
  return (
    <div className="home-page">
      <Ongoing/>

      <Upcoming/>
 
<Completed/>
    </div>
  );
}
