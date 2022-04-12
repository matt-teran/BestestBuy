/* eslint-disable */
import React from 'react';
import request from './requests.js';
import ReviewsList from './ReviewsList';
import './RatingsAndReviews.scss';
import RatingSummary from './RatingSummary';
import ProductFactors from './ProductFactors'
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      productData: {},
      filter: false,
    };
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
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
    const { isLoaded, productData, filter } = this.state;
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
            <ProductFactors productStats={productData} />
          </div>

          <ReviewsList productId={id} filter={filter} />
        </div>
      );
    }
  }
}

export default RatingsAndReviews;
