import React from 'react';
import { Grid } from 'material-ui';

export default () => (
  <Grid container>
    <Grid item xs={12}>
      <h2 style={{ textAlign: 'center' }}> Ruckenschmerz, RuckZuck </h2>
    </Grid>
    <Grid item xs={6}>
      <img
        style={{ width: '100%' }}
        src="https://www.sport-tiedje.de/blog/wp-content/uploads/2015/01/schulterheben.gif"
        alt="Exercise gif placeholder for simple explanation"
      />
    </Grid>
    <Grid item xs={6}>
      <p>
        Kurzerklaerung wie die Uebung funktioniert... Up ... and ... down ...
        bring it ... up ... and ... down
      </p>
    </Grid>
  </Grid>
);
