import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProperty.css";
import gallery from "../../images/ongoing/gallery.png";
import share from "../../images/ongoing/share2.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import FloorPlan from "./subcomponent/FloorPlan";
import HighLights from "./subcomponent/Highlights";
import Description from "./subcomponent/Description";
import Details from "./subcomponent/Details";
import Ameneties from "./subcomponent/Ameneties";
import Finance from "./subcomponent/Finance";
import Surrounding from "./subcomponent/Surrounding";
import Location from "./subcomponent/Location"
import ConstructionUpdates from "./subcomponent/ConstructionUpdates"
import Dropdown from 'react-bootstrap/Dropdown';

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterIcon,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";





export default function SingleProperty({ OngoingData }) {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "370px",
      paddingTop: "10px",
      paddingLeft: "25px",
      paddingRight: "25px",
      borderRadius: "0px",
      height: "530px",
      zIndex: "200",
    },
  };



  console.log("OngoingData is",OngoingData.length);  
  return (
    <div className="single_background">
      {OngoingData?.map((data, i) => {

        if (data.id !== id) {
          return null;
        }
       
        return (
          <div key={i}>

            <div
              className="landing-image"
              style={{ backgroundImage: `url(${data.bg})`}}
            >
              <div className="single-property-button-group">
              <div
                  className=" single-property-button single-property-request-button"
                  onClick={()=>{
                    window.open(data.ameneties.brochure, '_blank')}
                  }
                >
                  DOWNLOAD BROCHURE
                </div>
                <div
                  className=" single-property-button single-property-request-button"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  REGISTER YOUR INTEREST
                </div>
                <Link to={`/slider/${id}`}>
                  <div className="single-property-button singlee">
                    <div>GALLERY</div>
                    <img src={gallery} alt="Loading..." />
                  </div>
                </Link>
                <Dropdown >

                  <Dropdown.Toggle as="div" className=" drop-down-button single-property-button  share" align="end">
                    <div >
                      SHARE
                    </div>
                    <img
                      src={share}
                      alt="Loading..."
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="single-property-dropdown-menu" >
                    <FacebookShareButton url={data.ameneties.brochure} className="single-property-dropdown-menu-image" alt="Loading...">
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={data.ameneties.brochure} className="single-property-dropdown-menu-image" alt="Loading...">
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={data.ameneties.brochure} className="single-property-dropdown-menu-image" alt="Loading...">
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <EmailShareButton url={data.ameneties.brochure} className="single-property-dropdown-menu-image" alt="Loading...">
                      <EmailIcon size={32} round={true} />
                    </EmailShareButton>
             
                  </Dropdown.Menu>
                </Dropdown>

              </div>
            </div>


            <HighLights highlightImages={data.highlights} />
            <Description title={data.title} description={data.introduction} />
            <Details detail={data.details} />
            <Ameneties ameneties={data.ameneties} />
            <FloorPlan floorPlanData={data.floorPlans} />
            <Finance financeData={data.finance} />
            <Surrounding surroundingData={data.surrounding} id={data.id} />
            <Location locationData={data.location} />


      

            {data?.construction?.length !== 0 && (
              <ConstructionUpdates constructionData={data?.construction} />
            )}
          </div>


        )
      })}

      <Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <form className="">
          <div className="d-flex modal_head" >
            <h3 className="black-text" style={{ fontSize: "20px", marginBottom: "30px", marginTop: "20px", fontWeight: "400", color: "black" }}> REGISTER YOUR INTEREST</h3>

            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "20px" }}
              onClick={() => setModal(false)}
            ></i>
          </div>

          <label for="basic-url" style={{ fontSize: "16px", marginBottom: "10px" }}>FULL NAME *</label>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"

              style={{ height: "45px", marginBottom: "20px", backgroundColor: "lightgrey" }}

              required
            />
          </div>


          <label for="basic-url" style={{ fontSize: "16px", marginBottom: "10px" }}>EMAIL ADDRESS *</label>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"

              style={{ height: "45px", marginBottom: "20px", backgroundColor: "lightgrey" }}
              required
            />
          </div>
          <label for="basic-url" style={{ fontSize: "16px", marginBottom: "10px" }}>PHONE NUMBER *</label>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"

              style={{ height: "45px", marginBottom: "20px", backgroundColor: "lightgrey" }}

              required
            />
          </div>
          <button
            className="btn btn-primary align-items-center justify-content-center register_button"

            style={{ marginLeft: "19%", borderRadius: "0px", fontSize: "18px", marginTop: "5px", paddingLeft: "70px", paddingRight: "70px", paddingTop: "10px", paddingBottom: "10px" }}

          >
            SUBMIT
          </button>
        </form>
      </Modal>
    </div>
  );
}

