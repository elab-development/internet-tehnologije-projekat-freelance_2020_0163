import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('roberto.hartmann@example.org');
  const [password, setPassword] = useState('password');
  const [name, setName] = useState('');
  let navigate = useNavigate();
  // fja za obradu funkcije logina
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: username,
        password,
      });

      if (response.data.Poruka === 'Uspesan login korisnika') {
        const user = response.data['User: '];
        const token = response.data['Token: '];

        // Čuvanje korisnika i tokena u session storage
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('token', token);
        if(user.admin==0){
          navigate("/admin")
        }else{
          navigate("/services")
        }
        onLogin(username);
        alert('Uspešno ste se prijavili!');
      } else {
        alert('Pogrešno korisničko ime ili lozinka.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Došlo je do greške prilikom logovanja. Pokušajte ponovo.');
    }
  };

  // fja za obradu funkcije registracije
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        email: username,
        password,
      });

      if (response.data.Poruka === 'Uspesna registracija korisnika!') {
        const user = response.data['User: '];
        const token = response.data['Token: '];

        // Čuvanje korisnika i tokena u session storage
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('token', token);

        onLogin(username);
        alert('Uspešno ste se registrovali!');
      } else {
        alert('Greska pri registraciji.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Došlo je do greške prilikom registracije. Pokušajte ponovo.');
    }
  };

  return (
    <div className="login-form">
      <div className="login-form-data">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {!isLogin && (
          <div>
            <label htmlFor="name">Ime:</label>
            <input
              type="text"
              id="name"
              placeholder="Ime"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <label htmlFor="username">Korisničko ime:</label>
        <input
          type="text"
          id="username"
          placeholder="Korisničko ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Lozinka:</label>
        <input
          type="password"
          id="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLogin ? (
          <button onClick={handleLogin}>Prijavi se</button>
        ) : (
          <button onClick={handleRegister}>Registruj se</button>
        )}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Nemaš nalog? Registruj se' : 'Imaš nalog? Prijavi se'}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
