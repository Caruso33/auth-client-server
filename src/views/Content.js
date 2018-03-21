import React, { Component } from 'react';
import './Content.css';

import OtherContent from './content/OtherContent';
import VideoPlay from './content/VideoPlay';

export default class Content extends Component{
  render(){
    return(
      <div className='content'>
        <OtherContent/>
        <VideoPlay />
      </div>
    );
  }
}
