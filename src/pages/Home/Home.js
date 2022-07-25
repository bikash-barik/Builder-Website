import React from "react";
import "./Home.css"
import image from "../../images/ongoing/poster1.png";

import Particles, { ISourceOptions } from "react-tsparticles";
import Completed from "../../components/Home/Completed/Completed";
import Ongoing from "../../components/Home/Ongoing/Ongoing";
import Upcoming  from "../../components/Home/Upcoming/Upcoming";
export default function Home() {
  return (
    <div className="home-page">
      <Ongoing/>

      <Upcoming/>
 
<Completed/>
    </div>
  );
}
