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
        <div className="ameneties-detail">{ameneties.text}</div>
        <div className="d-flex">
        <Button variant="contained" className="brochure-button" onClick={handleBrochure} >DOWNLOAD BROCHURE</Button>
        </div>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ongoing%2Ffacilities1.png?alt=media&token=839e6b50-6c2d-4950-a6ce-77646e10041c"
        alt="Loading..."
        className="ameneties-image"
      />
    </div>
  );
};

export default Ameneties;
