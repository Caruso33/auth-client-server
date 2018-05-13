import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TitleBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    } else {
      // show a link to sign in or sign up
      return [
        <li key={1}>
          <Link to="/signin">Sign In</Link>
        </li>,
        <li key={2}>
          <Link to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav
        style={{
          backgroundColor: '#dfdfda',
          color: '#3a4055',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Link to="/">Kurz & Schmerzlos</Link>
        <Link to="/dashboard">Dashboard</Link>
        <ul>{this.renderLinks()}</ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(TitleBar);
