import { combineReducers } from 'redux';
import paymentMethod from './paymentMethod/reducer';
import auth from './auth/reducer';

export default combineReducers({
  auth,
  paymentMethod,
});
