import React, { Component } from 'react';

export default class ContentAnhang extends Component {
  render() {
    return (
      <section>
        <h2>Das ist zu beachten </h2>
        <div style={{ width: 300 }}>
          <img
            style={{ width: '100%' }}
            src="https://nonfictionnook.files.wordpress.com/2015/08/tjk-first-scribble-notes-1.jpeg"
            alt="Scribble placeholder for show-notes"
          />
          <p>Lorem ipsum</p>
        </div>
      </section>
    );
  }
}
