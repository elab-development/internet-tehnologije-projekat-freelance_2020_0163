import React from 'react';
import useButtonClickCounter from '../hooks/useButtonClickCounter.js'; 
import '../styles/About.css'; 
import Footer from './Footer.jsx';

import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';

function About() {
    const { clickCount, handleButtonClick, handleResetClick } = useButtonClickCounter();
  
    return (
      <div className='about-page'>
        <div className="about-container">
          <div className='about-content'>
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              Freelance Platform is a dedicated space for connecting freelancers and clients in need of various services.
              Our mission is to simplify the process of finding and hiring freelancers for your projects, 
              providing a platform that fosters collaboration and success.
            </p>
            <div className="button-container">
              <p>Button Click Count: {clickCount}</p>
              <button className="about-button" onClick={handleButtonClick}>
                Click Me ({clickCount})
              </button>
              <button className="reset-button" onClick={handleResetClick}>
                Reset
              </button> 
            </div>
            <img src={about1} alt='about1' className="about-image" />
            <img src={about2}  alt='about2' className="about-image" /> 
          </div>
          
        </div>
        <Footer />
     </div>
    );
  }
  
  export default About;