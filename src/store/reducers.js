import { combineReducers } from 'redux';
import paymentMethod from './paymentMethod/reducer';
import auth from './auth/reducer';
import tab from './tab/reducer';

export default combineReducers({
  auth,
  paymentMethod,
  tab,
});
