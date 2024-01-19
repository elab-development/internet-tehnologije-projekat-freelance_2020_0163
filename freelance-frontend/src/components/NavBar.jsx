import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar({ loggedInUser, handleLogout, pretrazi }) {

    const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
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
              <li className="nav__item nav__item--search">
                <input type="text" id="kriterijum" placeholder="Pretrazi" 
                       name="search" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>
                <button type="submit" className='dugmePretraga'  ><BsSearch></BsSearch></button>
              </li>
              <li className="nav__item nav__item--link">
                <Link to='/profile'> PROFILE </Link>
              </li>
              <li className="nav__item nav__item--link">
                <Link to='/home'>HOME </Link>
              </li>
              <li className="nav__item nav__item--link">
                <Link to='/services'>SERVICES</Link>
              </li>
              <li className="nav__item nav__item--link">
                <Link to='/about'>ABOUT </Link>
              </li>
              <li className="nav__item nav__item--user">
                USER: {loggedInUser}{' '}
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