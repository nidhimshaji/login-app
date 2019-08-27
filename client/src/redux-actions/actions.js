import axios from 'axios';

import { SET_SAMEPLE, LOGIN } from './types';

export const fetchSample = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/sample/getSampleSentence`);
    //console.log(res);
    dispatch({ type: SET_SAMEPLE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const login = (name, password) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/sample/login`, {
      name: name,
      password: password,
    });
    console.log('login', res);
    dispatch({ type: LOGIN, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
