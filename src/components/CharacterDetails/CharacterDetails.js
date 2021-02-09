import React, { useEffect } from 'react';
import { useSelector, useDispatch }from 'react-redux';
import { fetchDetails } from '../../actions/characters';
import './CharacterDetails.scss';

const CharacterDetails = ({ match, isFavourite }) => {
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const currentCharacter = useSelector((state) => state.characterState.currentCharacter);
  console.log(currentCharacter);

  const loadDetailsHandler = (currentCharacter, isFavourite) => {
    const { image, name, status, species, type, gender, origin, location, episode } = currentCharacter;
    return (
      <div className="character-details">
        <img className="character-details-image" src={image} alt={name} />
        <ul className="details-wrapper">
          <li className="name">{name}</li>
          <li className="status-species-gender">{status} - {species} {type ? `-${type}`: null} - {gender}</li>
          <li className="origin">Origin:</li>
          <li className="origin-name">{origin.name}</li>
          <li className="location">Last known location:</li>
          <li className="location-name">{location.name}</li>
          <li className="episode">First seen in:</li>
          <li className="episode-name">{episode[0]}</li>
          {/* TODO: episode display handler*/}
        </ul>
        <div className="favourite-icon">{isFavourite ? String.fromCharCode(9733) : String.fromCharCode(9734)}</div>
      </div>
    )
  }

  return (
    !currentCharacter ? "Loading..." : (
      <>
        {loadDetailsHandler(currentCharacter, isFavourite)}
      </>
  ));
}

export default CharacterDetails;