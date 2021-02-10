import {AUTH} from "../utils/constants";

import * as api from "../api";

// Action Creators
export const signin = (formData, history) => async (dispatch) => {
  try {
    const {data} = await api.signin(formData);

    dispatch({type: AUTH, data});

    history.push("/characters");
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const {data} = await api.register(formData);

    dispatch({type: AUTH, data});

    history.push("/characters");
  } catch (error) {
    console.log(error);
  }
};
