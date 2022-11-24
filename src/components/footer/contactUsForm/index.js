import { useRef, useState } from "react"

import formImage from "../images/formImage.svg"
import "./index.css"
import Confirmation from "../.././confirmationSnackbar"
import Modal from "react-modal";
import { Tick } from 'react-crude-animated-tick';


const ContactUsForm = () => {
  const name = useRef(null)
  const number = useRef(null)
  const email = useRef(null)
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

  const handleContact = (e) => {
    e.preventDefault()

    
    if (name.current.value.length > 0 && number.current.value.length > 0 && email.current.value.length>0)
    {
      const submit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.current.value, number: number.current.value, email: email.current.value, requirement: "" })
      };
      fetch('https://archid.herokuapp.com/add_inquiry', submit)
        .then(() => handleClick())
    }
    
  }
  return (
    
    <div className="contact-us-form-container ">
      <form className="contact-us-form" onSubmit={handleContact} >
        <div className="form-heading ">
          <div >GET IN TOUCH</div>
          <div className="form-line">
          </div>
        </div>
        <div className="form-input-container">
          <div className="contact-us-form-label">Name</div>
          <input ref={name} required type="text" name="name" />
        </div>
        <div >
          <div className="contact-us-form-label">Number</div>
          <input ref={number} required type="number" id="lname" name="number" />
        </div>
        <div >
          <div className="contact-us-form-label" >Email ID</div>
          <input ref={email} required type="email" id="lname" name="email" />
        </div>
        <button 
        
            type="submit" className="form-button"


            onClick = {()=>
            {
              if (name.current.value.length > 0 && number.current.value.length > 0 && email.current.value.length>0)
            {
                
                modal3 === true ? setModal3(false) : setModal3(true);
              }   
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