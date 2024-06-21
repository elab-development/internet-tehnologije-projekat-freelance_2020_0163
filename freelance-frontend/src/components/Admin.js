import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function Admin() {
  const [ponudjaci, setPonudjaci] = useState([]);
  const [search, setSearch] = useState({
  
    imePrezime: '',
    grad: '',
    adresa: '',
    email: '',
    telefon: '',
    
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/ponudjaci')
      .then(response => {
        setPonudjaci(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the ponudjaci!', error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const filteredPonudjaci = ponudjaci.filter(ponudjac => {
    return (
      
      ponudjac.Ime_i_prezime_ponudjaca.toLowerCase().includes(search.imePrezime.toLowerCase()) &&
      ponudjac.Grad_iz_koga_je_ponudjac.toLowerCase().includes(search.grad.toLowerCase()) &&
      ponudjac.Adresa_ponudjaca.toLowerCase().includes(search.adresa.toLowerCase()) &&
      ponudjac.Email_ponudjaca.toLowerCase().includes(search.email.toLowerCase()) &&
      ponudjac.Kontakt_telefon_ponudjaca.toLowerCase().includes(search.telefon.toLowerCase())  
    
    );
  });

  return (
    <div className="admin-container">
      <h1>Lista Ponudjaca</h1>
      <div className="search-container"> 
        <input
          type="text"
          name="imePrezime"
          placeholder="Pretraga po imenu"
          value={search.imePrezime}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="grad"
          placeholder="Pretraga po gradu"
          value={search.grad}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="adresa"
          placeholder="Pretraga po adresi"
          value={search.adresa}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Pretraga po emailu"
          value={search.email}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="telefon"
          placeholder="Pretraga po telefonu"
          value={search.telefon}
          onChange={handleSearchChange}
        /> 
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID Ponudjaca</th>
            <th>Ime i prezime ponudjaca</th>
            <th>Grad iz koga je ponudjac</th>
            <th>Adresa ponudjaca</th>
            <th>Email ponudjaca</th>
            <th>Kontakt telefon ponudjaca</th>
            <th>Godine iskustva ponudjaca</th>
            <th>Strucna sprema ponudjaca</th>
          </tr>
        </thead>
        <tbody>
          {filteredPonudjaci.map((ponudjac) => (
            <tr key={ponudjac.ID_Ponudjaca}>
              <td>{ponudjac.ID_Ponudjaca}</td>
              <td>{ponudjac.Ime_i_prezime_ponudjaca}</td>
              <td>{ponudjac.Grad_iz_koga_je_ponudjac}</td>
              <td>{ponudjac.Adresa_ponudjaca}</td>
              <td>{ponudjac.Email_ponudjaca}</td>
              <td>{ponudjac.Kontakt_telefon_ponudjaca}</td>
              <td>{ponudjac.Godine_iskustva_ponudjaca}</td>
              <td>{ponudjac.Strucna_sprema_ponudjaca}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
