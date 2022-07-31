import React from 'react'
import './Footer.css'
import logo from "./logo.png"
export default function Footer1() {
  return (
    <div>
        <div className='footer back-img '>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6'>
                    <div className='first-side text-center justify-content-center my-5 d-flex'>
                    <img src={logo}></img>
                {/* <div className="logo-img"></div> */}
                <div className='icon mt-5 mx-5'>
                <i class="fa-brands fab fa-instagram"></i>
                <i class="fa-brands fab fa-twitter"></i>
                <i class="fa-brands fab fa-facebook"></i>
                </div>
                    </div>
       
                </div>


                <div className='col-lg-4 col-md-4 col-sm-6'>
 <div className="container text-center justify-content-center my-5">
        
          <div className='d-flex'>
          <i class="fa-solid fa-location-dot fab mt-4 mx-4"></i>
            <p style={{}} className="mt-3">
              Archid Builders Pvt. Ltd. Plot No:315, “Archid Central” <br />
              Fourth Floor, Behind BPCL Petrol Pump District Center,
              Chandrashekherpur Bhubaneswar-751016 Odisha
            </p>
        
          </div>
          <div className="map-component ">
                  <p className="map-text">Map</p>
        </div>

        <div className='email d-flex text-center mx-4 ' style={{paddingLeft:"50px"}}>
        <i class="fa-solid fa-envelope mx-3 mt-1" style={{fontSize:"25px", color :"white"}}></i>
            <p>archidhomes@gmail.com</p>
        </div>
        <div className='contact-details d-flex my-3' >
        <i class="fa-solid fa-phone "  style={{fontSize:"25px", color :"white", paddingLeft:"70px"}}></i>
        <p className=" px-2">+91 7537 000 001</p>
        <i class="fa-solid fa-phone px-1"  style={{fontSize:"25px", color :"white"}}></i>
        <p className=" px-3">+91 7381 040 001</p>
        </div>
        </div>
       
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12'>
        <div className='form'>
        <form className=''>
        <div className='d-flex'>

        <h3 className='black-text'> GET IN TOUCH</h3>
        {/* <i class="fa-solid fa-xmark" style={{marginLeft:"120px", fontSize:"30px"}} ></i> */}
        </div>
      <label for="basic-url">Mobile Number</label>
<div class="input-group mb-3">
 
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required/>
</div>

<label for="basic-url">Email Address</label>
<div class="input-group mb-3">
 
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" required/>
</div>
<label for="basic-url">Your Requirement</label>
<div class="input-group mb-3">
 
  <textarea type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" style={{height:"40px"}} required/>
</div>
<button className='btn btn-primary text-center' style={{marginLeft:"0%"}}>Submit</button>
        </form>
      
        </div>
        </div>
                </div>

            </div>
        </div>


  )
}
