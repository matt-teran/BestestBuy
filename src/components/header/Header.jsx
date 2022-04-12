import React from 'react';
import Navbar from './Navbar';
import Announcement from './Announcement';

import './Header.scss';

function Header() {
  return (
    <div className="header" id="header">
      <Navbar />
      <Announcement />
    </div>
  );
}

export default Header;
