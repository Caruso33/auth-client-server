import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Paper } from 'material-ui';

class Landing extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <Paper style={{ marginTop: 74 }}>
        <h2>Landing Page</h2>
        <div>{this.props.message}</div>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Landing);
