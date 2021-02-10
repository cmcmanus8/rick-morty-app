import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard.js';
import { fetchCharacters, fetchFavourites, loadMore } from '../../actions/characters.js';
import './CharacterList.scss';

const CharacterList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));

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

  // TODO: style a nicer alert pop-up!
  if (!user?.result?.name) {
    alert("Please sign in!");
    history.push('/');
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

  const loadMoreHandler = (info) => {
    const nextPage = info.next.split("?")[1];
    if (nextPage) {
      return (
        <button onClick={() => dispatch(loadMore(nextPage))}>Load More</button>
      )
    }
  }

  return (
    !charactersState.results ? "Loading..." : (
      <div className="character-list-container">
        {loadList(charactersState)}
        {loadMoreHandler(charactersState.info)}
      </div>
    )
  );
}

export default CharacterList;