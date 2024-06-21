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
    telefon: ''
  });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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

  const sortedPonudjaci = [...filteredPonudjaci].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirection = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? '↑' : '↓';
    }
    return '';
  };

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
            <th onClick={() => requestSort('ID_Ponudjaca')}>ID Ponudjaca {getSortDirection('ID_Ponudjaca')}</th>
            <th onClick={() => requestSort('Ime_i_prezime_ponudjaca')}>Ime i prezime ponudjaca {getSortDirection('Ime_i_prezime_ponudjaca')}</th>
            <th onClick={() => requestSort('Grad_iz_koga_je_ponudjac')}>Grad iz koga je ponudjac {getSortDirection('Grad_iz_koga_je_ponudjac')}</th>
            <th onClick={() => requestSort('Adresa_ponudjaca')}>Adresa ponudjaca {getSortDirection('Adresa_ponudjaca')}</th>
            <th onClick={() => requestSort('Email_ponudjaca')}>Email ponudjaca {getSortDirection('Email_ponudjaca')}</th>
            <th onClick={() => requestSort('Kontakt_telefon_ponudjaca')}>Kontakt telefon ponudjaca {getSortDirection('Kontakt_telefon_ponudjaca')}</th>
            <th onClick={() => requestSort('Godine_iskustva_ponudjaca')}>Godine iskustva ponudjaca {getSortDirection('Godine_iskustva_ponudjaca')}</th>
            <th onClick={() => requestSort('Strucna_sprema_ponudjaca')}>Strucna sprema ponudjaca {getSortDirection('Strucna_sprema_ponudjaca')}</th>
          </tr>
        </thead>
        <tbody>
          {sortedPonudjaci.map((ponudjac) => (
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
