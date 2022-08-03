import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/Company_Logo/ArchidLogo.png';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import Modal from 'react-modal';

export default function Drawer() {

  const [modal, setModal] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"400px",
      height:"500px",
      zIndex:"200"
    },
  };

  return (
    <div>

    <Navbar collapseOnSelect expand="lg" className='navbar-bg'>
      <Container fluid style={{ zIndex:"10", backgroundColor: 'white' }}>
      
        <NavLink className="logoone" to="/" style={{ paddingLeft:15, borderWidth: 0, }}>
          <Image className="logoimg" src={Logo} style={{ height: 65, }}/>
        </NavLink>
        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link className="n-link" style={{ }}>

              <NavLink to="/communities" >
                COMMUNITIES
              </NavLink>
            </Nav.Link>

            <Nav.Link className="n-link" style={{   }}>
              <NavLink to="/offers">OFFERS
              </NavLink>
            </Nav.Link>

            <Nav.Link className="n-link" style={{  }}>
              <NavLink to="/event">

                EVENTS
              </NavLink>
            </Nav.Link>

            <Nav.Link className="n-link" style={{  }}>
              <NavLink to="/latest-launch">
                LATEST LAUNCHES
              </NavLink>
            </Nav.Link>

            <Nav.Link className="n-link" style={{}}>
              <NavLink to="/team">

                OUR TEAM
              </NavLink>
            </Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link className='d-flex right-link navbtn' >
              {/* <i class="fa fa-video mx-2  my-1"></i> */}
              <i class="bi bi-camera-video iconbi"></i>
              <p className="textp" >Instant Video Call</p>
            </Nav.Link>
            <Nav.Link className='d-flex right-link navbtn' >
              {/* <i class="fa-brands fa-whatsapp mx-2  my-1"></i> */}
              <i class="bi bi-whatsapp iconbi"></i>
              <p className="textp" >Whatsapp</p>
            </Nav.Link>
            <Nav.Link className='d-flex right-link getbtn' style={{paddingTop:"10px"}}>
              <button className='btn btn-primary ' onClick={()=>{
                modal===true ? setModal(false):setModal(true)

              }}>Get in touch</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


{/* modal */}
<Modal data-aos="fade-left"
        isOpen={modal}
       style={customStyles}
        contentLabel="Example Modal"
      >
      <form className=''>
        <div className='d-flex'>

        <h3 className='black-text'> GET IN TOUCH</h3>
        <i class="fa-solid fa-xmark" style={{marginLeft:"120px", fontSize:"30px"}} onClick={()=>setModal(false)}></i>
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
 
  <textarea type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" style={{height:"160px"}} required/>
</div>
<button className='btn btn-primary text-center' style={{marginLeft:"0%"}}>Submit</button>
        </form>
      </Modal>
  </div>
  )
}
