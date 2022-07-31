import formImage from "../images/formImage.svg"
import "./index.css"
const ContactUsForm = () => {
    return ( 
        <div className="contact-us-form-container">
          <form className="contact-us-form">
          <div className="form-heading ">
          <div >GET IN TOUCH</div>
          <div className="form-line">
          </div>
          </div>
          <div  className="form-input-container">
          <div className="contact-us-form-label">Name</div>
          <input type="text"  name="name"/>
          </div>
          <div >
          <div className="contact-us-form-label">Number</div>
          <input type="number" id="lname" name="number"/>
          </div>
          <div >
          <div className="contact-us-form-label" >Email ID</div>
          <input type="email" id="lname" name="email"/>
          </div>
          <button type="submit" className="form-button">Submit</button>
          
          </form>
          <img className="image-remove" src={formImage} alt="Loading..." />

        </div>
       

     );
}
 
export default ContactUsForm;