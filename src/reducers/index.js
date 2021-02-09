import { combineReducers } from 'redux';

import characterReducer from './characters';

export const reducers = combineReducers({ characterState: characterReducer });