import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NavBar({ loggedInUser, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    const token = sessionStorage.getItem('token');
    try {
      await axios.post('http://127.0.0.1:8000/api/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`  
        }
      });

      // Brisanje sessionStorage
      sessionStorage.clear();

      // Pozivanje handleLogout i navigacija
      handleLogout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Došlo je do greške prilikom odjavljivanja. Pokušajte ponovo.');
    }
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav__title">
          <h1>IT FREELANCE APP</h1>
        </div>
        <ul className="nav__list">
          {loggedInUser ? (
            <>
              <li className="nav__item nav__item--link">
                <Link to="/profile">PROFILE</Link>
              </li>
              <li className="nav__item nav__item--link">
                <Link to="/home">HOME</Link>
              </li>
              <li className="nav__item nav__item--link">
                <Link to="/services">SERVICES</Link>
              </li>
              <li className="nav__item nav__item--link">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="nav__item nav__item--user"> 
               
                <button className="logout-button" onClick={handleLogoutClick}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav__item nav__item--link">
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
