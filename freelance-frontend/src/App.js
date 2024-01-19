import './App.css';
import { BrowserRouter,Route,Routes, Navigate  } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import React, { useState } from 'react';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  //fja za login
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  //fja za logout
  const handleLogout = () => {
    setLoggedInUser(null);
    return <Navigate to="/" />;
  };

  //uslov po kom ce se vrsiti pretraga
  const [uslovPretrage,setUslovPretrage]=useState("");


  //funkcija koja setuje uslov pretrage
  function pretrazi(uslovPretrage){
    setUslovPretrage(uslovPretrage);
  }

  return (
    <div className="App">
      <BrowserRouter>
      {loggedInUser && <NavBar  pretrazi={pretrazi} loggedInUser={loggedInUser} handleLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={loggedInUser ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />}
          />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
