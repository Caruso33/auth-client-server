import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';

import reducers from './reducers';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import App from './components/app';

import { AUTH_USER } from './actions/types';

// Development only axios helpers!
// import axios from 'axios';
// window.axios = axios;

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(middleware, reduxThunk, logger)
);

const token = localStorage.getItem('ks-token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
