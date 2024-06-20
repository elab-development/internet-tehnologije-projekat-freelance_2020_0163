import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function Admin() {
  const [ponudjaci, setPonudjaci] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/ponudjaci')
      .then(response => {
        const ponudjaci = response.data.data.map(item => ({
          ID_Ponudjaca: item.id,
          Ime_i_prezime_ponudjaca: item.imePrezime,
          Grad_iz_koga_je_ponudjac: item.grad,
          Adresa_ponudjaca: item.adresa,
          Email_ponudjaca: item.email,
          Kontakt_telefon_ponudjaca: item.telefon,
          Godine_iskustva_ponudjaca: item.godineIskustva,
          Strucna_sprema_ponudjaca: item.strucnaSprema,
        }));
        setPonudjaci(ponudjaci);
      })
      .catch(error => {
        console.error('There was an error fetching the ponudjaci!', error);
      });
  }, []);
  

  return (
    <div className="admin-container">
      <h1 className="admin-title">Lista Ponudjaca</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID Ponudjaca</th>
            <th>Ime i Prezime</th>
            <th>Grad</th>
            <th>Adresa</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Godine Iskustva</th>
            <th>Stručna Sprema</th>
          </tr>
        </thead>
        <tbody>
          {ponudjaci.map((ponudjac) => (
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
