import React, { Component } from 'react';
import PropTypes from 'prop-types'

import TitleBar from './partials/TitleBar';
import Footer from './partials/Footer';

import Content from './Content';
import './App.css';

export default class App extends Component{
  render(){
    return(
      <div className='container'>
        <TitleBar />
        <Content/>
        <Footer/>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired
}
