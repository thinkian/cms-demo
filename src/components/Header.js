import React from 'react';
import Link from 'gatsby-link';

import SearchButton from './SearchButton';

const Header = ({ isHome }) => (
  <header className={`tc-header ${isHome ? '' : 'tc-header--static'}`}>
    <div className="tc-container">
      <Link to="/" className="tc-logo">
        Think Company
      </Link>
      <nav className="tc-navigation">
        <ul className="tc-navigation-list">
          <li>
            <Link to="/" className="tc-navigation-link">
              <i className="fas fa-home" />
              <span className="tc-navigation-link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="tc-navigation-link">
              <i className="fas fa-tag" />
              <span className="tc-navigation-link-text">Categories</span>
            </Link>
          </li>
          <li>
            <SearchButton />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
