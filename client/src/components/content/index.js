import React, { Component } from 'react';

import Einleitung from './einleitung';
import Anhang from './anhang';
import Video from './video';

export default class Content extends Component {
  render() {
    return (
      <main>
        <Einleitung />
        <Video />
        <Anhang />
      </main>
    );
  }
}
