import { 
  FETCH_CHARACTERS,
  LOAD_MORE,
  FETCH_DETAILS,
  SET_FAVOURITE,
  REMOVE_FAVOURITE,
  FETCH_FAVOURITES,
 } from '../utils/constants';

import * as api from '../api';

// Action Creators
export const fetchCharacters = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCharacters();

    dispatch({ type: FETCH_CHARACTERS, payload: data })
  } catch (error) {
    console.log(error.message);
  }
};

export const loadMore = (nextPage) => async (dispatch) => {
  try {
    const { data } = await api.loadMore(nextPage);

    dispatch({ type: LOAD_MORE, payload: data })
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchDetails(id);

    dispatch({ type: FETCH_DETAILS, payload: data })
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchFavourites = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFavourites();

    dispatch({ type: FETCH_FAVOURITES, payload: data })
  } catch (error) {
    console.log(error.message);
  }
};

export const setFavourite = (characterId) => async (dispatch) => {
  try {
    const { data } = await api.setFavourite(characterId);

    dispatch({ type: SET_FAVOURITE, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const removeFavourite = (id) => async (dispatch) => {
  try {
    await api.removeFavourite(id);

    dispatch({ type: REMOVE_FAVOURITE, payload: id })
  } catch (error) {
    console.log(error.message);
  }
}