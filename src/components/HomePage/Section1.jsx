import React from "react";
import "../../styles/homepage.css";

function Section1() {
  return (
    <div className='hero-full'>
      <div className='hero-bg-overlay'></div>
      <div className='hero-text'>
        <div className='hero-text-inner'>
          <h1 className='hero-h1'>Systemic change starts with you</h1>
          <p className='hero-p'>
            Fund carbon removal, offsets, climate policy, and conservation–all
            in one subscription.
          </p>
          <div className='hero-btn-container'>
            <button className='btn hero-btn'>Get Started</button>
          </div>
          <p className='small-para'>
            Join the 6,207 people who signed up this month!
          </p>
        </div>
      </div>
      <div className='hero-img'>
        <img
          src='https://projectwren.imgix.net/irrawady.png?auto=format%2Ccompress&q=35&h=800&fit=clip&ch=Height%2CDPR&dpr=2'
          alt=''
        />
      </div>
    </div>
  );
}

export default Section1;
