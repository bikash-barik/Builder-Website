import React, {useState} from "react";
import "./Completed.css"
import CompletedData from "../../data/completed";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function Completed() {


const [category, setCategory] = useState("residential")
const [modal, setModal] = useState(false)
  return (
    <div className="home">
      <div className="container" >
        <section className="completed my-5">

        <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
                <div className="d-flex">

        <h5>Completed Projects </h5>
        <hr style={{width:"150px", backgroundColor:"white", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
      </div>
                </div>
      <div className="col-md-6 col-sm-6 col-lg-6">

        <div style={{float:"right"}}>
        <DropdownButton id="dropdown-basic-button" title={category}>
            {
                category==="commercial" ? <Dropdown.Item
                onClick={()=>{
                  setCategory("residential")
                }}>residential</Dropdown.Item>:   <Dropdown.Item 
                onClick={()=>{
                  setCategory("commercial")
                }}>commercial</Dropdown.Item>
             
            }
            </DropdownButton>
     </div>
      </div>
     
   </div>
        <div className="row text-center align-items-center justify-content-center">

{
  CompletedData.filter(p=>p.category===category).map((project)=>{
    return(<>
         <div className="col-lg-6">
            <div className="ongoing-box text-center align-items-center justify-content-center my-2">
              <img src={project.image} className={modal===true?"img-responsive show-image":"img-responsive"}  onClick={()=>{
                modal===false?
                setModal(true):setModal(false)}}></img>
              {/* <img src={image}></img> */}
              <h4 className="my-3">{project.title}</h4>
              <hr/>

              <h3 className="my-3">YEAR OF COMPLETION : {project.date}</h3>
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
