import {
  FETCH_CHARACTERS,
  LOAD_MORE,
  FETCH_DETAILS,
  FETCH_FAVOURITES,
  SET_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../utils/constants";

const initialState = {
  characters: {},
  currentCharacter: null,
  loading: false,
  favouriteIds: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: {...action.payload},
      };
    case LOAD_MORE:
      return {
        ...state,
        characters: {
          info: action.payload.info,
          results: [...state.characters.results].concat(action.payload.results),
        },
      };
    case FETCH_DETAILS:
      return {
        ...state,
        currentCharacter: action.payload,
      };
    case FETCH_FAVOURITES:
      return {
        ...state,
        favouriteIds: [...action.payload.map((fave) => fave.characterId)],
      };
    case SET_FAVOURITE:
      return {
        ...state,
        favouriteIds: [...state.favouriteIds, action.payload.characterId],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favouriteIds: [
          ...state.favouriteIds.filter((favouriteId) => favouriteId !== action.payload),
        ],
      };
    default:
      return {...state};
  }
};

export default characterReducer;
