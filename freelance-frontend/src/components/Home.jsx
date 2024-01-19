import React, { useState } from 'react';
import '../styles/Home.css'; 
import Footer from './Footer';

import slika1 from '../assets/slika1.jpeg';
import slika2 from '../assets/slika2.jpg';
import slika3 from '../assets/slika3.jpg';
import slika4 from '../assets/slika4.jpg';
import slika5 from '../assets/slika5.jpg';

const Home = () => {
    //za menjanje slideshowa
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slika1, slika2, slika3, slika4, slika5];

  //idi napred
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  //idi nazad
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
    <div className="home-container">
      <div className="slideshow">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slide-image" />
        <div className="slide-content">
          <h1>Dobrodošli na Freelance Platformu</h1>
          <p>Pronađite najbolje freelance usluge za vaše projekte.</p>
        </div>
        <button className="slide-button prev" onClick={goToPrevSlide}>&#8249;</button>
        <button className="slide-button next" onClick={goToNextSlide}>&#8250;</button>
      </div>
    </div>
     <Footer />
     </div>
  );
}

export default Home;