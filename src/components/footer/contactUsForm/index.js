import { useRef, useState } from "react"

import formImage from "../images/formImage.svg"
import "./index.css"
import Confirmation from "../.././confirmationSnackbar"
import Modal from "react-modal";
import { Tick } from 'react-crude-animated-tick';


async function handleSubmit  (number,email,requirement) {
  // e.preventDefault();
  try {
    let res = await fetch("https://dpsc-370710.el.r.appspot.com/add_inquiry", {
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
    });
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


const ContactUsForm = () => {
  const name = useRef(null)
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false)

  const [modal3, setModal3] = useState(false);

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

  const handleClick = () => {
    setOpen(true);
  };
  
  // const handleContact = (e) => {
  //   e.preventDefault()


  //   if (name.current.value.length > 0 && number.current.value.length > 0 && email.current.value.length > 0) {
  //     const submit = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ name: name.current.value, number: number.current.value, email: email.current.value, requirement: "" })
  //     };
  //     fetch('https://4cfc0d114e77.au.ngrok.io/add_inquiry', submit)
  //       .then(() => handleClick())
  //   }

  // }
  return (

    <div className="contact-us-form-container ">
      <form className="contact-us-form"  >
        <div className="form-heading ">
          <div >GET IN TOUCH</div>
          <div className="form-line">
          </div>
        </div>
        <div className="form-input-container">
          <div className="contact-us-form-label">Contact Number</div>
          {/* <input ref={name} required type="text" name="name" /> */}
          <input
            type="number"
            value={number}
            required
            maxLength="10"
            minLength="10"
            pattern="[1-9]{1}[0-9]{9}"
            
            // placeholder="number"
            // style={{ width: 160}}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div >
          <div className="contact-us-form-label">Email</div>
          {/* <input ref={number} required type="number" id="lname" name="number" /> */}
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
        <div >
          <div className="contact-us-form-label" >Requirement</div>
          {/* <input ref={email} required type="email" id="lname" name="email" /> */}
          <textarea
            type="textarea"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            style={{ height: "80px", borderColor: "black",width:"100%",marginRight:35 }}
            required
            value={requirement}
            // placeholder="Requirement"
            onChange={(e) => setRequirement(e.target.value)}
          />
        </div>
        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        <button

          // type="submit"
           className="form-button"


          onClick={() => {
            // setModal(false);
            if(number!==""&&email!=="",requirement!==""){
              handleSubmit(number,email,requirement)
              setModal3(true)
              setNumber("")
              setEmail("")
              setRequirement("")
          }
            // modal3 === true ? setModal3(false) : setModal3(true);
          }}



        >Submit</button>

      </form>
      <img className="footer-form-image " src={formImage} alt="Loading..." />

      <Modal isOpen={modal3} style={customStyles2} contentLabel="My dialog">


        <i
          class="fa-solid fa-xmark"
          style={{ fontSize: "20px", paddingLeft: " 53rem", paddingTop: "1rem" }}
          onClick={() => setModal3(false)}
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
      <Confirmation open={open} setOpen={setOpen} />

    </div>


  );
}

export default ContactUsForm;