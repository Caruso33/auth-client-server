import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import BottomNavigation, {
  BottomNavigationAction
} from 'material-ui/BottomNavigation';
import { Restore, Favorite, LocationOn } from '@material-ui/icons';

const styles = {
  root: {
    flex: 1
  }
};

export default withStyles(styles)(
  class Footer extends Component {
    handleChange = (event, value) => {
      console.log(value);
    };
    render() {
      const { classes } = this.props;
      return (
        <BottomNavigation
          value={0}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        </BottomNavigation>
      );
    }
  }
);
