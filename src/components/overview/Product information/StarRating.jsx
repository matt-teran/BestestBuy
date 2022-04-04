import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../ui/Rating/Rating';

function StarRating({ rating, review }) {
  return (
    <div className="rating_review">
      <Rating rating={rating} size="20px" />
      {review !== 0 ? (
        <p>
          Read all
          {' '}
          {review}
          {' '}
          reviews
        </p>
      ) : null}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
  review: PropTypes.number,
};

StarRating.defaultProps = {
  rating: 0,
  review: 0,
};

export default StarRating;
