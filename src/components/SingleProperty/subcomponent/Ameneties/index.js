import "./index.css"
import Button from '@mui/material/Button';
const Ameneties = ({ ameneties }) => {
  const handleBrochure = ()=>{
    window.open(ameneties.brochure, '_blank')
  }
  return (
    <div className="ameneties-container">
      <div className="ameneties-content">
        <div className="ameneties-heading">
          <div>AMENETIES</div>
          <div className="ameneties-line"/>
        </div>
        <div className="ameneties-detail capitalize">{ameneties.text}</div>
        <div className="d-flex">
        <Button variant="contained" className="brochure-button" onClick={handleBrochure} >DOWNLOAD BROCHURE</Button>
        </div>
      </div>
      <img
        src={ameneties?.image}
        alt="Loading..."
        className="ameneties-image"
      />
    </div>
  );
};

export default Ameneties;
