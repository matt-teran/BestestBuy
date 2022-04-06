import React from 'react';
import './Search.scss';

const Search = (props) => {
  return (
    <div className='search-ctr'>
      <input
        className='search-input'
        type='text'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        name='question'>
      </input>
      <div className='icon-ctr'>
        <image className='search-btn' src=''></image>
      </div>
    </div>
  )
}

export default Search;

