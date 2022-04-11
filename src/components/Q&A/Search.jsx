import React from 'react';
import './Search.scss';
import propTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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

Search.propTypes = {
  changeHandler: propTypes.func.isRequired,
  search: propTypes.func.isRequired,
};

export default Search;
