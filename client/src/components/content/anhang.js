import React, { Component } from 'react';
import { Grid } from 'material-ui';

export default class ContentAnhang extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center' }}>Das ist zu beachten </h2>
        </Grid>
        <Grid item xs={6}>
          <p>Lorem ipsum</p>
        </Grid>
        <Grid item xs={6}>
          <img
            style={{ width: '100%' }}
            src="https://nonfictionnook.files.wordpress.com/2015/08/tjk-first-scribble-notes-1.jpeg"
            alt="Scribble placeholder for show-notes"
          />
        </Grid>
      </Grid>
    );
  }
}
