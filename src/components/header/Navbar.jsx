import React from 'react';

import Search from './Search';

import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <Search />
    </div>
  );
}

export default Navbar;
