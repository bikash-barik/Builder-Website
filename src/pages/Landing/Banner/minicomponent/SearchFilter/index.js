import Filter from "./Filter";
import "./index.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SearchFilter = () => {
  const [property, setProperty] = useState("ANY");
  const [bedroom, setBedroom] = useState("ANY");
  const [priceRange, setPriceRange] = useState("ANY");
  return (
    <Container className="banner-search-filter ">
      <Row  >
        <Col xs={6} sm={3} >
          <Filter
            title="PROPERTY TYPE"
            options={["Residential", "Comercial"]}
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
            options={["60 - 80 Lakhs", "75 Lakhs - 2 Crore", "2 Crore & Above"]}
            state={priceRange}
            setState={setPriceRange}
          />
        </Col>
        <Col xs={6} sm={3}>

          <div className="banner-search">
            <div className="banner-search-button">SEARCH PROPERTIES</div>
          </div>
        </Col>
      </Row>



    </Container>
  );
};

export default SearchFilter;
