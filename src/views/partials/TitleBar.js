import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './TitleBar.css';

export default class TitleBar extends Component{
  render(){
    let title = 'Kurz & Schmerzlos'
    let NavItems = ['Home', 'Kontakt', 'Über', 'Symptome', 'Videos'];
    let navItems = NavItems.map(item => {
      return(
        <span key={item}>
          <a className = {item === 'Home'? 'active' : ""}
            href={`#${item.toLowerCase()}`}>{item}
          </a>
        </span>
      );
    });

    return(
      <header>
        <nav>
          <h1> {title}</h1>
          <div className="nav-wrapper">{navItems} </div>
          <div id="hamburger"><i className="fas fa-bars fa-2x"></i></div>
        </nav>
      </header>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
}
