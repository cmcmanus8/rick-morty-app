import { 
  FETCH_CHARACTERS,
  FETCH_DETAILS,
  // FETCH_DETAILS_SUCCESS,
  // FETCH_DETAILS_ERROR,
  // SET_FAVE,
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

// export const fetchCharacters = () => async (dispatch) => {
//   try {
//     dispatch(fetchCharactersRequest());

//     const response = await api.fetchCharacters();
//     const characters = response.data.results;

//     if (response && response.status === 200) {
//       dispatch(fetchCharactersSuccess(characters));
//     }

//   } catch (error) {
//     dispatch(fetchCharactersError(error.message));
//   }
// }

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

// export const setFavourite = (id, favourite) => async (dispatch) => {
//   try {
//     const response = await api.setFavourite();

//     if (response && response.status === 200) {
//       const payload = response.data && response.data.id ? true : false;
//       dispatch({ type: SET_FAVE, payload });
//     }
//   } catch (error) {
//     console.log(error.message);
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