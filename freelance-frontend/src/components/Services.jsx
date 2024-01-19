import React, { useState } from 'react';
import Service from './Service';
import Footer from './Footer';
import '../styles/Services.css'; 
import slika1 from '../assets/slika1.jpeg';
import slika2 from '../assets/slika2.jpg';
import slika3 from '../assets/slika3.jpg';
import slika4 from '../assets/slika4.jpg';
import slika5 from '../assets/slika5.jpg';


function Services({ kriterijum }) {
    const postsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(0);
  
    const services = [
      { id: 1, username: 'Nikola Ninkovic', text: 'Odličan dizajn web stranica', price: 300, image: slika1, stars: 0 },
      { id: 2, username: 'Mina Jokic', text: 'Brza i efikasna izrada seminarskih radova', price: 50, image: slika2, stars: 0 },
      { id: 3, username: 'Marko Petrovic', text: 'Popravljanje procesora, ugradnja procesora, rama i ostalih delova', price: 60, image: slika3, stars: 0 },
      { id: 4, username: 'Ana Doncic', text: 'Izrada razlicitih vrsti dijagrama, izgleda aplikacija.', price: 80, image: slika4, stars: 0 },
      { id: 5, username: 'Milos Nikolic', text: 'Usluge QA testiranja sa visegodisnjim iskustvom u pronalazenju bagova', price: 50, image: slika5, stars: 0 },
    ];
  
    const [allServices, setAllServices] = useState(services);
  
    // Funkcija za update zvezdica
    const updateStars = (serviceId, starCount) => {
      setAllServices((prevServices) =>
        prevServices.map((service) =>
          service.id === serviceId ? { ...service, stars: starCount } : service
        )
      );
    };
  
    // Funkcija za filtriranje
    const filterServices = () => {
      return kriterijum
        ? allServices.filter((service) =>
            service.username.toLowerCase().includes(kriterijum.toLowerCase())
          )
        : allServices;
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
          {displayServices.map((service) => (
            <Service
              key={service.id}
              serviceId={service.id}
              username={service.username}
              text={service.text}
              price={service.price}
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

