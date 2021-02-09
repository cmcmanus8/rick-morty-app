import React from 'react';
import PreloadImage from 'react-preload-image';
import { Link } from 'react-router-dom';


const Character = ({ character }) => {
  const { id, image, name, status, species, location, episode } = character;

  return (
    <div className="character">
      <Link to={`/characters/${id}`}>
        <div>
          <PreloadImage className="preloader" src={image} lazy />
          <ul className="character-list-details">
            <li>{name}</li>
            <li>{status} - {species}</li>
            <li>Last known location: {location.name}</li>
            <li>First seen in: {episode[0]}</li>
          </ul>
        </div>
      </Link>
    </div>
  )
}

export default Character;