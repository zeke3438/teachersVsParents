// Dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static popTypes = {
    title: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired
  };

  render() {
    const { title, menuItems } = this.props;
    return (
        <header className="Header">
          <div className="Logo"><img className="LogoImg" src={logo} alt="logo" /> {title} </div>
          <ul className="Menu">
            {menuItems && menuItems.map((item, key) => <li key={key}>{item.title}</li>)}
          </ul>
        </header>
    );
  }
}

export default Header;
