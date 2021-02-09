import { 
  FETCH_CHARACTERS,
  FETCH_DETAILS,
  // FETCH_DETAILS_SUCCESS,
  // FETCH_DETAILS_ERROR,
  SET_FAVOURITE,
  REMOVE_FAVOURITE,
  FETCH_FAVOURITES,
  // CLEAR_DETAILS,
  // CLEAR_LIST
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
    console.log("actions ---- remove fired", id);
    await api.removeFavourite(id);

    dispatch({ type: REMOVE_FAVOURITE, payload: id })
  } catch (error) {
    console.log(error.message);
  }
}


// export const fetchCharactersRequest = () => {
//   return {
//     type: FETCH_CHARACTERS_REQUEST,
//   };
// };

// export const fetchCharactersSuccess = (characters) => {
//   return {
//     type: FETCH_CHARACTERS_SUCCESS,
//     payload: characters,
//   };
// };

// export const fetchCharactersError = (error) => {
//   return {
//     type: FETCH_CHARACTERS_ERROR,
//     payload: error,
//   };
// };

// export const fetchDetails = (id) => async (dispatch) => {
//   try {
//     const response = await api.fetchDetails();

//     if (response && response.status === 200) {
//       dispatch({ type: FETCH_DETAILS_SUCCESS, payload: response.data });
//     }
//   } catch (error) {
//     dispatch({ type: FETCH_DETAILS_ERROR, payload: error });
//   }
// }

// export const clearDetails = () => {
//   return {
//     type: CLEAR_DETAILS,
//     payload: null
//   };
// }

// export const clearList = () => {
//   return {
//     type: CLEAR_LIST,
//     payload: []
//   };
// }