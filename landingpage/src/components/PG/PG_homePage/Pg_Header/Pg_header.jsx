// src/App.js
import React from 'react';
import './ph_header.css'
import { Carousel } from 'react-responsive-carousel';
import welcom from './images/welcome.png'
import bg from './images/bg3.png'
import tifr from './images/Banners/TIFR-banner.jpg'
import silde1 from './images/Banners/side11.png'



const Pg_header = () => {


  return (
    <div>
    <div style={{paddingBottom:'20px'}}>
    <marquee  direction="left" scrollamount="5" onmouseover="this.stop()" onmouseleave="this.start()">
        <div>All tests will be LIVE according to the detailed schedule given. Do not confuse to the Total No. of tests in the test cards while buying as they show the number of tests LIVE at the moment..</div></marquee>
    </div>


    <Carousel className='' autoPlay  infiniteLoop showIndicators={false} showThumbs={false} showArrows={false} showStatus={false} interval={2000} >
       <div className="boxShadow_pg ">
        <img src={silde1} alt="" />
       </div>
        <div className=''>
          <img src={tifr} alt="" />
          </div>
    
    </Carousel>
    </div>
  );
};

export default Pg_header;