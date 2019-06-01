import { LOADING_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
  isLoading: false,
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
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
