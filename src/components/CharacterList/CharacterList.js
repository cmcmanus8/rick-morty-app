import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Character from '../Character.js';
import { fetchCharacters } from '../../actions/characters.js';
import './CharacterList.scss';

const CharacterList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const charactersState = useSelector((state) => state.characterState.characters);

  const loadList = (charactersState) => {
    return (
      <div className="character-list">
        <div className="character-list-header">
          <h3>Number of Results: {charactersState.info.count}</h3>
        </div>
        <ul className="character-list-results">
        {charactersState.results.map(character => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
        </ul>
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