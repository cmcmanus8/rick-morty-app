import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from '../CharacterCard/CharacterCard.js';
import { fetchCharacters, fetchFavourites } from '../../actions/characters.js';
import './CharacterList.scss';

const CharacterList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);

  const charactersState = useSelector((state) => state.characterState.characters);
  const favouriteIdsList = useSelector((state) => state.characterState.favouriteIds);

  const isFavouriteHandler = (id) => {
    return (favouriteIdsList.includes(id))
  }

  const loadList = (charactersState) => {
    return (
      <div className="character-list">
        <div className="character-list-header">
          <h3>Number of Results: {charactersState.info.count}</h3>
          <p>&#9733; Favourite Characters</p>
        </div>
        <div className="character-list-results">
          {charactersState.results.map((character, index) => (
            <CharacterCard
              key={index.toString()}
              id={index+1}
              character={character}
              isFavourite={isFavouriteHandler(character.id)}
            />
          ))}
        </div>
      </div>
      )
    }

  return (
    !charactersState.results ? "Loading..." : (
      <>
        {loadList(charactersState)}
      </>
    )
  );
}

export default CharacterList;