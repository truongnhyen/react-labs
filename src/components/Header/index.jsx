import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <ul className="navigation">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/magic-box">Magic Box</NavLink>
        </li>
        <li>
          <NavLink to="/rendering">Rendering</NavLink>
        </li>
        <li>
          <NavLink to="/color-box">Color Box</NavLink>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            Go to Google
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
