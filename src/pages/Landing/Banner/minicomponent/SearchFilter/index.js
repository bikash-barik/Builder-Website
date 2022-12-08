import Filter from "./Filter";
import "./index.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {  useNavigate } from "react-router-dom";



const SearchFilter = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [property, setProperty] = useState("ANY");
  const [bedroom, setBedroom] = useState("ANY");
  const [priceRange, setPriceRange] = useState("ANY");
  const handleClick = () => {
    if (property !== "ANY" || bedroom !== "ANY" || priceRange !== "ANY") {
      if(property==="Comercial" || bedroom === "4 BHK" || priceRange==="2 Crore & Above" )
      {
        handleOpen()  
      }
      else{

        if(priceRange==="90 Lakhs - 2 Crore")
        {
          navigate("/communities/1")
          
        }
        else 
        {
          navigate("/communities/3")
  
        }
      }
      
    } 
  };
  return (
    <Container className="banner-search-filter ">
      <Row>
        <Col xs={6} sm={3}>
          <Filter
            title="PROPERTY TYPE"
            options={["Apartment", "Duplex"]}
            state={property}
            setState={setProperty}
          />
        </Col>
        <Col xs={6} sm={3}>
          <Filter
            title="BEDROOM"
            options={["2 BHK", "3 BHK", "4 BHK"]}
            state={bedroom}
            setState={setBedroom}
          />
        </Col>
        <Col xs={6} sm={3}>
          <Filter
            title="PRICE RANGE"
            options={["70 - 90 Lakhs", "90 Lakhs - 2 Crore", "2 Crore & Above"]}
            state={priceRange}
            
            setState={setPriceRange}
          />
        </Col>
        <Col xs={6} sm={3}>
          <div className="banner-search">
            <div className="banner-search-button" onClick={handleClick} >SEARCH PROPERTIES</div>
          </div>
        </Col>
      </Row>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
          Sorry!! currently there is no property available as per your requirement
          </Typography>
          
        </Box>
      </Modal>
    </Container>
  );
};

export default SearchFilter;
