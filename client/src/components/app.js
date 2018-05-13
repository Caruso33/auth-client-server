import React, { Component } from 'react';
import { Route } from 'react-router';

import TitleBar from './partials/TitleBar';
import Footer from './partials/Footer';

import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';

import RequireAuth from './auth/require_auth';
import Landing from './landing';
import Dashboard from './dashboard';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3a4055'
    },
    // secondary: { main: '#dfdfda' },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  overrides: {
    MuiButtonBase: {},
    a: {
      root: {
        color: '#dfdfda',
        textDecoration: 'none'
      }
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <TitleBar />
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={RequireAuth(Dashboard)} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Footer />
      </MuiThemeProvider>
    );
  }
}
