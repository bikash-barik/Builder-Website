import React, { Component } from 'react';
import "../pages/Harmony.css";
import { Button, Grid,Typography, Card } from '@mui/material';
import imggg2 from "../pages/image/img2.jpg";
import imggg222 from "../pages/image/img222.jpg";
import imggg444 from "../pages/image/img444.jpg";
import Stack from '@mui/material/Stack';
import imgg from "../images/Company_Logo/png ar.png"



  const  data = [
      {
          title: 'CLOSE TO NATURE',
          imggg: imgg
      },
      {
          title: 'GATED DUPLEX SOCIETY',
          imggg: imgg
      },
      {
        title: '2.65 ACERS OF LAND',
        imggg:imgg
    },
    {
      title: 'TOTAL 45 UNITS',
      imggg: imgg
  },
  {
    title: 'INDIVIDUAL PARKING AVAILABLE',
    imggg: imgg
},
{
  title: 'VASTU COMPLAINT HOUSES',
  imggg: imgg
},
{
title: '50% OPEN SPACE',
imggg: imgg
},
{
title: '25+ AMENITIES',
imggg: imgg
},
{
title: 'PAYMENT SCHEDULE',
imggg: imgg
},
{
title: 'VIDEO',
imggg: imgg
},
];




export default class Harmony extends Component {
  render() {
    return (
      <Grid>
        <div className="background">
          <Stack style={{
            float: "right"
          }} direction="row" spacing={2}>
            <Button variant="contained" size="large" disableElevation>
              REGISTER YOUR INTERESTS
            </Button>
            <Button variant="disabled" size="large" style={{ fontSize: 12, fontWeight: 400, backgroundColor: "#FFF" }}>
              <input hidden accept="image" type="file" />

              GALLERY
            </Button>
            <Button variant="disabled" size="large" style={{ fontSize: 12, fontWeight: 400, backgroundColor: "#FFF" }}>
              <input hidden accept="image" type="file" />

              SHARE
            </Button>
          </Stack>
        </div>
       
        <div>
         {data?.map((el,i) =>{
         return(
       <Card>
        <img src={el.imggg} alt="logo"/>
        <Typography>
          {el.title}
        </Typography> 
       </Card> 
        );
         })}
          </div>

          <div className='bg'>
          <Typography className="high" style={{ fontWeight: 600, fontSize: "20px", color: "#000000", marginLeft: "5%" }}>
            ARCHID HARMONY _____________
          </Typography>
          <div style={{ marginTop: "2%" }}>
            <Typography style={{ fontWeight: 300, fontSize: "16px", marginLeft: "5%", color: "#000000" }}>
              this gated The residences in ARCHID HARMONY are beautifully tucked away from the madness of the city. Yet, they are close to every need you wish attended to.<br />Strategically located on East side of Bhubaneswar at Atala ,4kms away from NH-5 ,these residences give you immediate access to the best that this city has to offer.Live in <br />an environment where each element has been hand-picked, just for you.
            </Typography>
          </div>

        </div>
        <div className='bg'>
          <Typography className="high" style={{ fontWeight: 600, fontSize: "20px", color: "#000000", marginLeft: "5%", lineHeight: 3 }}>
            Evolve & Energise – The Next Level Of Life
          </Typography>
          <div style={{ marginTop: "2%" }}>
            <Typography style={{ fontWeight: 300, fontSize: "16px", marginLeft: "5%", color: "#000000", paddingBottom: "5%" }}>
              Welcome To a place where smart planning and strategic choice of location encapsulates your home in a cocoon of harmony, where you can evolve and energise in<br /> tranquil surroundings and gain space of mind with the finest quality of life. Where every home has a divine feeling every view from the window is equally great. Best <br />of Amenities requisite in this society along with a perfect environment to restart ,rejuvenate, resume your body, mind and soul.

            </Typography>
          </div>
        </div>
        <Card style={{ maxWidth: "90%", marginLeft: "5%" }} className="highhh">
          <div>

            <Typography className="high" style={{ marginTop: "5%", fontWeight: 600, fontSize: "15px", color: "#000000", marginLeft: "10%" }}>
              STEP INTO YOUR IDEAL HOME _____________
            </Typography>

            <Typography style={{ fontWeight: 300, marginTop: "5%", fontSize: "12px", color: "#000000", marginLeft: "10%" }}>
              A scintillating experience of wholesome luxury awaits you and your<br />
              family . Introducing the ultra-luxurious Duplexes in a state of great<br />
              comfort, luxury and bliss in an independent universe that’s tailor-made<br />
              for you and your family.<br />

              Stunning 45 villas on a 2.65-acre expanse with over 25+ carefully<br />
              integrated lifestyle amenities &amp; features, all set to make every day<br />
              exciting. Your stay will be rejuvenating and empowered with positivity.<br />
              All the villas are Vastu Compliant for a beautiful and holy stay .<br />
            </Typography>
          </div>
          <div>
            <img style={{ height: "105%", width: "85%", marginLeft: "28%" }} src={imggg2} alt="logo" />
          </div>
        </Card>


        <Card style={{ maxWidth: "90%", marginLeft: "5%" }} className="highhhh">
          <div>

            <Typography className="high" style={{ marginTop: "5%", fontWeight: 600, fontSize: "15px", color: "#000000", marginLeft: "10%" }}>
              IT’S NOT ABOUT THE QUANTITY OF LUXURY YOU HAVE ,IT’S  ABOUT A PEACEFUL<br />
              STAY _____________
            </Typography>

            <Typography style={{ fontWeight: 300, marginTop: "5%", fontSize: "12px", color: "#000000", marginLeft: "10%" }}>
              Sometimes it feels good to just sit by yourself relax and not talk to<br />
              anyone. Just a deep breath is enough to make you feel alive. You don’t<br />
              need to always have a plan, sometimes letting go is the best thing to<br />
              happen. Let every moment be what it’s going to be. What’s meant to be will<br />
              come your way.<br />


              It’s the quality of life which matters. It strikes the balance, where going back <br />
              to roots is all that matters. Nestled in the lap of nature, waking up to the<br />
              sunrise with a view is always worthwhile.
            </Typography>
          </div>
          <div>
            <img style={{ height: "105%", width: "90%",marginLeft:"10%" }} src={imggg222} alt="logo" />
          </div>
        </Card>

        <Card style={{ maxWidth: "90%", marginLeft: "5%" }} className="high">
          <div>

            <Typography className="high" style={{ marginTop: "5%", fontWeight: 600, fontSize: "15px", color: "#000000", marginLeft: "10%" }}>
              EXPLORE THE SERENITY AND JOY IN ONE PLACE _____________
            </Typography>

            <Typography style={{ fontWeight: 300, marginTop: "5%", fontSize: "12px", color: "#000000", marginLeft: "10%" }}>
              STEP INTO YOUR IDEAL HOME

              You have travelled widely, seen and lived in the very best of places and <br/>
              experienced life in its purest form. It’s time now to live it in your own “HOME”<br/>
               or it should be your place where you can talk and mingle with your neighbours,<br/>
                friends freely. Exclusivity awaits your gracious<br/>
              presence, created with large space ,liberal amenities and premium<br/>

              specifications and much more that make for fine living at a premium<br/>
              address .We raise a toast for a prosperous life here, so come here and<br/>
              relish the brew of a class.<br/>
            </Typography>
          </div>
          <div>
            <img style={{ height: "105%", width: "90%", marginLeft: "9%" }} src={imggg444} alt="logo" />
          </div>
        </Card>


        <div  style={{ marginTop: "7%" }}>
          <Typography  style={{ fontWeight: 600, fontSize: "20px", color: "#999", marginLeft: "5%" }}>
          Society Exclusivity _____________
          </Typography>
          <div style={{ marginTop: "2%" }}>
            <Typography style={{ fontWeight: 300, fontSize: "16px", marginLeft: "5%", color: "#999" }}>
            Your Heart wants roots, but your Mind wants wings. Our Minds want what’s new, modern, state of the art, the very best in technology to make our lives better.<br/>
             The Mind wants a world class taste of aesthetics, which only world class architects can deliver – like they do in world class apartment complexes.
            </Typography>
          </div>
          </div>


      </Grid>

    );
  }
}
    