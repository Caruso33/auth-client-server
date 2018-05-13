import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

let ROOT_URL;
if (process.env.NODE_ENV === 'production') {
  ROOT_URL = '/';
} else {
  ROOT_URL = 'http://localhost:3090';
}
export function signinUser({ email, password }) {
  return dispatch => {
    // Submit email/password to the server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('ks-token', response.data.token);
        // - redirect to the route '/dashboard'
        this.history.push('/dashboard');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signupUser({ email, password }) {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('ks-token', response.data.token);
        this.history.push('/dashboard');
      })
      .catch(response => {
        return dispatch(authError(response.data.error));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('ks-token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return dispatch => {
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem('ks-token') }
      })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}
