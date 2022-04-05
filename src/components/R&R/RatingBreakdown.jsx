import React from 'react';
import Rating from '../ui/Rating/Rating';

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

function RatingBreakdown() {
  return (
    <section className="ratingBreakdown">

    </section>
   )
}

export default RatingBreakdown;
