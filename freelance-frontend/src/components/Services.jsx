import React, { useState, useEffect } from 'react';
import Service from './Service';
import Footer from './Footer'; 
import '../styles/Services.css';
import useServices from '../hooks/useServices';

function Services() {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [services, setServices] = useServices();
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchParams, setSearchParams] = useState({
    naziv_usluge: '',
    opis_usluge: '',
    cena: '',
    vreme_realizacije_u_mesecima: '',
    kategorija: '',
    korisnik: ''
  });
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({});
  const [currencyOptions, setCurrencyOptions] = useState([]);

  // Fetch exchange rates and available currencies from API
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then(response => response.json())
      .then(data => {
        setExchangeRates(data.rates);
        setCurrencyOptions(Object.keys(data.rates));
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }, []);

  useEffect(() => {
    if (selectedCurrency !== 'USD') {
      fetch(`https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`)
        .then(response => response.json())
        .then(data => setExchangeRates(data.rates))
        .catch(error => console.error('Error fetching exchange rates:', error));
    }
  }, [selectedCurrency]);

  // Update prices based on selected currency
  const convertPrice = (priceInEUR) => {
    const rate = exchangeRates['EUR'] || 1; // Default to 1 if no rate is found
    return (priceInEUR * rate).toFixed(2);
  };

  // Funkcija za update zvezdica
  const updateStars = (serviceId, starCount) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id_usluge === serviceId ? { ...service, stars: starCount } : service
      )
    );
  };

  // Funkcija za filtriranje
  useEffect(() => {
    const filtered = services.filter((service) => {
      const { naziv_usluge, opis_usluge, cena, vreme_realizacije_u_mesecima, kategorija, korisnik } = searchParams;
      return (
        (naziv_usluge === '' || (service.naziv_usluge && service.naziv_usluge.toLowerCase().includes(naziv_usluge.toLowerCase()))) &&
        (opis_usluge === '' || (service.opis_usluge && service.opis_usluge.toLowerCase().includes(opis_usluge.toLowerCase()))) &&
        (cena === '' || (service.cena && service.cena.toString().includes(cena))) &&
        (vreme_realizacije_u_mesecima === '' || (service.vreme_realizacije_u_mesecima && service.vreme_realizacije_u_mesecima.toString().includes(vreme_realizacije_u_mesecima))) &&
        (kategorija === '' || (service.kategorija_kojoj_usluga_pripada && service.kategorija_kojoj_usluga_pripada.naziv_kategorije.toLowerCase().includes(kategorija.toLowerCase())))  
      );
    });
    setFilteredServices(filtered);
  }, [searchParams, services]);

  // Funkcija za paginaciju
  const paginateServices = (services) => {
    const startIndex = currentPage * postsPerPage;
    return services.slice(startIndex, startIndex + postsPerPage);
  };

  // Prikaz usluga na osnovu trenutnih stranica
  const displayServices = paginateServices(filteredServices);

  // Funkcija za promenu stranice
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className='servicesStranica'>
      <div className="search-bar">
        <input
          type="text"
          name="naziv_usluge"
          placeholder="Naziv usluge"
          value={searchParams.naziv_usluge}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="opis_usluge"
          placeholder="Opis usluge"
          value={searchParams.opis_usluge}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cena"
          placeholder="Cena"
          value={searchParams.cena}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="vreme_realizacije_u_mesecima"
          placeholder="Vreme realizacije u mesecima"
          value={searchParams.vreme_realizacije_u_mesecima}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="kategorija"
          placeholder="Kategorija"
          value={searchParams.kategorija}
          onChange={handleInputChange}
        /> 
      </div>
      <div className="currency-selector">
        <label htmlFor="currency">Izaberi valutu: </label>
        <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
          {currencyOptions.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="services">
        {displayServices.map((service, index) => (
          <Service
            key={index}
            id_usluge={service.id_usluge}
            naziv_usluge={service.naziv_usluge}
            opis_usluge={service.opis_usluge}
            cena={convertPrice(service.cena)}
            vreme_realizacije_u_mesecima={service.vreme_realizacije_u_mesecima}
            kategorija_kojoj_usluga_pripada={service.kategorija_kojoj_usluga_pripada}
            korisnik_koji_je_odabrao_datu_uslugu={service.korisnik_koji_je_odabrao_datu_uslugu}
            image={service.image}
            stars={service.stars}
            updateStars={updateStars} 
            selectedCurrency={selectedCurrency} // Prosledjujemo i odabranu valutu
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredServices.length / postsPerPage) }).map((_, index) => (
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
