/* eslint-disable */
import React from 'react';
import request from './requests.js';
import ReviewsList from './ReviewsList';
import './RatingsAndReviews.scss';
import RatingSummary from './RatingSummary';
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
        .then(( { data } ) => {
          this.setState({
            productData: data,
            isLoaded: true,
          })
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  }

  handleFilterSelect (starRating) {
    console.log('entered');
    this.setState({filter: starRating});
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
          <RatingSummary productStats={productData} filterSelect={this.handleFilterSelect} />
          <ReviewsList productId={id} filter={filter} />
        </div>
      );
    }
  }
}

export default RatingsAndReviews;
