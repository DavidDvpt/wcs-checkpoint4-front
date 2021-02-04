import { LOGIN, LOGOUT } from './actionTypes';

export function loginAction(token, family) {
  return {
    type: LOGIN,
    payload: {
      token,
      admin: family,
    },
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
    payload: {
      token: null,
      admin: {},
    },
  };
}
