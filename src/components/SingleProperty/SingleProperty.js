import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProperty.css";
import gallery from "../../images/ongoing/gallery.png";
import share from "../../images/ongoing/share2.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import FloorPlan from "./subcomponent/FloorPlan";
import HighLights from "./subcomponent/Highlights";
import Description from "./subcomponent/Description";
import Details from "./subcomponent/Details";
import Ameneties from "./subcomponent/Ameneties";
import Finance from "./subcomponent/Finance";
import Surrounding from "./subcomponent/Surrounding";
import Location from "./subcomponent/Location"
import ConstructionUpdates from "./subcomponent/ConstructionUpdates"
import Dropdown from 'react-bootstrap/Dropdown';
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.jpg"
import whatsapp from "./images/whatsapp.jpg"
import gmail from "./images/gmail.png"






export default function SingleProperty({ OngoingData }) {
  
  
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "370px",
      paddingTop:"10px",
      paddingLeft:"25px",
      paddingRight:"25px",
      borderRadius:"0px",
      height: "530px",
      zIndex: "200",
    },
  };
  
  const [paramId, setparamid] = useState(id);

  return (
    <div className="single_background">
      {OngoingData?.map((data, i) => {
      
      
        if(data.id!==paramId)
        {
          return null
        }
        console.log(data.bg)
        return(
        <div key={i} >
            <div
              className="landing-image"
              style={{ backgroundImage: `url(${data.bg})`, }}
            >
              <div className="single-property-button-group">
                <div
                  className=" single-property-button single-property-request-button"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  REGISTER YOUR INTEREST
                </div>
                <Link to={`/slider`}>
                  <div className="single-property-button">
                    <div>GALLERY</div>
                    <img src={gallery} alt="Loading..."/>
                  </div>
                </Link>
                <Dropdown>
      <Dropdown.Toggle as="div" className=" drop-down-button single-property-button " align="end">
      <div>
      SHARE
      </div>  
        <img
          src={share}
          alt="Loading..."
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className="single-property-dropdown-menu" >
      <img className="single-property-dropdown-menu-image" src={facebook} alt="Loading..." />
      <img className="single-property-dropdown-menu-image" src={instagram} alt="Loading..." />
      <img className="single-property-dropdown-menu-image" src={whatsapp} alt="Loading..." />
      <img className="single-property-dropdown-menu-image" src={gmail} alt="Loading..." />
      </Dropdown.Menu>
    </Dropdown>
              
              </div>
            </div>
            


            <HighLights highlightImages={data.highlights} />
            <Description title={data.title} description={data.introduction} />
            <Details detail={data.details} />
            <Ameneties ameneties={data.ameneties} />
            <FloorPlan floorPlanData={data.floorPlans}/>
            <Finance financeData={data.finance}/>
            <Surrounding  surroundingData={data.surrounding}/>
            <Location locationData={data.location}/>
            
            {data?.construction?.length !== 0 &&<ConstructionUpdates constructionData={data?.construction}/>}
            


          </div>
        
      )})}

<Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <form className="">
          <div className="d-flex modal_head" >
            <h3 className="black-text" style={{fontSize:"25px",marginBottom:"30px",marginTop:"20px",fontWeight:"400"}}> REGISTER YOUR INTEREST</h3>
            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "20px" }}
              onClick={() => setModal(false)}
            ></i>
          </div>
          <label for="basic-url" style={{fontSize:"17px",marginBottom:"10px"}}>FULL NAME *</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              style={{height:"45px",marginBottom:"20px",backgroundColor:"lightgrey"}}
              required
            />
          </div>

          <label for="basic-url" style={{fontSize:"17px",marginBottom:"10px"}}>EMAIL ADDRESS *</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              style={{height:"45px",marginBottom:"20px",backgroundColor:"lightgrey"}}
              required
            />
          </div>
          <label for="basic-url" style={{fontSize:"17px",marginBottom:"10px"}}>PHONE NUMBER *</label>
          <div class="input-group mb-3">
          <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              style={{height:"45px",marginBottom:"20px",backgroundColor:"lightgrey"}}
              required
            />
          </div>
          <button
            className="btn btn-primary text-center align-items-center justify-content-center"
            style={{ marginLeft: "19%",borderRadius:"0px",fontSize:"18px",marginTop:"5px",paddingLeft:"70px",paddingRight:"70px",paddingTop:"10px",paddingBottom:"10px" }}
          >
            SUBMIT
          </button>
        </form>
      </Modal>
    </div>
  );
}

// <section className="highlights container-fluid text-center ">
//   <div className="d-flex">
//     <h5>Project highlights </h5>
//     <hr
//       style={{
//         width: "150px",
//         backgroundColor: "white",
//         fontWeight: "",
//         height: "1.3px",
//         marginLeft: "5px",
//         opacity: "0.8",
//       }}
//     />
//   </div>
//   <div className="row my-2 justify-content-center">
//     {data.highlight.map((img, i) => (
//       <div className="col-lg-3 col-md-3 col-sm-4 my-2">
//         <img
//           src={img.detail}
//           className="detail-img"
//           data-aos={i <= 4 ? "fade-right" : "fade-left"}
//           data-aos-easing="linear"
//           data-aos-duration="1500"
//         ></img>
//       </div>
//     ))}
//   </div>
//   <div className="detail-1">
//     <div className="d-flex">
//       <h4 className="black-text">{data.title}</h4>
//       <hr
//         style={{
//           width: "150px",
//           backgroundColor: "black",
//           fontWeight: "",
//           height: "1.3px",
//           marginLeft: "5px",
//           opacity: "0.8",
//         }}
//       />
//     </div>
//     <div className="black-text">
//       <h5 className="black-text my-4">{data.details_1}</h5>
//     </div>
//   </div>
//   <div className=" container-fluid">
//     <div className="row">
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <div className="detail-2">
//           <div className="d-flex">
//             <h5 className="black-text" style={{ width: "800px" }}>
//               WELL CONSTRUCTED LUXURIOUS FLATS{" "}
//             </h5>
//             <br />
//             <br />
//             <hr
//               style={{
//                 width: "150px",
//                 backgroundColor: "black",
//                 fontWeight: "",
//                 height: "1.3px",
//                 marginLeft: "5px",
//                 opacity: "0.8",
//               }}
//             />
//           </div>
//           <p
//             className="black-text"
//             data-aos="fade-up"
//             data-aos-easing="linear"
//             data-aos-duration="1500"
//           >
//             {data.details_2}
//           </p>
//         </div>
//       </div>
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <img
//           data-aos="fade-down-left"
//           data-aos-easing="linear"
//           data-aos-duration="1500"
//           src={data.detailImage1}
//           style={{ height: "100%", width: "100%" }}
//           className="img-fluid"
//         ></img>
//       </div>
//     </div>
//   </div>

//   <div className="container-fluid my-5">
//     <div className="row">
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <img
//           data-aos="fade-up-right"
//           data-aos-easing="linear"
//           data-aos-duration="1500"
//           src={data.detailImage2}
//           style={{ height: "100%", width: "100%" }}
//           className="img-fluid"
//         ></img>
//       </div>
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <div className="detail-3">
//           <div className="d-flex">
//             <h5 className="black-text" style={{ width: "800px" }}>
//               EXPANSIVE LANDSCAPED OPEN SPACES{" "}
//             </h5>
//             <br />
//             <br />
//             <hr
//               style={{
//                 width: "150px",
//                 backgroundColor: "black",
//                 fontWeight: "",
//                 height: "1.3px",
//                 marginLeft: "5px",
//                 opacity: "0.8",
//               }}
//             />
//           </div>
//           <p
//             className="black-text"
//             data-aos="fade-up"
//             data-aos-easing="linear"
//             data-aos-duration="1500"
//           >
//             {data.details_3}
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className=" container-fluid">
//     <div className="row">
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <div className="detail-2">
//           <div className="d-flex">
//             <h5 className="black-text" style={{ width: "800px" }}>
//               PLETHORA OF LIFESTYLE AMENETIES{" "}
//             </h5>
//             <br />
//             <br />
//             <hr
//               style={{
//                 width: "300px",
//                 backgroundColor: "black",
//                 fontWeight: "",
//                 height: "1.3px",
//                 marginLeft: "5px",
//                 opacity: "0.8",
//               }}
//             />
//           </div>
//           <p
//             className="black-text"
//             data-aos="fade-up"
//             data-aos-easing="linear"
//             data-aos-duration="1500"
//           >
//             {data.details_4}
//           </p>
//         </div>
//       </div>
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <img
//           data-aos="fade-down-left"
//           data-aos-easing="linear"
//           data-aos-duration="1500"
//           data-aos-offset="400"
//           src={data.detailImage3}
//           style={{ height: "100%", width: "100%" }}
//           className="img-fluid"
//         ></img>
//       </div>
//     </div>
//   </div>

//   <div className=" container-fluid my-5">
//     <div className="row">
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <div className="detail-2">
//           <div className="d-flex">
//             <h5 className="black-text">AMENETIES </h5>
//             <hr
//               style={{
//                 width: "150px",
//                 backgroundColor: "black",
//                 fontWeight: "",
//                 height: "1.3px",
//                 marginLeft: "5px",
//                 opacity: "0.8",
//               }}
//             />
//           </div>
//           <p
//             className="black-text"
//             data-aos="fade-up"
//             data-aos-easing="linear"
//             data-aos-duration="1500"
//           >
//             {data.amenities}
//           </p>
//           <a href={data.brochure} target="blank">
//             <div
//               className="btn btn-primary"
//               style={{
//                 maxWidth: "400px",
//                 width: "100%",
//                 fontSize: "20px",
//                 backgroundColor: "grey",
//               }}
//             >
//               Download Brochure
//             </div>
//           </a>
//         </div>
//       </div>
//       <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//         <img
//           src={facilities}
//           style={{ height: "600px", width: "100%" }}
//           className="img-fluid"
//         ></img>
//       </div>
//     </div>
//   </div>
//   {id === "1" && <FloorPlan floorPlanData={patrapada} />}
//   {id === "2" && <FloorPlan floorPlanData={ranasinghpur} />}
//   {id === "3" && <FloorPlan floorPlanData={oldTown} />}

//   <div
//     className=" container-fluid my-5"
//     style={{ backgroundColor: "azure" }}
//   >
//     <div>
//       <div className="d-flex">
//         <h3 className="black-text">Finance facilities </h3>
//         <hr
//           style={{
//             width: "150px",
//             backgroundColor: "black",
//             fontWeight: "",
//             height: "1.3px",
//             marginLeft: "5px",
//             opacity: "0.8",
//           }}
//         />
//       </div>
//       <h3 className="black-text">
//         We are approved by all leading banks like-
//       </h3>
//     </div>
//     <div className="row">

//       {data.finance.map((img) => (
//         <div className="col-lg-3 col-md-3 col-sm-6 p-0">
//           <img
//             src={img.image}
//             style={{
//               height: "100px",
//               width: "200px",
//               padding: "10px",
//             }}
//             className="black-text  img-fluid"

//           ></img>
//         </div>
//       ))}
//     </div>
//   </div>

//   <div className="container-fluid my-5">
//     <div className="row">
//       {data.location.map((img) => (
//         <div className="col-lg-6 col-md- col-sm-12 p-0">
//           <img
//             src={img.image}
//             style={{ width: "100%", height: "500px" }}
//           ></img>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
