import {SET_SAMEPLE} from '../redux-actions/types';

export default function (
  state = {
    sentence: 'Loading ...',
  },
  action
) {
  switch (action.type) {
    case SET_SAMEPLE:
      return {...state, sentence: action.payload};
    default:
      return state;
  }
}
