import React, { Component } from 'react';

export default class ContentEinleitung extends Component {
  render() {
    return (
      <section>
        <h2> Ruckenschmerz, RuckZuck </h2>
        <div style={{ width: 300 }}>
          <img
            style={{ width: '100%' }}
            src="https://www.sport-tiedje.de/blog/wp-content/uploads/2015/01/schulterheben.gif"
            alt="Exercise gif placeholder for simple explanation"
          />
          <p>
            Kurzerklaerung wie die Uebung funktioniert... Up ... and ... down
            ... bring it ... up ... and ... down
          </p>
        </div>
      </section>
    );
  }
}
