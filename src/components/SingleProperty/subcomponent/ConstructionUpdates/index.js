import "./index.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ConstructionUpdates = () => {
    return ( 
        <div className="construction-update">
        <div >
        <div className="construction-update-heading">CONSTRUCTION UPDATE</div>
        <div className="construction-update-line"></div>
      </div>
      <Container>
      <Row>
      <Col>
      <div className="construction-update-image-container"></div>
      </Col>
      <Col>
      <div className="construction-update-image-container"></div>
      </Col>
      <Col>
      <div className="construction-update-image-container"></div>
      </Col>
      </Row>
      </Container>
    </div> 
    );
}
 
export default ConstructionUpdates;