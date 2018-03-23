import React, { Component } from 'react';
import './Content.css';

import ContentEinleitung from './content/ContentEinleitung';
import ContentAnhang from './content/ContentAnhang';
import VideoPlay from './content/VideoPlay';

export default class Content extends Component {
  render() {
    return (
      <main>
        <ContentEinleitung />
        <VideoPlay />
        <ContentAnhang />
      </main>
    );
  }
}
