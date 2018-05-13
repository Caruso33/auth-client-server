import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

// const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  const urlSignIn = '/signin';
  // process.env.NODE_ENV === 'production' ? '/signin' : `${ROOT_URL}/signin`;

  return dispatch => {
    // Submit email/password to the server
    axios
      .post(urlSignIn, { email, password })
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
  const urlSignUp = '/signup';
  // process.env.NODE_ENV === 'production' ? '/signup' : `${ROOT_URL}/signup`;

  return dispatch => {
    axios
      .post(urlSignUp, { email, password })
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
  const urlFetchMsg = '/';
  // process.env.NODE_ENV === 'production' ? '' : `${ROOT_URL}`;
  return dispatch => {
    axios
      .get(urlFetchMsg, {
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
