import { useRef,useState } from "react"

import formImage from "../images/formImage.svg"
import "./index.css"
import Confirmation from "../.././confirmationSnackbar"


const ContactUsForm = () => {
  const name = useRef(null)
  const number = useRef(null)
  const email = useRef(null)
  const [open,setOpen] = useState(false)
  
  const handleClick = () => {
    setOpen(true);
  };
 
  const handleContact = (e)=>{
    e.preventDefault()
  
    const submit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.current.value , number:number.current.value, email:email.current.value,requirement:"" })
  };
  fetch('https://archid.herokuapp.com/add_inquiry', submit)
      .then(() => handleClick() )
   
  
  }
    return ( 
        <div className="contact-us-form-container ">
          <form className="contact-us-form" onSubmit={handleContact} >
          <div className="form-heading ">
          <div >GET IN TOUCH</div>
          <div className="form-line">
          </div>
          </div>
          <div  className="form-input-container">
          <div className="contact-us-form-label">Name</div>
          <input ref={name} required type="text"  name="name"/>
          </div>
          <div >
          <div className="contact-us-form-label">Number</div>
          <input ref={number} required type="number" id="lname" name="number"/>
          </div>
          <div >
          <div className="contact-us-form-label" >Email ID</div>
          <input ref={email} required type="email" id="lname" name="email"/>
          </div>
          <button type="submit" className="form-button">Submit</button>
          
          </form>
          <img className="footer-form-image " src={formImage} alt="Loading..." />
          <Confirmation open={open} setOpen={setOpen} />

        </div>
       

     );
}
 
export default ContactUsForm;