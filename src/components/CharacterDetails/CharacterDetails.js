import React, { useEffect } from 'react';
import { useSelector, useDispatch }from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchDetails, fetchFavourites, setFavourite, removeFavourite } from '../../actions/characters';
import './CharacterDetails.scss';

const CharacterDetails = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = match.params;
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);

  const currentCharacter = useSelector((state) => state.characterState.currentCharacter);
  const favouriteIdsList = useSelector((state) => state.characterState.favouriteIds);

  const isFavourite = favouriteIdsList.includes(parseInt(id));

  const handleFavourite = (id, isFavourite) => {
    !isFavourite ? dispatch(setFavourite(id)) : dispatch(removeFavourite(id))
  }

  // TODO: style a nicer alert pop-up!
  if (!user?.result?.name) {
    alert("Please sign in!");
    history.push('/');
  }

  const loadDetailsHandler = (currentCharacter, isFavourite) => {
    const { id, image, name, status, species, type, gender, origin, location, episode } = currentCharacter;
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
        <div className="favourite-icon">
          <button className="favourite-button" onClick={() => handleFavourite(id, isFavourite)}>
            {isFavourite ? String.fromCharCode(9733) : String.fromCharCode(9734)}
          </button>
        </div>
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