import React from "react";
import "./Communities.css"
import image from "../../images/ongoing/poster1.png";

import Particles, { ISourceOptions } from "react-tsparticles";
import Completed from "../../components/Communities/Completed/Completed";
import Ongoing from "../../components/Communities/Ongoing/Ongoing";
import Upcoming  from "../../components/Communities/Upcoming/Upcoming";
export default function Communities() {
  return (
    <div className="Communities-page">
      <Ongoing head="ONGOING PROJECTS"/>

      <Upcoming/>
 
<Completed/>
    </div>
  );
}
