import './App.css';
import { BrowserRouter,Route,Routes, Navigate  } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import React, { useState } from 'react';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div className="App">
      <BrowserRouter>
        
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
