import React from 'react';
// import requests from './requests';
// import ReviewTile from './ReviewTile';
import ReviewsList from './ReviewsList';
import './RatingsAndReviews.scss';
import RatingSummary from './RatingSummary';

const tempData = {
  product_id: '66659',
  ratings: {
    1: '6',
    2: '2',
    3: '4',
    4: '5',
    5: '3',
  },
  recommended: {
    false: '6',
    true: '14',
  },
  characteristics: {
    Fit: {
      id: 223628,
      value: '2.8000000000000000',
    },
    Length: {
      id: 223629,
      value: '2.8500000000000000',
    },
    Comfort: {
      id: 223630,
      value: '2.8000000000000000',
    },
    Quality: {
      id: 223631,
      value: '3.2500000000000000',
    },
  },
};

const id = 66659; // this represents an ID that's passed into props
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <RatingSummary productStats={tempData} />
        <ReviewsList productId={id} />
      </div>
    );
  }
}

export default RatingsAndReviews;
