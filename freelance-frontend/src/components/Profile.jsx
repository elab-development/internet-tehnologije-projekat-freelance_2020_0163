import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer'; 
import '../styles/Profile.css';
import useCategories from '../hooks/useCategories';  

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const [userServices, setUserServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);
  const { categories, loading, error } = useCategories();  
  const [newService, setNewService] = useState({
    naziv: '',
    opis: '',
    cena: '',
    vremeRealizacijeUMesecima: '',
    kategorija_usluge_id: ''
  });

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

  const handleAddService = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/usluge', {
        ...newService,
        user_id: userInfo.id_korisnika
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserServices(prevServices => [...prevServices, response.data]);
      setShowForm(false);
      setNewService({
        naziv: '',
        opis: '',
        cena: '',
        vremeRealizacijeUMesecima: '',
        kategorija_usluge_id: ''
      });
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/usluge/${currentServiceId}`, {
        ...newService,
        user_id: userInfo.id_korisnika
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserServices(prevServices => prevServices.map(service => service.id_usluge === currentServiceId ? response.data.data : service));
      setShowForm(false);
      setIsUpdating(false);
      setNewService({
        naziv: '',
        opis: '',
        cena: '',
        vremeRealizacijeUMesecima: '',
        kategorija_usluge_id: ''
      });
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleEdit = (service) => {
    setShowForm(true);
    setIsUpdating(true);
    setCurrentServiceId(service.id_usluge);
    setNewService({
      naziv: service.naziv_usluge,
      opis: service.opis_usluge,
      cena: service.cena,
      vremeRealizacijeUMesecima: service.vreme_realizacije_u_mesecima,
      kategorija_usluge_id: service.kategorija_usluge_id
    });
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
                      <button onClick={() => handleEdit(service)}>Ažuriraj</button>
                      <button onClick={() => handleDelete(service.id_usluge)}>Obriši</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Zatvori' : 'Dodaj novu uslugu'}
          </button>
          {showForm && (
            <form onSubmit={isUpdating ? handleUpdateService : handleAddService} className="add-service-form">
              <input
                type="text"
                placeholder="Naziv usluge"
                value={newService.naziv}
                onChange={(e) => setNewService({ ...newService, naziv: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Opis usluge"
                value={newService.opis}
                onChange={(e) => setNewService({ ...newService, opis: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Cena"
                value={newService.cena}
                onChange={(e) => setNewService({ ...newService, cena: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Vreme realizacije (u mesecima)"
                value={newService.vremeRealizacijeUMesecima}
                onChange={(e) => setNewService({ ...newService, vremeRealizacijeUMesecima: e.target.value })}
                required
              />
              <select
                value={newService.kategorija_usluge_id}
                onChange={(e) => setNewService({ ...newService, kategorija_usluge_id: e.target.value })}
                required
              >
                <option value="">Izaberi kategoriju</option>
                {categories.map(category => (
                  <option key={category.ID} value={category.ID}>
                    {category.Naziv_kategorije}
                  </option>
                ))}
              </select>
              <button type="submit">{isUpdating ? 'Ažuriraj uslugu' : 'Dodaj uslugu'}</button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
