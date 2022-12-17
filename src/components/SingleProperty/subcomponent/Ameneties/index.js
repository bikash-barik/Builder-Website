import "./index.css"
import Modal from "react-modal";
import Button from '@mui/material/Button';
import React, { useState, useRef } from "react";
import { Tick } from 'react-crude-animated-tick';
const Ameneties = ({ ameneties }) => {


  const customStyles2 = {
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      borderRadius: "15px",
      height: "300px",
      zIndex: "200",
    },
  };
  const customStyles3 = {
    content: {
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "370px",
      paddingTop: "40px",
      paddingLeft: "25px",
      paddingRight: "25px",
      borderRadius: "0px",
      height: "400px",
      zIndex: "200",
    },
  };

  const [modal, setModal] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleBrochure = ()=>{
    window.open(ameneties.brochure, '_blank')
  }
  let handeldownload = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://dpsc-370710.el.r.appspot.com/add_brochure", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          number: number,
          email: email,
          // requirement: requirement,
        }),
      });
      let resJson = await res.json();
      if (resJson.status) {
        setNumber("");
        setEmail("");
        // setRequirement("");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
    {/* <div className="newharmony-image"> */}
      {/* <img 
        src={ameneties?.imagen}
        // alt="Loading..."
        className="amenetiesharmony-images"
      /> */}
      {/* </div> */}
    <div className="ameneties-container">
      <div className="ameneties-content">
        <div className="ameneties-heading">
          <div>{ameneties.head}</div>
          <div className="">
          {ameneties.line}
          </div>
          {/* /> */}

        </div>
        <div className="ameneties-detail capitalize">{ameneties.text}</div>
        <div className="d-flex">
        <Button variant="contained" className="brochure-button"
        //  onClick={handleBrochure}
        onClick={() => {
          setModal(true);
        }}
          > DOWNLOAD BROCHURE</Button>
        </div>
      </div>
      <img
        src={ameneties?.image}
        // alt="Loading..."
        className="ameneties-image"
      />





<Modal isOpen={modal} style={customStyles3} contentLabel="Example Modal">
       
       <form className="" onSubmit={handeldownload} >
         <div className="d-flex modal_head" >
           <h3 className="black-text" style={{ fontSize: "20px", marginBottom: "30px", marginTop: "20px", fontWeight: "400", color: "black" }}> Fill up The From</h3>

           <i
             class="fa-solid fa-xmark"
             style={{ fontSize: "20px" }}
             onClick={() => setModal(false)}
           ></i>
         </div>

         <label for="basic-url" style={{ fontSize: "16px", marginBottom: "10px" }}>Contact Number *</label>

         <div class="input-group mb-3">
           <input
             type="number"
             required
             class="form-control"
             id="basic-url"
             // placeholder="number"
             style={{ width: 400 }}
             value={number}
             onChange={(e) => setNumber(e.target.value)}
             maxLength="10"
             minLength="10"
             pattern="[1-9]{1}[0-9]{9}"
           />
         </div>


         <label for="basic-url" style={{ fontSize: "16px", marginBottom: "10px" }}>EMAIL ADDRESS *</label>

         <div class="input-group mb-3">
           <input
             type="email"
             class="form-control"
             id="basic-url"
             style={{ borderColor: "black" }}
             aria-describedby="basic-addon3"
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
         </div>
         {/* <label for="basic-url" style={{ fontSize: "16px", marginBottom: "10px" }}>Requirement *</label>

         <div class="input-group mb-3">
           <input
             type="text"
             class="form-control"
             id="basic-url"
             aria-describedby="basic-addon3"
             style={{ height: "80px", borderColor: "black" }}
             required
             value={requirement}
             // placeholder="Requirement"
             onChange={(e) => setRequirement(e.target.value)}
           />
         </div> */}
         <button
           className="btn btn-primary align-items-center justify-content-center register_button"
           type="submit"

           style={{ marginLeft: "17%", borderRadius: "0px", fontSize: "18px", marginTop: "16px", paddingLeft: "70px", paddingRight: "70px", paddingTop: "10px", paddingBottom: "10px" }}
           // disabled={{onclick}}
           onClick={() => {
             // setModal2(false);
             // setModal3(true)
             if(number!==""&&email!=="@"){
             modal === false ? setModal(false) : setModal4(true);
             // window.open(data.ameneties.brochure, '_blank')
           }
           }}
         >
           SUBMIT
         </button>
       </form>
    
     </Modal>
     <Modal isOpen={modal4} style={customStyles2} contentLabel="My dialog">


        <i
          class="fa-solid fa-xmark"
          style={{ fontSize: "20px", paddingLeft: " 53rem", paddingTop: "1rem" }}
          onClick={() =>{ 
            setModal(false)
            setModal4(false)
          }}
        ></i>

        <div>
          <Tick size={130} />
        </div>



        <h3 className="black-text" style={{ textAlign: "center" }}>
          Submitted Sucessfully
        </h3>
        {/* <h3 className="black-text" style={{ textAlign: "center" }}>

          We will Contact you soon..
        </h3> */}
       
      <button
            className="btn btn-primary align-items-center justify-content-center register_button"
            type="submit"

            style={{ marginLeft: "20%", borderRadius: "0px", fontSize: "18px", marginTop: "16px", paddingLeft: "70px", paddingRight: "70px", paddingTop: "10px", paddingBottom: "10px" }}

            // onClick={() => {
            //   // setModal2(false);
              
            //   // setModal3(true)
            //   // modal2 === false ? setModal2(false) : setModal3(true);
            //   // window.open(data.ameneties.brochure, '_blank')
            // }
            onClick={handleBrochure}
            // }
          >
            DOWNLOAD BROCHURE
          </button>
          

      </Modal>

      

    </div>
    </div>
    
  );
};

export default Ameneties;
