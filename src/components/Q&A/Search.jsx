import React from 'react';
import './Search.scss';

function Search(props) {
  return (
    <div className='search-ctr'>
      <input
        className='search-input'
        type='text'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        name='question' />
      <div className='icon-ctr'>
        <img className='search-btn' src='' />
      </div>
    </div>
  );
}

export default Search;

