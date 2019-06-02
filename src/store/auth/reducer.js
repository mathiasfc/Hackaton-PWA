import { LOADING_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
  isLoading: false,
  loginFailure: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginFailure: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginFailure: true,
      };
    default:
      return state;
  }
}
