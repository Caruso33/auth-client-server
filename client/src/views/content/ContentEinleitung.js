import React, { Component } from 'react';
import './ContentEinleitung.css';

export default class ContentEinleitung extends Component {
  render() {
    return (
      <section className="contentEinleitung">
        <h2> Ruckenschmerz, RuckZuck </h2>
        <div className="contentEinleitung_container">
          <img
            src="https://www.sport-tiedje.de/blog/wp-content/uploads/2015/01/schulterheben.gif"
            alt="Exercise gif placeholder for simple explanation"
          />
          {/* <img
            src="https://nonfictionnook.files.wordpress.com/2015/08/tjk-first-scribble-notes-1.jpeg"
            alt="Scribble placeholder for show-notes"
          /> */}
          <p>
            Kurzerklaerung wie die Uebung funktioniert... Up ... and ... down
            ... bring it ... up ... and ... down
          </p>
        </div>
      </section>
    );
  }
}
