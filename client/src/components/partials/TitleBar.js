import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, IconButton, Button } from 'material-ui';
import { Menu } from '@material-ui/icons';

const styles = {
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  a: {
    color: '#dfdfda',
    textDecoration: 'none'
  }
};

class TitleBar extends Component {
  renderLinks() {
    const { classes } = this.props;
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <Button color="inherit">
          <Link className={classes.a} to="/signout">
            Sign Out
          </Link>
        </Button>
      );
    } else {
      // show a link to sign in or sign up
      return [
        <Button color="inherit" key={1}>
          <Link className={classes.a} to="/signin">
            Sign In
          </Link>
        </Button>,
        <Button color="inherit" key={2}>
          <Link className={classes.a} to="/signup">
            Sign Up
          </Link>
        </Button>
      ];
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.flex}
        // style={{
        //   backgroundColor: '#dfdfda',
        //   color: '#3a4055',
        //   display: 'flex',
        //   justifyContent: 'space-around',
        //   alignItems: 'center'
        // }}
      >
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Menu style={{ fill: '#dfdfda' }} />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <Link className={classes.a} to="/">
                Kurz & Schmerzlos
              </Link>
            </Typography>
            <Typography
              variant="subheading"
              color="inherit"
              className={classes.flex}
            >
              <Link className={classes.a} to="/dashboard">
                Dashboard
              </Link>
            </Typography>
            {this.renderLinks()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(withStyles(styles)(TitleBar));
