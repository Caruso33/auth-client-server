import React, { Component } from 'react';
import { Paper } from 'material-ui';

import Einleitung from './einleitung';
import Anhang from './anhang';
import Video from './video';

export default class Content extends Component {
  render() {
    return (
      <Paper>
        <Einleitung />
        <Video />
        <Anhang />
      </Paper>
    );
  }
}
