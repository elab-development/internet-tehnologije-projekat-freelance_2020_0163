import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Profile from './components/Profile.jsx';
import Admin from './components/Admin.js';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // fja za login
  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  // fja za logout
  const handleLogout = () => {
    setLoggedInUser(null);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    return <Navigate to="/" />;
  };

  // Učitavanje korisnika iz session storage kada se komponenta montira
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loggedInUser && <NavBar loggedInUser={loggedInUser} handleLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={loggedInUser ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/about"
            element={<About />}
          />
           <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/profile"
            element={loggedInUser ? <Profile loggedInUser={loggedInUser} /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
