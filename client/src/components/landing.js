import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <Fragment>
        <h2>Landing Page</h2>
        <div>{this.props.message}</div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Landing);
