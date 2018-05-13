import React, { Component } from 'react';
import { Grid } from 'material-ui';

export default class VideoPlay extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <iframe
            style={{
              display: 'block',
              margin: 'auto',
              width: '50%',
              minWidth: 300,
              height: 300
            }}
            title="videoContent"
            // width="640" height="640"
            src="https://www.youtube.com/embed/sIvx7sC2soI"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Grid>
      </Grid>
    );
  }
}
{
  /* <iframe src="https://player.vimeo.com/video/248996255?color=ffffff&title=0&byline=0&portrait=0&badge=0"
width="640" height="640" frameborder="0"
webkitallowfullscreen mozallowfullscreen allowfullscreen>
</iframe>  */
}
