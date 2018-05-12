import React, { Component } from 'react';

import TitleBar from './partials/TitleBar';
import Footer from './partials/Footer';

import Content from './content/';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <TitleBar />
        <Content />
        <Footer />
      </div>
    );
  }
}
// logo farbe       #3a4055
