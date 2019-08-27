import {combineReducers} from 'redux';
import sampleReducer from './sampleReducer';
import loginReducer from './loginReducer';

export default combineReducers ({
  sample: sampleReducer,
  login: loginReducer,
});
