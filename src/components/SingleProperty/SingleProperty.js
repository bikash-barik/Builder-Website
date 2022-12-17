import React, { useState, useRef } from "react";
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
// import Amenetiesnew from "./subcomponent/Amenetiesnew";
import Finance from "./subcomponent/Finance";
import Surrounding from "./subcomponent/Surrounding";
import Location from "./subcomponent/Location";
import ConstructionUpdates from "./subcomponent/ConstructionUpdates";
import Dropdown from "react-bootstrap/Dropdown";
import Confirmation from "../confirmationSnackbar";
import { Tick } from "react-crude-animated-tick";

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


async function handeldownload(number, email) {
  // e.preventDefault();
  try {
    let res = await fetch(
      "https://dpsc-370710.el.r.appspot.com/add_brochure",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          number: number,
          email: email,
          // requirement: requirement,
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson)
    if (resJson.status) {
      // setNumber("");
      // setEmail("");
      // setRequirement("");
    } else {
      // setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};


async function handleSubmit(number, email, requirement) {
  // e.preventDefault();
  try {
    let res = await fetch(
      "https://dpsc-370710.el.r.appspot.com/add_inquiry",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          number: number,
          email: email,
          requirement: requirement,
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson)
    if (resJson.status) {
      // setNumber("");
      // setEmail("");
      // setRequirement("");
    } else {
      // setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};

export default function SingleProperty({ OngoingData }) {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [modal4, setModal4] = useState(false);
  // const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const [modal3, setModal3] = useState(false);
  const customStyles = {
    content: {
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "370px",
      paddingTop: "40px",
      paddingLeft: "25px",
      paddingRight: "25px",
      borderRadius: "0px",
      height: "530px",
      zIndex: "200",
    },
  };
  const customStyles3 = {
    content: {
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "370px",
      paddingTop: "40px",
      paddingLeft: "25px",
      paddingRight: "25px",
      borderRadius: "0px",
      height: "400px",
      zIndex: "200",
    },
  };

  const customStyles2 = {
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      borderRadius: "15px",
      height: "300px",
      zIndex: "200",
    },
  };

  const name = useRef(null);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };




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
              style={{ backgroundImage: `url(${data.bg})` }}
            >
              <div className="single-property-button-group">
                <div
                  className=" single-property-button single-property-request-button"
                  onClick={() => {
                    setModal2(true);
                    // setModal1(false)
                    // window.open(data.ameneties.brochure, '_blank')
                  }}
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
                <Dropdown>
                  <Dropdown.Toggle
                    as="div"
                    className=" drop-down-button single-property-button  share"
                    align="end"
                  >
                    <div>SHARE</div>
                    <img src={share} alt="Loading..." />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="single-property-dropdown-menu">
                    <FacebookShareButton
                      url={data.ameneties.brochure}
                      className="single-property-dropdown-menu-image"
                      alt="Loading..."
                    >
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={data.ameneties.brochure}
                      className="single-property-dropdown-menu-image"
                      alt="Loading..."
                    >
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={data.ameneties.brochure}
                      className="single-property-dropdown-menu-image"
                      alt="Loading..."
                    >
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <EmailShareButton
                      url={data.ameneties.brochure}
                      className="single-property-dropdown-menu-image"
                      alt="Loading..."
                    >
                      <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <HighLights highlightImages={data.highlights} />
            <Description title={data.title} description={data.introduction} />
            {/* <Description title={data.titles} description={data.inter} /> */}
            <Details detail={data.details} />

            {/* <Amenetiesnew ameneties={data.amenetiess} /> */}
            <Ameneties ameneties={data.ameneties} />
            <FloorPlan floorPlanData={data.floorPlans} />
            <Finance financeData={data.finance} />
            <Surrounding surroundingData={data.surrounding} id={data.id} />
            <Location locationData={data.location} />

            {data?.construction?.length !== 0 && (
              <ConstructionUpdates constructionData={data?.construction} />
            )}
          </div>
        );
      })}

      <Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <form className="">
          <div className="d-flex modal_head">
            <h3
              className="black-text"
              style={{
                fontSize: "20px",
                marginBottom: "30px",
                marginTop: "20px",
                fontWeight: "400",
                color: "black",
              }}
            >
              {" "}
              REGISTER YOUR INTEREST
            </h3>

            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "20px" }}
              onClick={() => setModal(false)}
            ></i>
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Contact Number *
          </label>

          <div class="input-group mb-3">
            <input
              type="number"
              value={number}
              required
              // placeholder="number"
              style={{ width: 400 }}
              onChange={(e) => setNumber(e.target.value)}
              maxLength="10"
              minLength="10"
            />
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            EMAIL ADDRESS *
          </label>

          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              id="basic-url"
              style={{ borderColor: "black" }}
              aria-describedby="basic-addon3"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Requirement *
          </label>

          <div class="input-group mb-3">
            <textarea
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              style={{ height: "80px", borderColor: "black" }}
              required
              value={requirement}
              // placeholder="Requirement"
              onChange={(e) => setRequirement(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary align-items-center justify-content-center register_button"
            // type="submit"
            style={{
              marginLeft: "19%",
              borderRadius: "0px",
              fontSize: "18px",
              marginTop: "5px",
              paddingLeft: "70px",
              paddingRight: "70px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            onClick={() => {
              // setModal(false);
              if (
                number !== "" &&
                email !== "" &&
                requirement !== "" &&
                email.match(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ) &&
                number.match(/^\d{10}$/)
              ) {
                handleSubmit(number,email,requirement)
                setModal4(true);
                setModal(false);
                setNumber("");
                setEmail("");
                setRequirement("");
              }
              // modal3 === true ? setModal3(false) : setModal3(true);
            }}
          >
            SUBMIT
          </button>
        </form>
      </Modal>
      <Modal isOpen={modal2} style={customStyles3} contentLabel="Example Modal">
        <form className="" >
          <div className="d-flex modal_head">
            <h3
              className="black-text"
              style={{
                fontSize: "20px",
                marginBottom: "30px",
                marginTop: "20px",
                fontWeight: "400",
                color: "black",
              }}
            >
              {" "}
              Fill up The From
            </h3>

            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "20px" }}
              onClick={() => setModal2(false)}
            ></i>
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Contact Number *
          </label>

          <div class="input-group mb-3">
            <input
              type="number"
              required
              class="form-control"
              id="basic-url"
              // placeholder="number"
              style={{ width: 400 }}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              maxLength="10"
              minLength="10"
              pattern="[1-9]{1}[0-9]{9}"
            />
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            EMAIL ADDRESS *
          </label>

          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              id="basic-url"
              style={{ borderColor: "black" }}
              aria-describedby="basic-addon3"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <label for="basic-url" style={{ fontSize: "16px", marginBottom: "10px" }}>Requirement *</label>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              style={{ height: "80px", borderColor: "black" }}
              required
              value={requirement}
              // placeholder="Requirement"
              onChange={(e) => setRequirement(e.target.value)}
            />
          </div> */}
          <button
            className="btn btn-primary align-items-center justify-content-center register_button"
            // type="submit"
            style={{
              marginLeft: "17%",
              borderRadius: "0px",
              fontSize: "18px",
              marginTop: "16px",
              paddingLeft: "70px",
              paddingRight: "70px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            // disabled={{onclick}}
            onClick={() => {
              // setModal2(false);
              // setModal3(true)
              if (
                number !== "" &&
                email !== "" &&
                email.match(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ) &&
                number.match(/^\d{10}$/)
              ) {
                handeldownload(number, email)
                setModal3(true);
                setModal2(false);
                setNumber("");
                setEmail("");
                // window.open(data.ameneties.brochure, '_blank')
              }
            }}
          >
            SUBMIT
          </button>
        </form>
      </Modal>

      <Modal isOpen={modal3} style={customStyles2} contentLabel="My dialog">
        <i
          class="fa-solid fa-xmark"
          style={{
            fontSize: "20px",
            paddingLeft: " 53rem",
            paddingTop: "1rem",
          }}
          onClick={() => {
            setModal3(false);
            setModal2(false);
          }}
        ></i>

        <div>
          <Tick size={130} />
        </div>

        <h3 className="black-text" style={{ textAlign: "center" }}>
          Submitted Sucessfully
        </h3>
        {/* <h3 className="black-text" style={{ textAlign: "center" }}>

          We will Contact you soon..
        </h3> */}
        {OngoingData?.map((data, i) => {
          if (data.id !== id) {
            return null;
          }

          return (
            <button
              className="btn btn-primary align-items-center justify-content-center register_button"
              type="submit"
              style={{
                marginLeft: "20%",
                borderRadius: "0px",
                fontSize: "18px",
                marginTop: "16px",
                paddingLeft: "70px",
                paddingRight: "70px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              onClick={() => {
                // setModal2(false);
                // setModal3(true)
                // modal2 === false ? setModal2(false) : setModal3(true);
                window.open(data.ameneties.brochure, "_blank");
              }}
            >
              DOWNLOAD BROCHURE
            </button>
          );
        })}
      </Modal>

      <Modal isOpen={modal4} style={customStyles2} contentLabel="My dialog">
        <i
          class="fa-solid fa-xmark"
          style={{
            fontSize: "20px",
            paddingLeft: " 53rem",
            paddingTop: "1rem",
          }}
          onClick={() => {
            setModal(false);
            setModal4(false);
          }}
        ></i>

        <div>
          <Tick size={130} />
        </div>

        <h3 className="black-text" style={{ textAlign: "center" }}>
          Submitted Sucessfully
        </h3>
        {/* <h3 className="black-text" style={{ textAlign: "center" }}>

          We will Contact you soon..
        </h3> */}
      </Modal>

      <Confirmation open={open} setOpen={setOpen} />
    </div>
  );
}
