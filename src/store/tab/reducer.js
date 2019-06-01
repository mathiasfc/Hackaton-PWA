import { LOADING_TAB, RECEIVE_TAB } from './actions';

const initialState = {
  isLoading: false,
  tab: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_TAB: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case RECEIVE_TAB: {
      return {
        ...state,
        isLoading: false,
        tab: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
