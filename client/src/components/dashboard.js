import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  render() {
    return <div>Secret Dashboard page</div>;
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(App);
