import {combineReducers} from "redux";

import characterReducer from "./characters";
import authReducer from "./auth";

export const reducers = combineReducers({characterState: characterReducer, authReducer});
