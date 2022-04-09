import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../ui/Rating/Rating';

function StarRating({ rating, review, scrollToView }) {
  return (
    <div className="rating_review">
      <Rating rating={rating} size="20px" />
      <p>{' '}</p>
      {review !== 0 ? (
        <u onClick={() => scrollToView()} aria-hidden="true">
          Read all
          {' '}
          {review}
          {' '}
          reviews
        </u>
      ) : null}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
  review: PropTypes.number,
  scrollToView: PropTypes.func,
};

StarRating.defaultProps = {
  rating: 0,
  review: 0,
  scrollToView: () => {},
};

export default StarRating;
