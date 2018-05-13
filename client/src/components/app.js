import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';

import TitleBar from './partials/TitleBar';
import Footer from './partials/Footer';

import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';

// import RequireAuth from './auth/require_auth';
import Landing from './landing';
import Dashboard from './dashboard';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <TitleBar />
        <Route exact path="/" component={Landing} />
        <Route
          path="/dashboard"
          component={
            // RequireAuth(
            Dashboard
            // )
          }
        />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Footer />
      </Fragment>
    );
  }
}
