/* eslint-disable */
import React from 'react';
import request from './requests.js';
import ReviewsList from './ReviewsList';
import './RatingsAndReviews.scss';
import RatingSummary from './RatingSummary';
import ProductFactors from './ProductFactors';
import Select from 'react-select';
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      { value: 'newest', label: 'Newest' },
      { value: 'helpful', label: 'Helpful' },
      { value: 'relevant', label: 'Relevant (default)' },
    ]

    this.state = {
      isLoaded: false,
      productData: {},
      filter: false,
      reviewsSort: 'relevant',
    };
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.handleSortOptions = this.handleSortOptions.bind(this);
  }

  handleSortOptions(option) {
    this.setState({reviewsSort: option.value});
  }

  componentDidMount() {
    const { isLoaded } = this.state;
    const { id } = this.props;

    if (!isLoaded) {
      request.getReviewsSummary(id)
        .then(({ data }) => {
          this.setState({
            productData: data,
            isLoaded: true,
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  handleFilterSelect(starRating) {
    this.setState({ filter: starRating });
  }


  render() {
    const { isLoaded, productData, filter, reviewsSort } = this.state;
    const { id } = this.props;
    if (!isLoaded) {
      return (
        <div>
          Loading Rating Overview...
        </div>)
    } else {
      return (
        <div>
          <div className="overall-stats">
            <RatingSummary productStats={productData} filterSelect={this.handleFilterSelect} />
            <div className="product-factors">
              <ProductFactors productStats={productData} />
            </div>
          </div>
          <div className="reviews-list">
            <div className="sort-dropdown">
              <Select onChange={(option)=>{this.handleSortOptions(option)}} options={this.options} placeholder='Relevance (default)' />
            </div>
            <ReviewsList productId={id} filter={filter} reviewsSort={reviewsSort} />
          </div>
        </div>
      );
    }
  }
}

export default RatingsAndReviews;
