import React from 'react';
import './Search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    // this.search = this.search.bind(this);
    // this.onChange = this.onChange.bind(this);
  }
  /*
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
  */

  render() {
    const { changeHandler } = this.props;
    const { search } = this.props;
    return (
      <div className="search-ctr">
        <input
          onChange={changeHandler}
          className="search-input"
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          name="question"
        />
        <div className="icon-ctr">
          <button type="submit" onClick={search} className="search-btn">
            <img className="mag-glass" src="https://media.istockphoto.com/vectors/search-icon-vector-vector-id456619549?k=20&m=456619549&s=170667a&w=0&h=n6cAcqBrcJY8CVTc3jnYytzytE2iud7CfoZs6QyIuNw=" alt="" />
          </button>
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
