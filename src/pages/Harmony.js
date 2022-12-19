import React, { Component } from 'react';
import "../pages/Harmony.css";
import { Button, Grid, Typography, Card } from '@mui/material';
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { Tick } from "react-crude-animated-tick";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterIcon,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Galary from "../pages/image/galary.png"
import Share from "../pages/image/share.png"
import { forwardRef, useState } from "react";
import MuiAlert from '@mui/material/Alert';
import { ToggleButton } from "react-bootstrap";


const customStyles = {
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
    height: "530px",
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

const  surrounding=[


{
  surrounding:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FGroup%206426.png?alt=media&token=ed1898d5-ebfa-4732-a730-dfe595679b6d",
},]
const  OngoingDatas=[


{
  brochure:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2Fbroucher%2FArchid%20Harmony%20Brochure%2025-11-22%20-%20Tapas%20Jana.pdf?alt=media&token=6085b37c-1cdc-45c2-bb97-4d16c5a92576",
},]

    

const ameneties=[
 {
  image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FFrame%206608.png?alt=media&token=04bab4be-8c14-45dc-b4cc-91ba76cb5f6a",
  // text: "",

  // brochure:
  // "",
  // image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FFrame%206608.png?alt=media&token=04bab4be-8c14-45dc-b4cc-91ba76cb5f6a",
},
]
  
const details = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FArchid%20Shreekunj%2C%20Ranasinghpur%202.jpg?alt=media&token=af907f60-d938-4116-8783-4c536dd393fe",
    heading: "STEP INTO YOUR IDEAL HOME",
    description:
      "A scintillating experience of wholesome luxury awaits you and your family . Introducing the ultra-luxurious Duplexes in a state of great comfort, luxury and bliss in an independent universe that’s tailor-made for you and your family",
    descriptions:
      "Stunning 45 villas on a 2.65-acre expanse with over 25+ carefully integrated lifestyle amenities &amp; features, all set to make every day exciting. Your stay will be rejuvenating and empowered with positivity. All the villas are Vastu Compliant for a beautiful and holy stay .",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FArchid%20Shreekunj%2C%20Ranasinghpur%202%20(1).jpg?alt=media&token=32bfe111-f267-4ed8-aac8-2db1fdab8e3b",
    heading: "IT’S NOT ABOUT THE QUANTITY OF LUXURY YOU HAVE ,IT’S  ABOUT A PEACEFUL STAY",
    description:
      "Sometimes it feels good to just sit by yourself relax and not talk to anyone. Just a deep breath is enough to make you feel alive. You don’t need to always have a plan, sometimes letting go is the best thing to happen. Let every moment be what it’s going to be. What’s meant to be will come your way",

    descriptions: "It’s the quality of life which matters. It strikes the balance, where going back to roots is all that matters. Nestled in the lap of nature, waking up to the sunrise with a view is always worthwhile.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FArchid%20Shreekunj%2C%20Ranasinghpur%202%20(2).jpg?alt=media&token=8ee5212e-748d-4aa0-a640-0b4e339ef1e8",
    heading: "EXPLORE THE SERENITY AND JOY IN ONE PLACE        ",
    description:
      "You have travelled widely, seen and lived in the very best of places and experienced life in its purest form. It’s time now to live it in your own “HOME” or it should be your place where you can talk and mingle with your neighbours, friends freely. Exclusivity awaits your gracious",
    desc: "presence, created with large space ,liberal amenities and premium ",
    descriptions:
      "specifications and much more that make for fine living at a premium address .We raise a toast for a prosperous life here, so come here and relish the brew of a class.",
  },
]


const highlightImages = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FGroup%206402.png?alt=media&token=1bfd5eeb-e90a-47ae-b431-7279bc718b4b",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FGroup%206416.png?alt=media&token=fdde80a2-f95c-432c-bcad-71421867f13e",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FGroup%206400.png?alt=media&token=173862b4-c976-457a-9076-0874972956c3",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FFrame%206416.png?alt=media&token=c4a8af1b-2666-44e8-a2e7-51e7a99f3021",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FFrame%206407.png?alt=media&token=15b45eab-f0ff-48b6-8848-68c47b353743",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FFrame%206415.png?alt=media&token=332e6633-c704-4178-a168-ede12648c781",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FFrame%206415.png?alt=media&token=332e6633-c704-4178-a168-ede12648c781",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FFrame%206407%20(1).png?alt=media&token=cb494acb-30b7-4f1f-bc99-315730f5f289",
  }, {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FGroup%206410.png?alt=media&token=c7a0042f-2cd6-4bc4-82f5-787922ddabf0",
  }, {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FGroup%206410.png?alt=media&token=c7a0042f-2cd6-4bc4-82f5-787922ddabf0",
  },
  {
    link: "not found",

    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FGroup%206403.png?alt=media&token=54cd4d82-1065-4b7a-9bdb-dceb3def30bb",
  },
];


const  floorPlanData = [
  {
    text: "ALL",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2Fimage%20184.png?alt=media&token=890c9adf-4e62-43d7-a072-25c52d6a4394",
      text: "FIRST FLOOR SIZE",
      fullImage:
      // "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Sailabala%2COld%20Town%2FFloor%20Plans%2FFLOOR%20PLAN.jpg?alt=media&token=628aebc2-11d2-4381-9fe9-da70b437d82d",
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2Fimage%20184.png?alt=media&token=890c9adf-4e62-43d7-a072-25c52d6a4394",
  },
  {
    image:
      " https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2Fimage%20185.png?alt=media&token=23f26f20-fda0-4ed5-bf82-9d97d3885c34",
    text: "GROUND FLOOR SIZE",
    fullImage:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2Fimage%20185.png?alt=media&token=23f26f20-fda0-4ed5-bf82-9d97d3885c34",
  },
]
 
const  locationData = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FArchid%20Shreekunj%2C%20Ranasinghpur%20MAP.png?alt=media&token=09212afa-55a6-4057-a198-47e9e8993407",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FArchid%20Shreekunj%2C%20Ranasinghpur%20MAP2.jpg?alt=media&token=9dc5dc70-f726-4e1c-8cbc-9e21d99f9b1c",
  },
]

const constructionData =[
  {
    image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FPHOTO-2022-07-04-13-16-59%203%201.png?alt=media&token=b6620b20-78f7-4457-aaa6-9fc96535ac65",
    
  },
  {
    // image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Sailabala%2COld%20Town%2FConstruction%20Photos%2FWhatsApp%20Image%202022-11-01%20at%2022.30.53.jpeg?alt=media&token=6f5f0872-1647-4c1d-9328-eff9a5db8650",
    image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FPHOTO-2022-07-04-13-16-59%202%201.png?alt=media&token=5503ef0a-4220-4627-89c0-7c17558150ad",
  },
  {
    // image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/Archid%20Sailabala%2COld%20Town%2FConstruction%20Photos%2FWhatsApp%20Image%202022-11-02%20at%209.36.39%20PM%20(2)%20(2).jpeg?alt=media&token=c7c2b510-78c9-4544-b881-270779ae1478",
    image:"https://firebasestorage.googleapis.com/v0/b/archid-builders.appspot.com/o/ARCHID%20HARMONY%2FPHOTO-2022-07-09-11-45-00%201.png?alt=media&token=639cd533-cd9b-41fe-9636-ecd0f19d6687",
  },
]



async function handeldownload(number, email) {
  // e.preventDefault();
  try {
    let res = await fetch(
      "https://dpsc-370710.el.r.appspot.com/add_brochure",
      {
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
      }
    );
    let resJson = await res.json();
    console.log(resJson)
    if (resJson.status) {
      // setNumber("");
      // setEmail("");
      // setRequirement("");
    } else {
      // setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};


async function handleSubmit(number, email, requirement) {
  // e.preventDefault();
  try {
    let res = await fetch(
      "https://dpsc-370710.el.r.appspot.com/add_inquiry",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          number: number,
          email: email,
          requirement: requirement,
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson)
    if (resJson.status) {
      // setNumber("");
      // setEmail("");
      // setRequirement("");
    } else {
      // setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};


export default function Harmony() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    
    
  };
 
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [modal4, setModal4] = useState(false);
  // const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const [modal3, setModal3] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const handleOpen = (source) => {
    setOpen(true)
    setsrcData(source)
  };
  const handleClosse = () => setOpen(false);
    const [filterData,setFilterData] = useState(floorPlanData)
    const [srcData,setsrcData] = useState(null)
    const handleChange = (e)=>{
        if(e.target.value === "ALL" )
        {
            setFilterData(floorPlanData)
        }
        else{
            const newData = floorPlanData?.filter((el)=> el.text === e.target.value )
            setFilterData(newData)
        }


    }
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const openLink = (link) => {
    if (link === "not found") {
      handleClick()
    }
    else {


      window.open(link, "_blank");
    }


  };



  return (
    <Grid>
      <div className="background">
        <div className="single-property-button-groups">
          <div
            className=" single-property-button single-property-request-button"
            onClick={() => {
              // setmodal1(true);
              setModal2(true);
              // setModal1(false)
              // window.open(data.ameneties.brochure, '_blank')
            }}
          >
            DOWNLOAD BROCHURE
          </div>
          <div
            className=" single-property-button single-property-request-button"
            onClick={() => {
              // setmodal(true);
              setModal(true);
            }}
          >
            REGISTER YOUR INTEREST
          </div>
          <Link 
                to={`/slider/${4}`}>
          <div className="single-property-button singlee">
            <div>GALLERY</div>
            <img src={Galary}
              // {gallery} 
              alt="Loading..." />
          </div>
          </Link>
          {OngoingDatas?.map((data, i) => {
          

          return (
          <Dropdown>
            <Dropdown.Toggle
              as="div"
              className=" drop-down-button single-property-button  share"
              align="end"
            >
              <div>SHARE</div>
              <img src={Share} alt="Loading..." />
            </Dropdown.Toggle>

            <Dropdown.Menu className="single-property-dropdown-menu">
              <FacebookShareButton
                url={data.brochure}
               
                className="single-property-dropdown-menu-image"
                alt="Loading..."
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                url={data.brochure}
                className="single-property-dropdown-menu-image"
                alt="Loading..."
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={data.brochure}
                className="single-property-dropdown-menu-image"
                alt="Loading..."
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <EmailShareButton
                url={data.brochure}
                className="single-property-dropdown-menu-image"
                alt="Loading..."
              >
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
            </Dropdown.Menu>
          </Dropdown>
          );
          })}
        </div>
        {/* </div> */}
      </div>
      <div className="single-property-highlights">
        <div className="single-property-highlights-heading">
          <div>PROJECT HIGHLIGHTS</div>
          <div className="single-property-highlights-line" />
        </div>


        <Grid
          container
          spacing={5}
          className="single-property-highlights-image-container"
        >
          {highlightImages?.map((el, i) => {
            return (
              <Grid item xs={2.3} sm={2.3} md={2.3} >
                <img
                  src={el.image}
                  className={
                    el.link
                      ? "single-property-highlights-image image-clickable"
                      : "single-property-highlights-image"
                  }
                  data-aos={i <= 4 ? "fade-right" : "fade-left"}
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  alt="Loading..."
                  onClick={() => {
                    if (el.link) {
                      openLink(el.link);
                    }
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className="single-property-description-container">
        <div className="single-property-description-heading">
          <div>ARCHID HARMONY</div>
          <div className="single-property-description-line" />
        </div>
        <div
          className="single-property-description"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {/* <span className="single-property-special-class ">This gated The residences in ARCHID HARMONY are beautifully tucked away from the madness of the city. Yet, they are close to every need you wish attended to. Strategically located on East side of Bhubaneswar at Atala ,4kms away from NH-5 ,these residences give you immediate access to the best that this city has to offer.Live in an environment where each element has been hand-picked, just for you.


</span> */}
          <span className="capitalize">
            this gated The residences in ARCHID HARMONY are beautifully tucked away from the madness of the city. Yet, they are close to every need you wish attended to. Strategically located on East side of Bhubaneswar at Atala ,4kms away from NH-5 ,these residences give you immediate access to the best that this city has to offer.Live in an environment where each element has been hand-picked, just for you.
            {/* {description.slice(1)} */}
          </span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="single-property-description-heading">
          <div>Evolve & Energise – The Next Level Of Life</div>
          <div className="single-property-description-line" />
        </div>
        <div
          className="single-property-description"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {/* <span className="single-property-special-class ">This gated The residences in ARCHID HARMONY are beautifully tucked away from the madness of the city. Yet, they are close to every need you wish attended to. Strategically located on East side of Bhubaneswar at Atala ,4kms away from NH-5 ,these residences give you immediate access to the best that this city has to offer.Live in an environment where each element has been hand-picked, just for you.


</span> */}
          <span className="capitalize">
            {/* this gated The residences in ARCHID HARMONY are beautifully tucked away from the madness of the city. Yet, they are close to every need you wish attended to. Strategically located on East side of Bhubaneswar at Atala ,4kms away from NH-5 ,these residences give you immediate access to the best that this city has to offer.Live in an environment where each element has been hand-picked, just for you. */}
            Welcome To a place where smart planning and strategic choice of location encapsulates your home in a cocoon of harmony, where you can evolve and energise in tranquil surroundings and gain space of mind with the finest quality of life. Where every home has a divine feeling every view from the window is equally great. Best of Amenities requisite in this society along with a perfect environment to restart ,rejuvenate, resume your body, mind and soul.
            {/* {description.slice(1)} */}
          </span>
        </div>
      </div>

      <div className="single-property-details-container">
        {details?.map((el, idx) => {
          if (idx % 2 === 0) {
            return (
              <div className="single-property-details">
                <div className="single-property-details-content">
                  <div className="single-property-details-heading">
                    <div>{el?.heading}</div>
                    <div className="single-property-details-line" />
                  </div>
                  <div
                    className="single-property-details-description capitalize"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    {el?.description}

                    <br></br>
                    {el?.desc}

                    <br></br>
                    <br></br>
                    {el?.descriptions}
                  </div>
                </div>
                <img
                  className="single-property-details-image"
                  src={el?.image}
                  alt="Loading..."
                  data-aos="zoom-in-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
              </div>
            );
          } else {
            return (
              <div className="single-property-details">
                <div className="single-property-details-content">
                  <div className="single-property-details-heading">
                    <div>{el?.heading}</div>
                    <div className="single-property-details-line" />
                  </div>
                  <div
                    className="single-property-details-description capitalize"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    {el?.description}
                    <br></br>
                    <br></br>
                    {el?.descriptions}
                  </div>
                </div>
                <img
                  className="single-property-details-image"
                  src={el?.image}
                  alt="Loading..."
                  data-aos="zoom-in-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
              </div>
            );
          }
        })}
      </div>
      <div>
      {ameneties?.map((el, i) => {
            return (
        <img
          src={el?.image}
          alt="Loading..."
          className="amenetiesharmony-images"
        />
        );
      })}
      </div>
      <div className="floor-plan">
      <div className="floor-plan-heading">
        <div>FLOOR PLANS</div>
        <div className="floor-plan-line"></div>
      </div>

      <div className="floor-plan-filter-options">
        {floorPlanData?.map((el, idx) => {
          return (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              name="radio"
              value={el.text}
              variant="secondary"
              as="div"
              className="filter-option"
              onChange={handleChange}
            >
              {el.text}
            </ToggleButton>
          );
        })}
      </div>
      <Grid container spacing={9} className="floor-plan-image-container">
        {filterData?.map((el) => {
          if (el.text !== "ALL") {
            return (
              <Grid item  md={6} lg={4} >
              <img className="floor-plan-image" src={el?.image} alt="Loading" onClick={()=>{handleOpen(el?.fullImage)}} />;
              </Grid>
              )
          }
        })}
      </Grid>
      <div>
      
      
    </div>
    </div>
    <div className="single-property-surrounding">
        <div className="single-property-surrounding-heading">
        <div>
        major in and around
        </div>
        <div className="surrounding-line" />
        </div>
        {surrounding?.map((el, i) => {
            return (
        <img className="amenetiesharmony-images" src={el.surrounding} alt="Loading..." />
            );
          })}
    </div>

    <div className="single-property-location">
      <div className="single-property-location-heading">
        <div>location map</div>
        <div className="location-line" />
      </div>
      <div className="location-image-container" >
      {locationData?.map((el, idx) => {
          return (
              
              <img
              className={idx===0?"location-image":"location-image location-image-none"}
              src={el.image}
              alt="Loading..."
              />
         
        );
    })}
    </div>
    </div>

    <div className="construction-update">
        <div >
        <div className="construction-update-heading">CONSTRUCTION UPDATE</div>
        <div className="construction-update-line"></div>
      </div>
      <div className="construction-update-images-container">
      {
        constructionData?.map((el,idx)=>{
          console.log("construction-update-image-background"+idx)
          return(

            <div className={"construction-update-image-background construction-update-image-background-"+(idx+1)} key={idx}>
            <img className="construction-update-image" src={el.image} alt="Loading..." />
            </div>
            )

        })
      }
      </div>
    </div> 
    <Modal isOpen={modal} style={customStyles} contentLabel="Example Modal">
        <form className="">
          <div className="d-flex modal_head">
            <h3
              className="black-text"
              style={{
                fontSize: "20px",
                marginBottom: "30px",
                marginTop: "20px",
                fontWeight: "400",
                color: "black",
              }}
            >
              {" "}
              REGISTER YOUR INTEREST
            </h3>

            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "20px" }}
              onClick={() => setModal(false)}
            ></i>
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Contact Number *
          </label>

          <div class="input-group mb-3">
            <input
              type="number"
              value={number}
              required
              // placeholder="number"
              style={{ width: 400 }}
              onChange={(e) => setNumber(e.target.value)}
              maxLength="10"
              minLength="10"
            />
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            EMAIL ADDRESS *
          </label>

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
          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Requirement *
          </label>

          <div class="input-group mb-3">
            <textarea
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
          </div>
          <button
            className="btn btn-primary align-items-center justify-content-center register_button"
            // type="submit"
            style={{
              marginLeft: "19%",
              borderRadius: "0px",
              fontSize: "18px",
              marginTop: "5px",
              paddingLeft: "70px",
              paddingRight: "70px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            onClick={() => {
              // setModal(false);
              if (
                number !== "" &&
                email !== "" &&
                requirement !== "" &&
                email.match(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ) &&
                number.match(/^\d{10}$/)
              ) {
                handleSubmit(number,email,requirement)
                setModal4(true);
                setModal(false);
                setNumber("");
                setEmail("");
                setRequirement("");
              }
              // modal3 === true ? setModal3(false) : setModal3(true);
            }}
          >
            SUBMIT
          </button>
        </form>
      </Modal>
      <Modal isOpen={modal2} style={customStyles3} contentLabel="Example Modal">
        <form className="" >
          <div className="d-flex modal_head">
            <h3
              className="black-text"
              style={{
                fontSize: "20px",
                marginBottom: "30px",
                marginTop: "20px",
                fontWeight: "400",
                color: "black",
              }}
            >
              {" "}
              Fill up The From
            </h3>

            <i
              class="fa-solid fa-xmark"
              style={{ fontSize: "20px" }}
              onClick={() => setModal2(false)}
            ></i>
          </div>

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Contact Number *
          </label>

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

          <label
            for="basic-url"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            EMAIL ADDRESS *
          </label>

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
            // type="submit"
            style={{
              marginLeft: "17%",
              borderRadius: "0px",
              fontSize: "18px",
              marginTop: "16px",
              paddingLeft: "70px",
              paddingRight: "70px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            // disabled={{onclick}}
            onClick={() => {
              // setModal2(false);
              // setModal3(true)
              if (
                number !== "" &&
                email !== "" &&
                email.match(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ) &&
                number.match(/^\d{10}$/)
              ) {
                handeldownload(number, email)
                setModal3(true);
                setModal2(false);
                setNumber("");
                setEmail("");
                // window.open(data.ameneties.brochure, '_blank')
              }
            }}
          >
            SUBMIT
          </button>
        </form>
      </Modal>

      <Modal isOpen={modal3} style={customStyles2} contentLabel="My dialog">
        <i
          class="fa-solid fa-xmark"
          style={{
            fontSize: "20px",
            paddingLeft: " 53rem",
            paddingTop: "1rem",
          }}
          onClick={() => {
            setModal3(false);
            setModal2(false);
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
        {OngoingDatas?.map((data, i) => {
          

          return (
            <button
              className="btn btn-primary align-items-center justify-content-center register_button"
              type="submit"
              style={{
                marginLeft: "20%",
                borderRadius: "0px",
                fontSize: "18px",
                marginTop: "16px",
                paddingLeft: "70px",
                paddingRight: "70px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              onClick={() => {
                // setModal2(false);
                // setModal3(true)
                // modal2 === false ? setModal2(false) : setModal3(true);
                window.open(data.brochure, "_blank");
              }}
            >
              DOWNLOAD BROCHURE
            </button>
          );
        })}
      </Modal>

      <Modal isOpen={modal4} style={customStyles2} contentLabel="My dialog">
        <i
          class="fa-solid fa-xmark"
          style={{
            fontSize: "20px",
            paddingLeft: " 53rem",
            paddingTop: "1rem",
          }}
          onClick={() => {
            setModal(false);
            setModal4(false);
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
      </Modal>












    </Grid>

  );

}
