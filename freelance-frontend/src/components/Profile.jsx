import React from 'react';
import Footer from './Footer'; 

import '../styles/Profile.css';

import imageVasa from '../assets/user1.jpg';
import imageMilica from '../assets/user2.jpg';

function Profile({ loggedInUser }) {
  //statican niz korisnika
    const usersInfo = {
      vasilije: {
        username: 'Vasilije Milacic',
        birthday: '10/05/2001',
        phone: '064532662',
        city: 'Belgrade',
        image: imageVasa,
        services: ['Izrada veb sajtova', 'Kreiranje logoa za brendove', 'Resavanje bagova u kodu'],
      },
      milica: {
        username: 'Milica Milosavljevic',
        birthday: '05/12/2001',
        phone: '069443555',
        city: 'Novi Sad',
        image: imageMilica,
        services: ['Pisanje raznih vrsta radova - seminarskih, naucnih', 'Izrada dijagrama za aplikacije'],
      }
    };
  
    const userInfo = usersInfo[loggedInUser];
  
    if (!userInfo) {
      return <div>User not found</div>;
    }
  
    const { username, birthday, phone, city, image, services } = userInfo;
  
    return (
      <div>
        <div className="profile">
          <div className="profile-info">
            <h2>USER PROFILE</h2>
            <img src={image} alt="Profile" className="profile-image" />
            <div className="user-details">
              <p>Username: {username}</p>
              <p>Birthday: {birthday}</p>
              <p>Phone: {phone}</p>
              <p>City: {city}</p>
              <p>Services: {services.join(', ')}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Profile;