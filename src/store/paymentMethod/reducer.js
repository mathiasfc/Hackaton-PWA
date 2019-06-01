import {
  LOADING_ADD_CARD,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  LOADING_CARDS,
  RECEIVE_CARDS,
} from './actions';

const initialState = {
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_ADD_CARD:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_CARD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOADING_CARDS:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_CARDS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
