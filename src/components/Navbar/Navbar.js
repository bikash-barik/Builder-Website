import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Drawer() {


  return (
    <div>

    <Navbar collapseOnSelect expand="lg" className='navbar-bg'>
      <Container>
        <Navbar.Brand href="#Communities">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link className="n-link">

            <NavLink to="/Communities">
            COMMUNITIES
            </NavLink>
            </Nav.Link>

            <Nav.Link  className="n-link">
            <NavLink to="/offers">OFFERS
            </NavLink>
            </Nav.Link>
            
            <Nav.Link className="n-link">
              <NavLink to="/event">
              
               EVENTS
              </NavLink>
               </Nav.Link>
         
            <Nav.Link  className="n-link">
            <NavLink to="/latest-launch">
            LATEST LAUNCHES
            </NavLink>
            </Nav.Link>

            <Nav.Link  className="n-link">
            <NavLink to="/team">

            OUR TEAM
            </NavLink>
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link  className='d-flex right-link'>
            <i class="fa-solid fa-video mx-2  my-1"></i>
            <p className="" >Instant Video Call</p>
            </Nav.Link>
            <Nav.Link  className='d-flex right-link'>
            <i class="fa-brands fa-whatsapp mx-2  my-1"></i>
            <p className="" >Whatsapp</p>
            </Nav.Link>
            <Nav.Link  className='d-flex right-link'>
       <button className='btn btn-primary'>Get in touch</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


</div>
  )
}
