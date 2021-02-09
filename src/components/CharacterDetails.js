import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch }from 'react-redux';
import { fetchDetails } from '../actions/characters';

const CharacterDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const currentCharacter = useSelector((state) => state.characterState.currentCharacter);
  console.log(currentCharacter);

  const loadDetailsHandler = (currentCharacter) => {
    const { image, name, status, species, type, gender, origin, location, episode } = currentCharacter;
    return (
      <div className="character-details">
        <img className="preloader" src={image} alt={name} />
        <li>{name}</li>
        <li>{status} - {species} {type ? type: null}</li>
        <li>{gender}</li>
        <li>Origin: {origin.name}</li>
        <li>Last known location: {location.name}</li>
        <li>First seen in: {episode[0]}</li>
        {/* TODO: episode display handler*/}
      </div>
    )
  }

  return (
    !currentCharacter ? "Loading..." : (
      <>
        {loadDetailsHandler(currentCharacter)}
      </>
  ));
}

export default CharacterDetails;