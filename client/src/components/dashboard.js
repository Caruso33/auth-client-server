import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Content from './content/';

class App extends Component {
  render() {
    return <Content />;
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(App);
