import { AUTH } from '../utils/constants';

import * as api from '../api';

// Action Creators
export const signin = (formData, history) => async (dispatch) => {
  try {

    history.push('/')
  } catch (error) {
    console.log(error);
  }
}

export const register = (formData, history) => async (dispatch) => {
  try {
    
    history.push('/')
  } catch (error) {
    console.log(error);
  }
}