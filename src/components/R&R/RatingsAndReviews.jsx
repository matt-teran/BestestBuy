import React from 'react';
// import requests from './requests';
// import ReviewTile from './ReviewTile';
import ReviewsList from './ReviewsList';
import './RatingsAndReviews.scss';

const id = 66659; // this represents an ID that's passed into props
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ReviewsList productId={id} />
    );
  }
}

export default RatingsAndReviews;
