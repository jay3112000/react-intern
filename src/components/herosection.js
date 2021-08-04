import React, { useState } from "react";
import './herosection.css';

function HeroSection() {
 
  return (
    <div className='hero-container'>
      <video src='https://external-preview.redd.it/i4chTkhR6pEzR46ur6OEKNWigmZmiHhJjgRw6umHEgI.gif?format=mp4&s=1e117939b6158b9598c3610e05082cc85531c2b6' autoPlay loop muted />
      <h1>Welcome to the Future of Space</h1>
     
    </div>
  );
}

export default HeroSection;
