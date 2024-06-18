import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer'; 
import '../styles/Profile.css';

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const [userServices, setUserServices] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = sessionStorage.getItem('token');
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserInfo(response.data.data);

        // Fetching services for the logged-in user
        const userId = response.data.data.id_korisnika;
        const servicesResponse = await axios.get(`http://127.0.0.1:8000/api/usluge/korisnik/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserServices(servicesResponse.data);  
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleDelete = async (serviceId) => {
    const token = sessionStorage.getItem('token');
    try {
      await axios.delete(`http://127.0.0.1:8000/api/usluge/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserServices(prevServices => prevServices.filter(service => service.id_usluge !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const { id_korisnika, ime_korisnika, email_korisnika } = userInfo;

  return (
    <div>
      <div className="profile">
        <div className="profile-info">
          <h2>USER PROFILE</h2>
          <div className="user-details">
            <p>ID: {id_korisnika}</p>
            <p>Ime: {ime_korisnika}</p>
            <p>Email: {email_korisnika}</p>
          </div>
        </div>
        <div className="profile-services services-details">
          <h2>USLUGE</h2>
          {userServices.length === 0 ? (
            <p className="no-services">Trenutno nemate nijednu uslugu.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID Usluge</th>
                  <th>Naziv Usluge</th>
                  <th>Opis Usluge</th>
                  <th>Cena</th>
                  <th>Vreme Realizacije</th>
                  <th>Akcije</th>
                </tr>
              </thead>
              <tbody>
                {userServices.map(service => (
                  <tr key={service.id_usluge}>
                    <td>{service.id_usluge}</td>
                    <td>{service.naziv_usluge}</td>
                    <td>{service.opis_usluge}</td>
                    <td>{service.cena}</td>
                    <td>{service.vreme_realizacije_u_mesecima}</td>
                    <td>
                      <button onClick={() => handleDelete(service.id_usluge)}>Obriši</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
