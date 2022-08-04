import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProperty.css";
import gallery from "../../images/ongoing/gallery.png";
import share from "../../images/ongoing/share2.png";
import { Link } from "react-router-dom";
import facilities from "../../images/ongoing/archid.png";
import Modal from "react-modal";
import FloorPlan from "./subcomponent/onGoingSiteFloorPlans/FloorPlan";
import {
  ranasinghpur,
  patrapada,
  oldTown,
} from "./subcomponent/onGoingSiteFloorPlans/imageConfig";
// import OngoingData from '../data/ongoing';

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
      width: "400px",
      height: "500px",
      zIndex: "200",
    },
  };
  console.log(id);
  const [paramId, setparamid] = useState(id);

  return (
    <div className="single_background">
      {OngoingData.filter((list) => list.id === paramId).map((data, i) => (
        <>
          <div>
            <p></p>
            <div className="landing-image">
              <img src={data.bg} />
            </div>
            <div className="button-grp">
              <div
                className="btn btn-primary mx-2 px-2"
                onClick={() => {
                  setModal(true);
                }}
              >
                REGISTER YOUR INTEREST{" "}
              </div>
              <Link to={`/slider`}>
                <div className="btn btn-light mx-2 ">
                  GALLERY{" "}
                  <img
                    src={gallery}
                    style={{ width: "1.3rem", marginLeft: "6px" }}
                  />{" "}
                </div>
              </Link>
              <div className="btn btn-light mx-2 ">
                SHARE{" "}
                <img
                  src={share}
                  style={{ width: "1.2rem", marginLeft: "6px" }}
                />{" "}
              </div>
            </div>
            <section className="highlights container-fluid text-center ">
              <div className="d-flex">
                <h5>Project highlights </h5>
                <hr
                  style={{
                    width: "150px",
                    backgroundColor: "white",
                    fontWeight: "",
                    height: "1.3px",
                    marginLeft: "5px",
                    opacity: "0.8",
                  }}
                />
              </div>
              <div className="row my-2 justify-content-center">
                {data.highlight.map((img, i) => (
                  <div className="col-lg-3 col-md-3 col-sm-4 my-2">
                    <img
                      src={img.detail}
                      className="detail-img"
                      data-aos={i <= 4 ? "fade-right" : "fade-left"}
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    ></img>
                  </div>
                ))}
              </div>
              <div className="detail-1">
                <div className="d-flex">
                  <h4 className="black-text">{data.title}</h4>
                  <hr
                    style={{
                      width: "150px",
                      backgroundColor: "black",
                      fontWeight: "",
                      height: "1.3px",
                      marginLeft: "5px",
                      opacity: "0.8",
                    }}
                  />
                </div>
                <div className="black-text">
                  <h5 className="black-text my-4">{data.details_1}</h5>
                </div>
              </div>
              <div className=" container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <div className="detail-2">
                      <div className="d-flex">
                        <h5 className="black-text" style={{ width: "800px" }}>
                          {data.heading_2}{" "}
                        </h5>
                        <br />
                        <br />
                        <hr
                          style={{
                            width: "150px",
                            backgroundColor: "black",
                            fontWeight: "",
                            height: "1.3px",
                            marginLeft: "5px",
                            opacity: "0.8",
                          }}
                        />
                      </div>
                      <p
                        className="black-text"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        {data.details_2}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <img
                      data-aos="fade-down-left"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      src={data.detailImage1}
                      style={{ height: "100%", width: "100%" }}
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="container-fluid my-5">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <img
                      data-aos="fade-up-right"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      src={data.detailImage2}
                      style={{ height: "100%", width: "100%" }}
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <div className="detail-3">
                      <div className="d-flex">
                        <h5 className="black-text" style={{ width: "800px" }}>
                        {data.heading_3}{" "}
                        </h5>
                        <br />
                        <br />
                        <hr
                          style={{
                            width: "150px",
                            backgroundColor: "black",
                            fontWeight: "",
                            height: "1.3px",
                            marginLeft: "5px",
                            opacity: "0.8",
                          }}
                        />
                      </div>
                      <p
                        className="black-text"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        {data.details_3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <div className="detail-2">
                      <div className="d-flex">
                        <h5 className="black-text" style={{ width: "800px" }}>
                           {data.heading_4}{" "}
                        </h5>
                        <br />
                        <br />
                        <hr
                          style={{
                            width: "300px",
                            backgroundColor: "black",
                            fontWeight: "",
                            height: "1.3px",
                            marginLeft: "5px",
                            opacity: "0.8",
                          }}
                        />
                      </div>
                      <p
                        className="black-text"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        {data.details_4}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <img
                      data-aos="fade-down-left"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      data-aos-offset="400"
                      src={data.detailImage3}
                      style={{ height: "100%", width: "100%" }}
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
              </div>

              <div className=" container-fluid my-5">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <div className="detail-2">
                      <div className="d-flex">
                        <h5 className="black-text">AMENETIES </h5>
                        <hr
                          style={{
                            width: "150px",
                            backgroundColor: "black",
                            fontWeight: "",
                            height: "1.3px",
                            marginLeft: "5px",
                            opacity: "0.8",
                          }}
                        />
                      </div>
                      <p
                        className="black-text"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        {data.amenities}
                      </p>
                      <a href={data.brochure} target="blank">
                        <div
                          className="btn btn-primary"
                          style={{
                            maxWidth: "400px",
                            width: "100%",
                            fontSize: "20px",
                            backgroundColor: "grey",
                          }}
                        >
                          Download Brochure
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                    <img
                      src={facilities}
                      style={{ height: "600px", width: "100%" }}
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
              </div>
              {id === "1" && <FloorPlan floorPlanData={patrapada} />}
              {id === "2" && <FloorPlan floorPlanData={ranasinghpur} />}
              {id === "3" && <FloorPlan floorPlanData={oldTown} />}

              <div
                className=" container-fluid my-5"
                style={{ backgroundColor: "azure" }}
              >
                <div>
                  <div className="d-flex">
                    <h3 className="black-text">Finance facilities </h3>
                    <hr
                      style={{
                        width: "150px",
                        backgroundColor: "black",
                        fontWeight: "",
                        height: "1.3px",
                        marginLeft: "5px",
                        opacity: "0.8",
                      }}
                    />
                  </div>
                  <h3 className="black-text">
                    We are approved by all leading banks like-
                  </h3>
                </div>
                <div className="row">
                  {/* <hr
                          style={{
                            width: "150px",
                            backgroundColor: "black",
                            fontWeight: "",
                            height: "1.3px",
                            marginLeft: "5px",
                            opacity: "0.8",
                          }}
                        /> */}
                  {data.finance.map((img) => (
                    <div className="col-lg-3 col-md-3 col-sm-6 p-0">
                      <img
                        src={img.image}
                        style={{
                          height: "100px",
                          width: "200px",
                          padding: "10px",
                        }}
                        className="black-text  img-fluid"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      ></img>
                    </div>
                  ))}
                </div>
              </div>

              <div className="container-fluid my-5">
                <div className="row">
                  {data.location.map((img) => (
                    <div className="col-lg-6 col-md- col-sm-12 p-0">
                      <img
                        src={img.image}
                        style={{ width: "100%", height: "500px" }}
                      ></img>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </>
      ))}

      <Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <form className="">
          <div className="d-flex">
            <h3 className="black-text"> GET IN TOUCH</h3>
            <i
              class="fa-solid fa-xmark"
              style={{ marginLeft: "120px", fontSize: "30px" }}
              onClick={() => setModal(false)}
            ></i>
          </div>
          <label for="basic-url">Mobile Number</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              required
            />
          </div>

          <label for="basic-url">Email Address</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              required
            />
          </div>
          <label for="basic-url">Your Requirement</label>
          <div class="input-group mb-3">
            <textarea
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              style={{ height: "160px" }}
              required
            />
          </div>
          <button
            className="btn btn-primary text-center"
            style={{ marginLeft: "0%" }}
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
