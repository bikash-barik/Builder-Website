import React, { useState, useRef } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../images/Company_Logo/png ar.png";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Modal from "react-modal";

import DateTimePicker from "react-datetime-picker";
import Image1 from "../../images/Company_Logo/png ar.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button, Container } from "react-bootstrap";

import { resetWarningCache, Tick } from "react-crude-animated-tick";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Input } from "@mui/material";
import { getValue, isDisabled } from "@testing-library/user-event/dist/utils";



async function handleMeeting (name,email,Date_Time) {
  // e.preventDefault();
  try {
    let res = await fetch(
      "https://dpsc-370710.el.r.appspot.com/add_meeting",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          Date_Time: Date_Time,
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson);
    if (resJson.status) {
      // setName("");
      // setEmail("");
      // setDateTime("User created successfully");
    } else {
      // setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};


async function visitsubmit (name,email,number,Date_Time,type)  {
  // e.preventDefault();
  try {
    let res = await fetch("https://dpsc-370710.el.r.appspot.com/add_visit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        number: number,
        // requirement: requirement,
        Date_Time: Date_Time,
        type: type,
      }),
    });
    let resJson = await res.json();
    console.log(resJson);
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


export default function Drawer() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [Date_Time, onChange] = useState(new Date());
  // const [num, setNum] = useState()

  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [name, setName] = useState("");
  const [type, setProperty] = useState("");
  // const [Date_Time, setDateTime] = useState("");
  const [message, setMessage] = useState("");

  const [modal3, setModal3] = useState(false);
  const [modal6, setModal6] = useState(false);
  
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
  const customStyles3 = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "390px",
      height: "520px",
      zIndex: "200",
      borderRadius: "20px",
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
  // const name = useRef(null)
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  // const initialState = { name: null, email: null, number: null,Date_Time:null, type:null }
  /*const handleClose = () => setOpen(false);*/

  

  let handleSubmit = async (e) => {
    e.preventDefault();
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
      if (resJson.status) {
        setNumber("");
        setEmail("");
        setRequirement("");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  // const handleContact = (e) => {
  //   e.preventDefault()
  //   if (num.length > 0 && email.current.value.length > 0) {
  //     const submit = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         Date_Time: Date_Time,
  //       }),
  //     };
  //     fetch('https://dd4e2865a060.in.ngrok.io/add_inquiry', submit)

  //       .then(() => handleClick())
  //   }
  //   e.number.reset();
  // }

  // const handleMeeting = (e) => {

  //   e.preventDefault()
  //   if (name.current.value.length > 0 && email.current.value.length > 0) {
  //     const submit = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         Date_Time: Date_Time,
  //       }),
  //     };
  //     fetch('https://4cfc0d114e77.au.ngrok.io/add_meeting', submit)
  //       .then(() => handleClick())
  //   }
  // }

  return (
    <div className="archid-navbar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <NavLink
            className="logoimg"
            to="/"
            style={{ paddingLeft: 27, paddingbottom: 0, borderWidth: 0 }}
          >
            <img src={Logo} style={{ height: 100 }} alt="Loading..." />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navtext">
            <Nav.Link
              href="#home"
              className="n-link"
              style={{ color: "#3171B1", fontWeight: 600 }}
            >
              <NavLink to="/communities" style={{ padding: 10 }}>
                COMMUNITIES
              </NavLink>
            </Nav.Link>

            <Nav.Link
              href="#home"
              className="n-link"
              style={{ color: "#3171B1", fontWeight: 600 }}
            >
              <NavLink to="/offers" style={{ padding: 10 }}>
                OFFERS
              </NavLink>
            </Nav.Link>

            <Nav.Link
              href="#home"
              className="n-link"
              style={{ color: "#3171B1", fontWeight: 600 }}
            >
              <NavLink to="/event" style={{ padding: 10 }}>
                EVENTS
              </NavLink>
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="n-link"
              style={{ color: "#3171B1", fontWeight: 600 }}
            >
              <NavLink to="/latest-launch" style={{ padding: 10 }}>
                LATEST LAUNCHES
              </NavLink>
            </Nav.Link>

            <Nav.Link
              href="#home"
              className="n-link"
              style={{ color: "#3171B1", fontWeight: 600 }}
            >
              <NavLink to="/team" style={{ padding: 10 }}>
                OUR TEAM
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav className="rightnav">
            <Nav.Link className=" right-link navbtn" href="#home">
              <i class="bi bi-camera-video iconbi"></i>

              <p
                className="textp"
                onClick={() => {
                  modal1 === true ? setModal6(false) : setModal1(true);
                  setModal6(false);
                }}
              >
                Instant Video Call
              </p>
            </Nav.Link>
            <Nav.Link
              href="https://wa.me/917537000001"
              target="_blank"
              className=" right-link navbtn"
            >
              <i class="bi bi-whatsapp iconbi"></i>
              <p className="textp">Whatsapp</p>
            </Nav.Link>
            {/* <Nav.Link className=" right-link navbtn" href="#home">
              {/* <i class="bi bi-camera-video iconbi"></i> 
              <i class="bi bi-building"></i>

              <p
                className="textp"
                onClick={() => {
                  modal1 === true ? setModal6(false) : setModal6(true);
                }}
              >
                Book Your Site Visit
              </p>
            </Nav.Link> */}
            <Nav.Link className=" right-link getbtn" href="#home" style={{}}>
              <button
                className="btn "
                onClick={() => {
                  // modal === true ? setModal(false) : setModal(true);
                  modal6 === true ? setModal6(false) : setModal6(true);
                  setModal1(false)
                }}
              >
                Book Your Site Visit
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* modal */}
      <Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <form className="" >
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
              type="tel"
              value={number}
              placeholder="number"
              style={{ width: 400 }}
              onChange={(e) => setNumber(e.target.value)}
              // maxLength="10"
              // minLength="10"
              onKeyDown="if(this.value.length==2 && event.keyCode!=8) return false;"
              // pattern="[1-9]{1}[0-9]{9}"
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
              value={requirement}
              placeholder="Requirement"
              onChange={(e) => setRequirement(e.target.value)}
            />
          </div>
          {/* <button type="submit">Create</button> */}
          <label
            for="basic-url"
            style={{ fontSize: "15px", marginBottom: "5px" }}
          >
            Select Date and Time
          </label>
          <div>
            <DateTimePicker
              // onChange={(e) => setDateTime(e.target.value)}
              onChange={onChange}
              value={Date_Time}
            />
          </div>
          <br />

          <button
            className="btn btn-primary align-items-center justify-content-center"
            style={{
              marginLeft: "30%",
              borderRadius: "0px",
              fontSize: "12px",
              marginTop: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            type="submit"
            // disabled={isValidPhoneNumber==true}

            // disabled={}

            onClick={() => {
              // setModal(false);

              // setModal3(true)
              // if(number!==true ? email !==true:false ?requirement!==true:false ?Date_Time!==true:false){
              //   setModal3(true)
              // }

              // modal3 === true ? setModal3(false) : setModal3(true);

              if (
                number !== "" &&
                email !== "" &&
                Date_Time !== "" &&
                email.match(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                )
              ) {
               
                setModal3(true);
                setModal(false);
                
              }
            }}
            // disabled={this.state.number === "" ? true : false}
            //   style={this.state.number===""?{
            //       backgroundColor: "#C4C4C4", alignItems: "center", justifyContent: "center", height: 50,
            //       width: "85%", alignSelf: "center", borderRadius: 10
            //   }:{backgroundColor: "#1DCDFE", alignItems: "center", justifyContent: "center", height: 50,
            //   width: "85%", alignSelf: "center", borderRadius: 10}}>
            //       {/* <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>Verify & Proceed</Text> */}
            // {/* // onClick={() => setModal3(false)} */}
          >
            SUBMIT
          </button>
        </form>
      </Modal>
      <Modal
        isOpen={modal6}
        style={customStyles3}
        id="modal1"
        contentLabel="Example Modal"
      >
        <div>
          <form >
            <div className="d-flex modal_head">
              <h3 className="black-text" style={{ marginBottom: "15px" }}>
                Site Visit Details
              </h3>

              <i
                class="fa-solid fa-xmark"
                style={{ fontSize: "20px" }}
                onClick={() => setModal6(false)}
              ></i>
            </div>
            <label
              for="basic-url"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              Full Name <span style={{ color: "red" }}>*</span>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <label
              for="basic-url"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              Email Address <span style={{ color: "red" }}>*</span>
            </label>

            <div
              style={{ width: "300px" }}
              class="input-group mb-3"
              id="input_responsive"
            >
              <input
                type="email"
                class="form-control "
                id="basic-url"
                style={{
                  borderColor: "gray",
                  borderRadius: "0px",
                  height: "29px",
                }}
                aria-describedby="basic-addon3"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <label
              for="basic-url"
              style={{ fontSize: "12px", marginBottom: "10px" }}
            >
              MOBILE NUMBER <span style={{ color: "red" }}>*</span>
              {/* <span style={{ color: "red" }}>*</span> */}
            </label>
            <div class="input-group mb-3">
              <input
                type="number"
                value={number}
                // placeholder="number"
                style={{ width: "300px" }}
                onChange={(e) => setNumber(e.target.value)}
                // pattern="[1-9]{1}[0-9]{9}"
                // onKeyDown="if(this.value.length==2 && event.keyCode!=8) return false;"
                // // maxlength="10"
                maxLength="10"
                minLength="10"
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
              <DateTimePicker
                // onChange={(e) => setDateTime(e.target.value)}
                onChange={onChange}
                value={Date_Time}
              />
            </div>
            <br />
            <label
              for="basic-url"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              OnGoing Project <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <div
              style={{ width: "300px" }}
              class="input-group mb-3 input_responsive"
            >
              {/* <input
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
                placeholder=" Duplex / 
                Apartment"
                value={type}
                onChange={(e) => setProperty(e.target.value)}
              /> */}
              <select
                style={{ width: "305px", height: "30px", fontSize: 18 }}
                name=""
                value={type}
                select
                onChange={(e) => {
                  setProperty(e.target.value);
                }}
                // onChange={(e) => { setProperty(e.target.value) }}
              >
                <option value="">Select..</option>

                <option value={"Archid Pramod retreat"}>
                  Archid Pramod retreat{" "}
                </option>
                <option value={"Archid Sailabala"}>Archid Sailabala </option>
                <option value={"Archid Harmony"}>Archid Harmony</option>
                <option value={"Archid Shreekunj"}>Archid Shreekunj</option>
              </select>
            </div>

            <button
              className="btn btn-primary"
              style={{
                fontSize: "15px",
                paddingLeft: "20px",
                marginLeft: "36%",
                paddingRight: "20px",
                borderRadius: "0px",
              }}
              // type="submit"
              onClick={() => {
                // setModal3(true)
                
                if (
                  name !== "" &&
                  email !== "" &&
                  number !== "" &&
                  Date_Time !== "" &&
                  type !== "" &&
                  email.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  ) &&
                  name.match(/^[a-zA-Z ]{2,30}$/) &&
                  number.match(/^\d{10}$/)
                ) {
                  visitsubmit(name,email,number,Date_Time,type);
                  setModal6(false);
                  setModal3(true);
                  setName("");
                  setEmail("");
                  setNumber("");
                  Date_Time("");
                  type("");
                }
                // setModal1(false);
              }}
            >
              Submit
            </button>
          </form>
          {/* <img
            className="img_hide"
            style={{
              marginTop: "-277px",
              marginLeft: "356px",
              height: "169px",
              width: "185px",
            }}
            src={Image1}
            alt="Loading..."
          ></img> */}
        </div>
      </Modal>

      <Modal
        isOpen={modal1}
        style={customStyles1}
        id="modal1"
        contentLabel="Example Modal"
      >
        <div>
          <form >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                type="email"
                class="form-control "
                id="basic-url"
                style={{
                  borderColor: "gray",
                  borderRadius: "0px",
                  height: "29px",
                }}
                aria-describedby="basic-addon3"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />

            <br />

            <label
              for="basic-url"
              style={{ fontSize: "15px", marginBottom: "5px" }}
            >
              Select Date and Time
            </label>
            <div>
              <DateTimePicker
                // onChange={(e) => setDateTime(e.target.value)}
                onChange={onChange}
                value={Date_Time}
              />
            </div>
            <br />

            <button
              // disabled
              className="btn btn-primary"
              style={{
                fontSize: "15px",
                paddingLeft: "20px",
                marginLeft: "36%",
                paddingRight: "20px",
                borderRadius: "0px",
              }}
              type="submit"
              
              
              // disabled={}
              onClick={() => {
                // setModal3(true)
                if (
                  name !== "" &&
                  email !== "" &&
                  Date_Time !== "" &&
                  email.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  ) &&
                  name.match(/^[a-zA-Z ]{2,30}$/)
                ) {
                  handleMeeting(name,email,Date_Time);
                  setModal1(false);
                  setModal3(true);
                  setName("");
        setEmail("");
                  // setModal1();
                }
                // setModal1(false);
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
            alt="Loading..."
          ></img>
        </div>
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
            setModal1(false);
            setModal6(false);

          }}
          
        ></i>

        <div>
          <Tick size={130} />
        </div>

        <h3 className="black-text" style={{ textAlign: "center" }}>
          Submitted Sucessfully
        </h3>
        <h3 className="black-text" style={{ textAlign: "center" }}>
          We will Contact you soon..
        </h3>
      </Modal>

      <Container open={open} setOpen={setOpen} />
    </div>
  );
}
