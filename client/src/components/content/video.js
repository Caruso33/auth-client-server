import React, { Component } from 'react';

export default class VideoPlay extends Component {
  render() {
    return (
      <div>
        <iframe
          title="videoContent"
          // width="640" height="640"
          src="https://www.youtube.com/embed/sIvx7sC2soI"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      // <iframe src="https://player.vimeo.com/video/248996255?color=ffffff&title=0&byline=0&portrait=0&badge=0"
      //   width="640" height="640" frameborder="0"
      //   webkitallowfullscreen mozallowfullscreen allowfullscreen>
      // </iframe>
    );
  }
}
