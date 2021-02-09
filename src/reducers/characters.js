import { 
  FETCH_CHARACTERS,
  FETCH_DETAILS,
  // FETCH_CHARACTERS_REQUEST,
  // FETCH_CHARACTERS_SUCCESS,
  // FETCH_CHARACTERS_ERROR,
  // FETCH_DETAILS_SUCCESS,
  // FETCH_DETAILS_ERROR,
  FETCH_FAVOURITES,
  SET_FAVOURITE,
  REMOVE_FAVOURITE,
  // CLEAR_DETAILS,
  // CLEAR_LIST
 } from '../utils/constants';

const initialState = {
  characters: {},
  currentCharacter: null,
  loading: false,
  favouriteIds: [],
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: {...action.payload}
      };
    case FETCH_DETAILS:
      return {
        ...state,
        currentCharacter: action.payload
      };
    case FETCH_FAVOURITES:
      return {
        ...state,
        favouriteIds: [...action.payload.map((fave) => fave.characterId)]
      }
    case SET_FAVOURITE:
      return {
        ...state,
        favouriteIds: [...state.favouriteIds, action.payload.characterId]
      }
    case REMOVE_FAVOURITE:
      console.log("reducer+++++", action)
      return {
        ...state,
        favouriteIds: [...state.favouriteIds.filter((favouriteId) => favouriteId!== action.payload)]
      }
    // case FETCH_CHARACTERS_SUCCESS:
    //   return {
    //     loading: false,
    //     characters: action.payload, 
    //     error: false
    //   };
    // case FETCH_CHARACTERS_ERROR:
    //   return {
    //     ...state, 
    //     error: action.error
    //   };
    // case FETCH_DETAILS_SUCCESS:
    //   return {...state, details: payload.character, faveCharacter: payload.favourite , error: false};
    // case FETCH_DETAILS_ERROR:
    //   return {...state, error: action.error};
    // case CLEAR_DETAILS:
    //   return {...state, details: null}
    // case CLEAR_LIST:
    //   return initialState;
    // case REMOVE:
    //   return characters.filter((character) => character._id !== action.payload);
    // case FIND_EPISODE:
    //   return [...characters]action.payload)
    default:
      return {...state};
  }
};

export default characterReducer;
