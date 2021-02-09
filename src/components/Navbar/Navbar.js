import React, { useState, useEffect } from 'react';
import headerImage from '../../images/header.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { logout } from '../../actions/auth';
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

    // JWT check

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

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
              <div className="username">{user.result.givenName}'s profile</div>
              <Link className="logout" to="/" onClick={logout}>Logout</Link>
            </div>
          ) : (
            <div className="logged-out">
              <Link className="login" to="/auth">Sign In or Register</Link>
              {/* <Link className="register" to="/register">Register</Link> */}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}



//   return (
//     <header id="haufe-header">
//       <Link className="nav-item" to='/' onClick={() => performLogout()}>Logout</Link>
//     </header>
//   )
// }
export default Navbar;