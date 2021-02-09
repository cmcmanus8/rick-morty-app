import { 
  FETCH_CHARACTERS,
  FETCH_DETAILS,
  // FETCH_CHARACTERS_REQUEST,
  // FETCH_CHARACTERS_SUCCESS,
  // FETCH_CHARACTERS_ERROR,
  // FETCH_DETAILS_SUCCESS,
  // FETCH_DETAILS_ERROR,
  // SET_FAVE,
  // CLEAR_DETAILS,
  // CLEAR_LIST
 } from '../utils/constants';

const initialState = {
  characters: {},
  currentCharacter: null,
  loading: false,
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
    // case SET_FAVE:
    //   return {...state, faveCharacter: payload}
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
