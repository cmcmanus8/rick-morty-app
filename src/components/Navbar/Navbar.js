import React, { useState, useEffect } from 'react';
import headerImage from '../../images/header.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import './Navbar.scss';

const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/')

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  // TODO: find better way of checking if details page
  const isDetailsPage = history.location.pathname.length > 12;

  return (
    <div className="navbar-container">
      <div className="image-wrapper">
        <Link className="nav-item" to='/characters'>
          <img src={headerImage} alt="rick and morty header" />
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          {user ? (
            <div className="logged-in">
              <div className="username">{user.result.name}</div>
              <Link className="logout" to="/" onClick={logout}>Logout</Link>
              {isDetailsPage && (
                <Link className="back-button" to="/characters">&#8592;</Link>
              )}
            </div>
          ) : (
            <div className="logged-out">
              <Link className="login" to="/auth">Sign In or Register</Link>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Navbar;