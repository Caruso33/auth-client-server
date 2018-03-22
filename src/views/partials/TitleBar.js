import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TitleBar.css';

export default class TitleBar extends Component {
  componentDidMount() {
    var hamburger = document.querySelector('#hamburger');
    var main = document.querySelector('main');
    var navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', function(e) {
      navUl.classList.toggle('open');
      e.stopPropagation();
    });
    main.addEventListener('click', function() {
      navUl.classList.remove('open');
    });
  }
  render() {
    let title = 'Kurz & Schmerzlos';
    let NavItems = ['Home', 'Kontakt', 'Über', 'Symptome', 'Videos'];
    let navItems = NavItems.map(item => {
      return (
        <li key={item}>
          <Link
            className={item === 'Home' ? 'active' : ''}
            to={`${item.toLowerCase()}`}
          >
            {item}
          </Link>
        </li>
      );
    });
    return (
      <header>
        <nav>
          <h1>{title}</h1>
          <ul>{navItems}</ul>
          <div id="hamburger">
            <i className="fas fa-bars fa-2x" />
          </div>
        </nav>
      </header>
    );
  }
}
//
// TitleBar.propTypes = {
//   title: PropTypes.string.isRequired
// }
