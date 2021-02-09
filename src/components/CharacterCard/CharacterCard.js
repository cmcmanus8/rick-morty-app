import React from 'react';
import PreloadImage from 'react-preload-image';
import { Link } from 'react-router-dom';
import './CharacterCard.scss';


const CharacterCard = ({ character, isFavourite }) => {
  const { id, image, name, status, species, location, episode } = character;

  return (
    <Link to={`/characters/${id}`} className="link">
      <div className="character-card">
        <div className="image-wrapper">
          <img className="image" src={image} alt={name}/>
        </div>
        <ul className="character-card-details">
          <li className="name">{name}</li>
          <li className="status-species">{status} - {species}</li>
          <li className="location">Last known location:</li>
          <li className="location-name">{location.name}</li>
          <li className="episode">First seen in:</li>
          <li className="episode-name">{episode[0]}</li>
        </ul>
        <div className="favourite-icon">{isFavourite && String.fromCharCode(9734)}</div>
      </div>
    </Link>
  )
}

export default CharacterCard;