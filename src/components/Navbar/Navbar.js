import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../images/Company_Logo/png ar.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Modal from "react-modal";
import Modal1 from "react-modal";
import DateTimePicker from "react-datetime-picker";
import Image1 from "../../images/Company_Logo/png ar.png";

export default function Drawer() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [value, onChange] = useState(new Date());
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "300px",
      borderRadius: "0px",
      height: "400px",
      zIndex: "200",
    },
  };
  const customStyles1 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "628px",
      height: "364px",
      zIndex: "200",
      borderRadius: "20px",
    },
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-bg">
        <Container
          fluid
          style={{ zIndex: "10", backgroundColor: "white", padding: 0 }}
        >
          <NavLink
            className="logoimg"
            to="/"
            style={{ paddingLeft: 27, paddingbottom: 0, borderWidth: 0 }}
          >
            <img src={Logo} style={{ height: 100 }} />
          </NavLink>
          {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navtext">
              <Nav.Link
                className="n-link"
                style={{ color: "#3171B1", fontWeight: 600 }}
              >
                <NavLink to="/communities" style={{ padding: 10 }}>
                  COMMUNITIES
                </NavLink>
              </Nav.Link>

              <Nav.Link
                className="n-link"
                style={{ color: "#3171B1", fontWeight: 600 }}
              >
                <NavLink to="/offers" style={{ padding: 10 }}>
                  OFFERS
                </NavLink>
              </Nav.Link>

              <Nav.Link
                className="n-link"
                style={{ color: "#3171B1", fontWeight: 600 }}
              >
                <NavLink to="/event" style={{ padding: 10 }}>
                  EVENTS
                </NavLink>
              </Nav.Link>

              <Nav.Link
                className="n-link"
                style={{ color: "#3171B1", fontWeight: 600 }}
              >
                <NavLink to="/latest-launch" style={{ padding: 10 }}>
                  LATEST LAUNCHES
                </NavLink>
              </Nav.Link>

              <Nav.Link
                className="n-link"
                style={{ color: "#3171B1", fontWeight: 600 }}
              >
                <NavLink to="/team" style={{ padding: 10 }}>
                  OUR TEAM
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav className="rightnav">
              <Nav.Link className=" right-link navbtn">
                {/* <i class="fa fa-video mx-2  my-1"></i> */}
                <i class="bi bi-camera-video iconbi"></i>
                {/* <button
                  className="btn btn-primary "
                  onClick={() => {
                    modal1 === true ? setModal1(false) : setModal1(true);
                  }}
                >
                  INSTANT VIDEO CALL
                </button> */}
                <p
                  className="textp"
                  onClick={() => {
                    modal1 === true ? setModal1(false) : setModal1(true);
                  }}
                >
                  Instant Video Call
                </p>
              </Nav.Link>
              <Nav.Link
                href="https://wa.me/917064605160"
                target="_blank"
                className=" right-link navbtn"
              >
                {/* <i class="fa-brands fa-whatsapp mx-2  my-1"></i> */}
                <i class="bi bi-whatsapp iconbi"></i>
                <p className="textp">Whatsapp</p>
              </Nav.Link>
              <Nav.Link className=" right-link getbtn" style={{}}>
                <button
                  className="btn "
                  onClick={() => {
                    modal === true ? setModal(false) : setModal(true);
                  }}
                >
                  GET IN TOUCH
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* modal */}
      <Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <form className="">
          <div className="d-flex modal_head">
            <h3 className="black-text"> GET IN TOUCH</h3>
            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "20px" }}
              onClick={() => setModal(false)}
            ></i>
          </div>
          <label
            for="basic-url"
            style={{ fontSize: "12px", marginBottom: "10px" }}
          >
            MOBILE NUMBER <span style={{ color: "red" }}>*</span>
          </label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              style={{ borderColor: "black" }}
              aria-describedby="basic-addon3"
              required
            />
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "12px", marginBottom: "10px" }}
          >
            EMAIL ADDRESS <span style={{ color: "red" }}>*</span>
          </label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              style={{ borderColor: "black" }}
              aria-describedby="basic-addon3"
              required
            />
          </div>
          <label
            for="basic-url"
            style={{ fontSize: "12px", marginBottom: "10px" }}
          >
            REQUIREMENT <span style={{ color: "red" }}>*</span>
          </label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              style={{ height: "80px", borderColor: "black" }}
              required
            />
          </div>
          <button
            className="btn btn-primary text-center align-items-center justify-content-center"
            style={{
              marginLeft: "30%",
              borderRadius: "0px",
              fontSize: "12px",
              marginTop: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            SUBMIT
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={modal1}
        style={customStyles1}
        id="modal1"
        contentLabel="Example Modal"
      >
        <div>
          <form>
            <div className="d-flex modal_head">
              <h3 className="black-text" style={{ marginBottom: "15px" }}>
                SCHEDULE MEETING WITH THE SALES TEAM
              </h3>

              <i
                class="fa-solid fa-xmark"
                style={{ fontSize: "20px" }}
                onClick={() => setModal1(false)}
              ></i>
            </div>
            <label
              for="basic-url"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              Full Name
            </label>
            <br />
            <div
              style={{ width: "300px" }}
              class="input-group mb-3 input_responsive"
            >
              <input
                type="text"
                class="form-control "
                id="basic-url"
                style={{
                  borderColor: "gray",
                  borderRadius: "0px",
                  height: "29px",
                }}
                aria-describedby="basic-addon3"
                required
              />
            </div>
            <br />
            <label
              for="basic-url"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              Email Address
            </label>

            <div
              style={{ width: "300px" }}
              class="input-group mb-3"
              id="input_responsive"
            >
              <input
                type="text"
                class="form-control "
                id="basic-url"
                style={{
                  borderColor: "gray",
                  borderRadius: "0px",
                  height: "29px",
                }}
                aria-describedby="basic-addon3"
                required
              />
            </div>
            <br />

            <label
              for="basic-url"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              Select Date and Time
            </label>
            <div>
              <DateTimePicker onChange={onChange} value={value} />
            </div>
            <br />

            <button
              className="btn btn-primary text-center"
              style={{
                fontSize: "15px",
                paddingLeft: "20px",
                marginLeft: "36%",
                paddingRight: "20px",
                borderRadius: "0px",
              }}
            >
              Submit
            </button>
          </form>
          <img
            className="img_hide"
            style={{
              marginTop: "-277px",
              marginLeft: "356px",
              height: "169px",
              width: "185px",
            }}
            src={Image1}
            alt=""
          ></img>
        </div>
      </Modal>
    </div>
  );
}
