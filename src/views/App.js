import React, { Component } from 'react';
import { BrowserHistory, Route } from 'react';

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
