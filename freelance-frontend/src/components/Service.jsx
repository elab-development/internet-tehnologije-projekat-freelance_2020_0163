import React, { useState, useEffect } from 'react';
import '../styles/Service.css'; 

function Service({ serviceId, username, text, image, price, stars: initialStars, updateService}) {
    const [stars, setStars] = useState(initialStars || 0);

    useEffect(() => {
      // Azuriranje broja zvezdica u parent komponenti kada se promeni lokalni state
      if (updateService) {
        updateService(serviceId, stars);
      }
    }, [stars, serviceId, updateService]);

    const handleStarClick = (starCount) => {
      setStars(starCount);
    };

    return (
      <div className="service">
        <div className="service-header">
          <p>Ponudjac usluge: {username}</p>
        </div>
        <p className="service-text">Opis: {text}</p>
        <p className="service-text">Cena usluge: {price} EUR</p>
        {image && <img src={image} alt="Service" className="service-image" />}
        <div className="service-actions">
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= stars ? 'star-filled' : 'star-empty'}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        
      </div>
    );
}

export default Service;