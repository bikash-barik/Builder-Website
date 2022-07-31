import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './SingleProperty.css';
import facilities from '../../images/ongoing/archid.png';


// import OngoingData from '../data/ongoing';

export default function SingleProperty({OngoingData}) {

    const {id}= useParams();

    // console.log(id)
   const [paramId, setparamid] = useState(id)

  return (
      <div>
{
       OngoingData
       .filter((list)=>list.id===paramId)
       .map((data,i)=>(
        <>
     
                <div>
                    <p></p>
                
        <div className="landing-image">
            <img src="https://source.unsplash.com/1600x900/?house"/>
        </div>
        <div className='button-grp'>
        <div className='btn btn-primary mx-2'>hello</div>
        <div className='btn btn-primary mx-2'>Gallery</div>
            <div className='btn btn-primary mx-2'>hello</div>
        </div>
        <section className='highlights container-fluid text-center'>
        <div className="d-flex">
            <h5>Project highlights </h5>
            <hr style={{width:"150px", backgroundColor:"white", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
        </div>
        <div className='row my-2 justify-content-center'>
{
    data.highlight.map((img,i)=>(


            <div className='col-lg-3 col-md-3 col-sm-4 my-2'>
                <img src={img.detail} className="detail-img"  data-aos={i<=4 ? "fade-right":"fade-left"} data-aos-easing="linear"
     data-aos-duration="1500"></img>
            </div>
    ))
}

        </div>
        <div className='detail-1'>

        <div className="d-flex">
            <h4 className="black-text">{data.title}</h4>
            <hr style={{width:"150px", backgroundColor:"black", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
        </div>
        <div className='black-text'>

            <h5  className='black-text my-4'>
                {data.details_1}
            </h5>
        </div>
        </div>
        <div className=' container-fluid'>
              <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                        <div className='detail-2'>
                        <div className="d-flex">
            <h5 className='black-text'>Project highlights </h5>
            <hr style={{width:"150px", backgroundColor:"black", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
        </div>
                              <p className='black-text'  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500" >
                                  {data.details_2}
                              </p>
                        </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                        <img data-aos="fade-down-left" data-aos-easing="linear"
     data-aos-duration="1500" src={data.detailImage1} style={{height:"100%"}} className='img-fluid'></img>
                  </div>
              </div>
        </div>


        <div className='container-fluid my-5'>
            <div className='row '>
                <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                <img data-aos="fade-up-right" data-aos-easing="linear"
     data-aos-duration="1500"  src={data.detailImage2} style={{height:"100%"}} className='img-fluid'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                <div className='detail-3'>
                        <div className="d-flex">
            <h5 className='black-text'>Project highlights </h5>
            <hr style={{width:"150px", backgroundColor:"black", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
        </div>
                              <p className='black-text' data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500" >
                              {data.details_3}
                              </p>
                        </div>
                </div>
            </div>
        </div>

        <div className=' container-fluid'>
              <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                        <div className='detail-2'>
                        <div className="d-flex">
            <h5 className='black-text'>Project highlights </h5>
            <hr style={{width:"150px", backgroundColor:"black", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
        </div>
                              <p className='black-text'  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500" >
                              {data.details_4}
                              </p>
                        </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                        <img data-aos="fade-down-left" data-aos-easing="linear"
     data-aos-duration="1500"  data-aos-offset="400" src={data.detailImage3} style={{height:"100%"}} className='img-fluid'></img>
                  </div>
              </div>
        </div>

        <div className=' container-fluid my-5'>
              <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                        <div className='detail-2'>
                        <div className="d-flex">
            <h5 className='black-text'>Project highlights </h5>
            <hr style={{width:"150px", backgroundColor:"black", fontWeight:"", height:"1.3px",marginLeft:"5px" , opacity:"0.8"}}/>
        </div>
                              <p className='black-text'  data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500" >
                              {data.amenities}
                              </p>
                        </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                        <img src={facilities} style={{height:"600px", width:"100%"}} className='img-fluid'></img>
                  </div>
              </div>
        </div>

        </section>s
                </div>
        </>
       )
          
        )
}

       




        
    </div>
  )
}
