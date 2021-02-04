import { LOGIN, LOGOUT } from './actionTypes';

const initState = {
  token: null,
  admin: {},
};

function adminReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        admin: action.payload.admin,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        admin: {},
      };
    default:
      return state;
  }
}

export default adminReducer;
