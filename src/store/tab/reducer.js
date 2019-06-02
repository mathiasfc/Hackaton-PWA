import {
  LOADING_TAB,
  RECEIVE_TAB,
  CANCEL_CAMERA_ACCESS,
  ACTIVATE_CAMERA,
  CLEAR_TAB,
} from './actions';

const initialState = {
  isLoading: false,
  tab: {},
  cameraAccess: true,
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
    case CANCEL_CAMERA_ACCESS: {
      return {
        ...state,
        cameraAccess: false,
      };
    }
    case ACTIVATE_CAMERA: {
      return {
        ...state,
        cameraAccess: true,
      };
    }
    case CLEAR_TAB: {
      return {
        ...state,
        tab: {},
      };
    }
    default:
      return {
        ...state,
      };
  }
}
