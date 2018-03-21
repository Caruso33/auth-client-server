import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './VideoPlay.css';

export default class VideoPlay extends Component{
  render(){
    return(
      <div className='contentVideo'>

        <iframe
          // width="640" height="640"
          src="https://www.youtube.com/embed/sIvx7sC2soI"
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>

        </iframe>
      </div>

          // <iframe src="https://player.vimeo.com/video/248996255?color=ffffff&title=0&byline=0&portrait=0&badge=0"
          //   width="640" height="640" frameborder="0"
          //   webkitallowfullscreen mozallowfullscreen allowfullscreen>
          // </iframe>
    )
  }
}
