import React, { useState, useEffect } from 'react';
import '../styles/Service.css';

function Service({ id_usluge, naziv_usluge, opis_usluge, cena, vreme_realizacije_u_mesecima, kategorija_kojoj_usluga_pripada, korisnik_koji_je_odabrao_datu_uslugu, image, stars: initialStars, updateStars }) {
  const [stars, setStars] = useState(initialStars || 0);

  useEffect(() => {
    if (updateStars && stars !== initialStars) {
      updateStars(id_usluge, stars);
    }
  }, [stars, id_usluge, updateStars, initialStars]);

  const handleStarClick = (starCount) => {
    setStars(starCount);
  };

  return (
    <div className="service">
      <div className="service-header">
        <p>Naziv usluge: {naziv_usluge}</p>
      </div>
      <p className="service-text">Opis usluge: {opis_usluge}</p>
      <p className="service-text">Cena: {cena} EUR</p>
      <p className="service-text">Vreme realizacije u mesecima: {vreme_realizacije_u_mesecima}</p>
      {image && <img src={image} alt="Service" className="service-image" />}
      <div className="service-text">Kategorija kojoj usluga pripada: {kategorija_kojoj_usluga_pripada.naziv_kategorije}</div>
      <div className="service-text">Korisnik koji je odabrao datu uslugu: {korisnik_koji_je_odabrao_datu_uslugu.ime_korisnika}</div>
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
