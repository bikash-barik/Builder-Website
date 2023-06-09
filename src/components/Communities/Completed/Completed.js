import React, {useState} from "react";
import "./Completed.css"
import CompletedData from "../../data/completed";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function Completed() {


const [category, setCategory] = useState("RESIDENTIAL PROJECT")
const [modal, setModal] = useState(false)
  return (
    <div className="Communities" style={{paddingLeft:"10px",paddingRight:"10px"}}>
      <div className="container-fluid" >
        <section className="completed my-5">

        <div className="upcoming-heading-container" style={{marginBottom:"15px"}}>
            <div >
                <div className="upcoming-heading" style={{marginTop:"10px"}}>

        <h4 className="white-text" style={{fontSize:"17px"}}>COMPLETED PROJECTS </h4>
        <hr className="line" style={{width:"150px",  borderTop:"2px solid white",marginLeft:"5px" , opacity:"0.8"}}/>
      </div>
                </div>
      <div >

        <div style={{float:"right"}}>
        <DropdownButton id="dropdown-basic-button" className="drop_buttons"  style={{marginRight:"4vw"}}  title={category}>
            {
                category==="COMMERCIAL PROJECT" ? <Dropdown.Item
                onClick={()=>{
                  setCategory("RESIDENTIAL PROJECT")
                }}>RESIDENTIAL PROJECT</Dropdown.Item>:   <Dropdown.Item 
                onClick={()=>{
                  setCategory("COMMERCIAL PROJECT")
                }}>COMMERCIAL PROJECT</Dropdown.Item>
             
            }
            </DropdownButton>
     </div>
      </div>
     
   </div>
        <div className="row align-items-center justify-content-center">

{
  CompletedData.filter(p=>p.category===category).map((project,i)=>{
    return(<>
         <div className="col-lg-6 ongoing-box-container">
            <div className="ongoing-box text-center align-items-center justify-content-center my-2">
              <img className="completed-image" src={project.image} style={{height:"400px"}}    data-aos={i%2===0?"fade-right":"fade-left"} data-aos-duration="2000" onClick={()=>{
                modal===false?
                setModal(true):setModal(false)}}></img>
              {/* <img src={image}></img> */}
              <h4 className="my-3" style={{fontSize:"20px", fontWeight:"400"}}>{project.title}</h4>
              <img  src="https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ongoing%2FLine%2084.png?alt=media&token=d799dd00-e8fe-426c-9e4e-2c59c4f1723c" className="line_img" style={{height:"4px",width:"180px"}}></img>

              <h3 className="my-3 com_heading com_discription" style={{fontSize:"20px", fontWeight:"400"}}>YEAR OF COMPLETION : {project.date}</h3>
            </div>
            
          </div>
        
        </>)
    })
}



          
        </div> 
      
                    </section>  


      </div>
    </div>
  );
}
