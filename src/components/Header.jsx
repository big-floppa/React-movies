import React, { Component } from 'react';
import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="blue lighten-1 nav">
        <div className="nav-wrapper">
          <a className="brand-logo grey-text text-lighten-4 logo" href="#">
            <img src={logo} alt="logo" width="50" />
            <h5 className="logo-title">React movies</h5>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
