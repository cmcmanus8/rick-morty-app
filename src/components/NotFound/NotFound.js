import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div class="notfound-container">
      <div class="background-img">
        <div class="wrapper">
          <div class="img-wrapper">
            <span>44</span>
          </div>
          <p>The page you are trying to search has been <br /> moved to another universe.</p>
          <Link className="home-button" to="/characters">GET ME HOME</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
