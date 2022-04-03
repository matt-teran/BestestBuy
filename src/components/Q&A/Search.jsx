import React from 'react';
import './Search.scss';

function Search({ placeholder, data }) {
  return (
    <div className="search">
      <div className="search-input"></div>
      <input type='text' placeholder={placeholder} />
      <div className='search-icon'></div>
      <div className='data-result'></div>
    </div>
  );
}

export default Search;


/*


class Search extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {
      //term: ''
    };
    //this.search = this.search.bind(this);
  }

  //search() {
  //this.props.onSearch(this.state.term);
  //}

  render() {
    return ();
  }
}
render() {
  return (<div
    className="Search">
      <form action='/' method='GET' class='form'>
        <input type='search' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS' className='search-field' />
        <button type='submit' class='search-button'>
          <img src='https://www.kindacode.com/wp-content/uploads/2020/12/search.png'>
        </button>
      </form>
    </div>
  );
}
*/