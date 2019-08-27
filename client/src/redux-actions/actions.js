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

// export const Login = (username, password) => {
//     return dispatch => {
//         axios.post('http://localhost:5000/signin', {
//             username: username,
//             password: password
//         })
//         .then((response)=>{
//             dispatch({
//                 type: AUTH_LOGIN,
//                 username: response.username
//             })
//         })
//         .catch((error)=>{
//             console.log("There is no user with the given username and password");
//             //alert("Username does not exist");
//         })
//     };
// };
