import axios from 'axios';
import jwtDecode from 'jwt-decode';

import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from '../actions/types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function login(data) {
  return dispatch => axios.post('/api/auth', data).then((res) => {
    const token = res.data.token;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwtDecode(token)));
  });
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}
