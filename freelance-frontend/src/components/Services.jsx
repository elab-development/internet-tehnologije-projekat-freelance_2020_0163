import React, { useState } from 'react';
import Service from './Service';
import Footer from './Footer'; 
import '../styles/Services.css';
import useServices from '../hooks/useServices';

function Services({ kriterijum }) {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [services, setServices] = useServices();

  // Funkcija za update zvezdica
  const updateStars = (serviceId, starCount) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id_usluge === serviceId ? { ...service, stars: starCount } : service
      )
    );
  };

  // Funkcija za filtriranje
  const filterServices = () => {
    return kriterijum
      ? services.filter((service) =>
          service.naziv_usluge.toLowerCase().includes(kriterijum.toLowerCase())
        )
      : services;
  };

  // Funkcija za paginaciju
  const paginateServices = (services) => {
    const startIndex = currentPage * postsPerPage;
    return services.slice(startIndex, startIndex + postsPerPage);
  };

  // Prikaz usluga na osnovu trenutnih stranica i filtriranja
  const displayServices = paginateServices(filterServices());

  // Funkcija za promenu stranice
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='servicesStranica'>
      <div className="services">
        {displayServices.map((service, index) => (
          <Service
            key={index}
            id_usluge={service.id_usluge}
            naziv_usluge={service.naziv_usluge}
            opis_usluge={service.opis_usluge}
            cena={service.cena}
            vreme_realizacije_u_mesecima={service.vreme_realizacije_u_mesecima}
            kategorija_kojoj_usluga_pripada={service.kategorija_kojoj_usluga_pripada}
            korisnik_koji_je_odabrao_datu_uslugu={service.korisnik_koji_je_odabrao_datu_uslugu}
            image={service.image}
            stars={service.stars}
            updateStars={updateStars} 
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filterServices().length / postsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={currentPage === index ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Services;
