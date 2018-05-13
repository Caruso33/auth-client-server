import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Paper } from 'material-ui';

import Content from './content/';

class App extends Component {
  render() {
    return (
      <Paper style={{ marginTop: 64 }}>
        <Content />
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(App);
