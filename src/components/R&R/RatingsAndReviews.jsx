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
    };
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

  render() {
    const { isLoaded, productData } = this.state;
    const { id } = this.props;
    if (!isLoaded) {
      return (
        <div>
          Loading Rating Overview...
          <ReviewsList productId={id} />
        </div>)
    } else {
      return (
        <div>
          <RatingSummary productStats={productData} />
          <ReviewsList productId={id} />
        </div>
      );
    }
  }
}

export default RatingsAndReviews;
