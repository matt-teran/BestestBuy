import React from 'react';

function Announcement() {
  return (
    <div className="announcement">
      <span className="message">SITE-WIDE ANNOUNCEMENT MESSAGE!</span>
      {' — '}
      <span className="sale">SALE / DISCOUNT OFFER!</span>
      {' — '}
      <span className="highlight">NEW PRODUCT HIGHLIGHT</span>
    </div>
  );
}

export default Announcement;
