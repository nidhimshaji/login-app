import { LOGIN } from '../redux-actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      //console.log('action', action.payload);
      // console.log('reducerstate', { ...state, ...action.payload });
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
