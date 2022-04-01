import React from 'react';
// import requests from './requests';
import ReviewTile from './ReviewTile';

const id = 66642; // this represents an ID that's passed into props
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ReviewTile productId={id} />
    );
  }
}

export default RatingsAndReviews;
