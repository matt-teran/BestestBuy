import React from 'react';
import './Search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  search(event) {
    event.preventDefault();
    const { searchInput } = this.state;
    this.props.onSearch(searchInput);
  }

  onChange(event) {
    this.setState({
      searchInput: event.target.value,
    }, () => {
      this.search(event);
    });
  }

  render() {
    return (
      <div className="search-ctr">
        <input
          onChange={this.onChange}
          className="search-input"
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          name="question"
        />
        <div className="icon-ctr">
          <img className="search-btn" src="" alt="" />
        </div>
      </div>
    );
  }
}
export default Search;

/*
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
*/
