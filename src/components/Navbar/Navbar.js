import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/Company_Logo/ArchidLogo.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Drawer() {


  return (
    <div>

<Navbar collapseOnSelect expand="lg" className='navbar-bg'>
        <Container fluid>
          <NavLink to="/Main" style={{ paddingLeft: 50, borderWidth: 0, }}>
            <img src={Logo} style={{ height: 90, }} />
          </NavLink>
          {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link className="n-link" style={{padding:50,fontSize:18, color:'#3171B1', fontWeight:600}}>

                <NavLink to="/Communities" >
                  COMMUNITIES
                </NavLink>
              </Nav.Link>

              <Nav.Link className="n-link" style={{padding:50,fontSize:18, color:'#3171B1', fontWeight:600}}>
                <NavLink to="/offers">OFFERS
                </NavLink>
              </Nav.Link>

              <Nav.Link className="n-link" style={{padding:50,fontSize:18, color:'#3171B1', fontWeight:600}}>
                <NavLink to="/event">

                  EVENTS
                </NavLink>
              </Nav.Link>

              <Nav.Link className="n-link" style={{padding:50,fontSize:18, color:'#3171B1', fontWeight:600}}>
                <NavLink to="/latest-launch">
                  LATEST LAUNCHES
                </NavLink>
              </Nav.Link>

              <Nav.Link className="n-link" style={{padding:50,fontSize:18, color:'#3171B1', fontWeight:600}}>
                <NavLink to="/team">

                  OUR TEAM
                </NavLink>
              </Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link className='d-flex right-link'>
                <i class="fa-solid fa-video mx-2  my-1"></i>
                <p className="" >Instant Video Call</p>
              </Nav.Link>
              <Nav.Link className='d-flex right-link'>
                <i class="fa-brands fa-whatsapp mx-2  my-1"></i>
                <p className="" >Whatsapp</p>
              </Nav.Link>
              <Nav.Link className='d-flex right-link'>
                <button className='btn btn-primary'>Get in touch</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


</div>
  )
}
