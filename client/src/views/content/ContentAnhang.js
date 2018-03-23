import React, { Component } from 'react';
import './ContentAnhang.css';

export default class ContentAnhang extends Component {
  render() {
    return (
      <section className="contentAnhang">
        <h2>Das ist zu beachten </h2>
        <div className="contentAnhang_container">
          <img
            src="https://nonfictionnook.files.wordpress.com/2015/08/tjk-first-scribble-notes-1.jpeg"
            alt="Scribble placeholder for show-notes"
          />
          <p>Lorem ipsum</p>
        </div>
      </section>
    );
  }
}
